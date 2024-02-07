import { Request, Response, NextFunction } from "express";
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// CONTROLLER FOR MESSAGE POSTS
exports.homepage = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	const messages = await Message.find({}).exec();
	if (req.user) {
		// we have authenticated the user, show messages
		const [messages] = await Promise.all([Message.find().populate("user").sort({post_date : -1}).exec()]);
		res.render("message_list", {
			title: "Message List",
			messages: messages,
			user: req.user,
		});
	} else {
		// no user authenticated, show default homepage
		res.render("index", {
			title: "Members Only",
			messages: messages,
		});
	}
});

// exports.message_list = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
// 	const [messages] = await Promise.all([Message.find().populate("user").sort({post_date : -1}).exec()]);
// 	res.render("message_list", {
// 		title: "Message List",
// 		messages: messages,
// 		user: req.user,
// 	});
// });

exports.profile_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	const [user, userMessages] = await Promise.all([User.findById(req.user._id).exec(), Message.find({ user: req.user._id }).sort({post_date : -1}).exec()]);
	res.render("profile", {
		title: "Profile Page",
		user: user,
		userMessages: userMessages,
	});
});

exports.status_page_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	const user = await User.findById(req.user._id).exec();
	res.render("auth_status", {
		title: "Status Page",
		user: user,
	});
});

exports.admin_get = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
	const users = await User.find().sort({date_joined: -1}).exec();
	res.render("admin", {
		title: "Admin Page",
		users_list: users,
	});
});

exports.message_delete = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const message = await Message.findById(req.params.id).populate('user').exec();
	
	await message.deleteOne({_id: req.params.id});
	res.redirect(`/`);
});
