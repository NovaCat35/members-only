import { Request, Response, NextFunction } from "express";
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// CONTROLLER FOR MESSAGE POSTS
exports.homepage = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	// Set default values for page and limit
	const currentPage = parseInt(req.query.page) || 1;
	const limit = 6; // msg per page
	try {
		const totalMessages = await Message.countDocuments({});
		const totalPages = Math.ceil(totalMessages / limit);
		const skip = (currentPage - 1) * limit;

		const messages = await Message.find().populate("user").sort({ post_date: -1 }).skip(skip).limit(limit).exec();

		if (req.user) {
			// Authenticated user
			res.render("message_list", {
				title: "Message List",
				messages: messages,
				user: req.user,
				currentPage: currentPage,
				totalPages: totalPages,
			});
		} else {
			// Non-authenticated user
			res.render("index", {
				title: "Members Only",
			});
		}
	} catch (err) {
		next(err);
	}
});

exports.profile_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	if (req.user) {
		const [user, userMessages] = await Promise.all([User.findById(req.user._id).exec(), Message.find({ user: req.user._id }).sort({ post_date: -1 }).exec()]);
		res.render("profile", {
			title: "Profile Page",
			user: user,
			userMessages: userMessages,
		});
	} else {
		// Non-authenticated user
		res.render("index", {
			title: "Members Only",
		});
	}
});

exports.status_page_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	if (req.user) {
		const user = await User.findById(req.user._id).exec();
		res.render("auth_status", {
			title: "Status Page",
			user: user,
		});
	} else {
		// Non-authenticated user
		res.render("index", {
			title: "Members Only",
		});
	}
});

exports.admin_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	if (req.user) {
		const users = await User.find().sort({ date_joined: -1 }).exec();
		res.render("admin", {
			title: "Admin Page",
			users_list: users,
		});
	} else {
		// Non-authenticated user
		res.render("index", {
			title: "Members Only",
		});
	}
});

exports.message_delete = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	if (req.user) {
		const message = await Message.findById(req.params.id).populate("user").exec();
		if (message) {
			await message.deleteOne({ _id: req.params.id });
		}
		console.log(req.query.page);
		res.redirect(`/?page=${req.query.page || 1}`);
	} else {
		// Non-authenticated user
		res.render("index", {
			title: "Members Only",
		});
	}
});
