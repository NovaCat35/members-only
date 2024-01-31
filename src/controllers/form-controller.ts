import { Request, Response, NextFunction } from "express";
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const passport = require("passport");

import {IUserDocument} from "../models/user";

// CONTROLLER FOR LOGIN, SIGN-UP, & Member status FORM
exports.homepage = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const messages = await Message.find({}).exec();
	res.render("index", {
		title: "Members Only",
		messages: messages,
	});
});

exports.signup_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	res.render("signup", {
		title: "Sign-up Page",
	});
});

exports.signup_post = [
	body("username", "Username required").trim().notEmpty().escape(),
	body("password", "Invalid password").trim().notEmpty().isLength({ min: 8 }).withMessage("Password must be greater than 8 characters.").escape(),
	body("password_confirmation", "Invalid password").trim().notEmpty().isLength({ min: 8 }).withMessage("Password must be greater than 8 characters.").escape(),

	asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);

		// Check if password & confirm password matches or there's errors
		if (!errors.isEmpty() || req.body.password !== req.body.password_confirmation) {
			res.render("signup", {
				title: "Sign-up Page",
				username: req.body.username,
				errors: errors.array(),
				password_error: "Passwords do not match, please try again.",
			});
		} else {
			// Hash and salt
			bcrypt.hash(req.body.password, 10, async (err: Error, hashedPassword: String) => {
				// Check if hashing error
				if (err) {
					console.error("Error hashing password:", err);
					return res.status(500).send("Internal Server Error");
				}
				let user = new User({
					username: req.body.username,
					password: hashedPassword,
					member_status: 'onlooker',
				});
				await user.save();

				// Redirect to the main message page
				res.redirect(`/messages/${user.url}`);
			});
		}
	}),
];

exports.login_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	res.render("login", {
		title: "Login Page",
	});
});

// exports.login_post = passport.authenticate("local", {
// 	successRedirect: "/messages",
// 	failureRedirect: "/login",
// 	failureMessage: true,
// });

exports.login_post = function (req: any, res: Response, next: NextFunction) {
	passport.authenticate("local", function (err: Error, user: IUserDocument, info: Object) {
		if (err) {
			// Issue occurred with authentication
			return next(err);
		}

		if (!user) {
			// Authentication failed, no user found. Render to login page with error message
			return res.render("login", {
				title: "Login Page",
				username: req.body.username,
				error: "Invalid username or password",
			});
		}

		req.logIn(user, function (err: Error) {
			if (err) {
				return next(err);
			}
			// Authentication successful, render to messages page
			return res.redirect(`/messages/${user.url}`);
		});
	})(req, res, next);
};

exports.logout_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	req.logout((err: Error) => {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
});

