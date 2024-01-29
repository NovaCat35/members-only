import { Request, Response, NextFunction } from "express";
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

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
	body("username", "Username cant be empty").notEmpty().escape(),
	body("password", "Invalid password").notEmpty().isLength({ min: 8 }).withMessage("Password must be greater than 8 characters.").escape(),
	body("password_confirmation", "Invalid password").notEmpty().isLength({ min: 8 }).withMessage("Password must be greater than 8 characters.").escape(),

	asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);

		// Check if password & confirm password matches or there's errors
		if (!errors.isEmpty() || req.body.password !== req.body.password_confirmation) {
			return res.render("signup", {
				title: "Sign-up Page",
				user: User,
				errors: errors.array(),
				password_error: "Passwords do not match, please try again.",
			});
		}

		try {
         // Hash and salt
			const hashedPassword = await bcrypt.hash(req.body.password, 10);

			const user = new User({
				username: body.req.username,
				password: hashedPassword,
				member_status: false,
			});

			await user.save();

			// Redirect to the main message page
			res.redirect("/messages");
		} catch (err) {
			console.error("Error hashing password:", err);
			return res.status(500).send("Internal Server Error");
		}
	}),
];

exports.login_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	res.render("login", {
		title: "Login Page",
	});
});

// exports.login_post = []

// exports.member_access_get = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {

// })
