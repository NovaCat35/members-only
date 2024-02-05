import { Request, Response, NextFunction } from "express";
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const passport = require("passport");

import { IUserDocument } from "../models/user";

// CONTROLLER FOR LOGIN, SIGN-UP, & Member status FORM
exports.signup_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	res.render("signup", {
		title: "Sign-up Page",
	});
});

exports.signup_post = [
	body("username", "Username required").trim().notEmpty().escape(),
	body("password", "Invalid password").trim().notEmpty().isLength({ min: 8 }).withMessage("Password must be greater than 8 characters.").escape(),
	body("password_confirmation", "Invalid password").trim().notEmpty().isLength({ min: 8 }).withMessage("Password must be greater than 8 characters.").escape(),

	asyncHandler(async (req: any, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		const userExist = await User.findOne({ username: req.body.username });
		let errorType = "";

		// Check if password & confirm password matches or there's errors
		if (!errors.isEmpty() || req.body.password !== req.body.password_confirmation) {
			errorType = "Passwords do not match, please try again.";
			res.render("signup", {
				title: "Sign-up Page",
				username: req.body.username,
				errors: errors.array(),
				password_error: errorType,
			});
			return;
		}

		if (userExist) {
			errorType = "Username taken, try another name.";
			res.render("signup", {
				title: "Sign-up Page",
				username: req.body.username,
				password_error: errorType,
			});
			return;
		}

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
				member_status: "traveler",
				date_joined: new Date(),
			});
			await user.save();

			// Redirect to the main message page and establish login session.
			req.login(user, function (err: Error) {
				if (err) {
					console.log(err);
				}
				return res.redirect("/");
			});
		});
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
	passport.authenticate("local", function (err: Error, user: IUserDocument, info: any) {
		if (err) {
			// Issue occurred with authentication
			return next(err);
		}
		if (!user) {
			// Authentication failed, no user found. Render to login page with error message
			return res.render("login", {
				title: "Login Page",
				username: req.body.username,
				error: info.message,
			});
		}
		req.logIn(user, function (err: Error) {
			if (err) {
				return next(err);
			}
			// Authentication successful, render to messages page
			return res.redirect(`/`);
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

exports.status_member_post = [
	body("member_password", "Invalid password").trim().notEmpty().escape(),

	asyncHandler(async (req: any, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		const secretPassword = process.env.SECRET_MEMBER_PASS;
		const userInput = req.body.member_password.toLowerCase();
		if (!errors.isEmpty() || (secretPassword && userInput !== secretPassword)) {
			// user did not enter correct password for access status, return to form page
			res.render("auth_status", {
				title: "Status Page",
				member_error: true,
				errors: errors.array(),
			});
		} else {
			req.user.member_status = "member";
			await req.user.save();
			res.redirect(`/`);
		}
	}),
];

exports.status_admin_post = [
	body("admin_password", "Invalid password").trim().notEmpty().escape(),

	asyncHandler(async (req: any, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		const secretPassword = process.env.SECRET_ADMIN_PASS;
		const userInput = req.body.admin_password.toLowerCase();

		if (!errors.isEmpty() || (secretPassword && userInput !== secretPassword)) {
			// user did not enter correct password for access status, return to form page
			res.render("auth_status", {
				title: "Status Page",
				admin_error: true,
				errors: errors.array(),
			});
		} else {
			req.user.member_status = "admin";
			await req.user.save();
			res.redirect(`/`);
		}
	}),
];

exports.message_post = [
	body("title", "Invalid title").trim().notEmpty().escape(),
	body("message", "Invalid message").trim().notEmpty().escape(),

	asyncHandler(async (req: any, res: Response, next: NextFunction) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			console.log(errors.array());
			return res.status(400).send("Invalid data provided");
		} else {
			const message = new Message({
				title: req.body.title,
				message: req.body.message,
				user: req.user,
				post_date: new Date(),
			});

			message.title = replaceEncodedCharacters(message.title);
			message.message = replaceEncodedCharacters(message.message);

			await message.save();
			res.redirect(`/`);
		}
	}),
];

// Function to replace encoded characters
function replaceEncodedCharacters(input: String) {
	// Replace "&amp;#x2F;" and  "&#x2F;" with "/"
	input = input.replace(/&amp;#x2F;|&#x2F;/g, "/");

	// Replace "&#x27;" with single quote "'"
	input = input.replace(/&#x27;/g, "'");

	return input;
}
