import { Request, Response, NextFunction } from "express";
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// CONTROLLER FOR MESSAGE POSTS
exports.message_list = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const [messages, currUser, users] = await Promise.all([Message.find().populate("user").sort({post_date : -1}).exec(), User.findById(req.params.id).exec(), User.find().exec()]);
	res.render("message_list", {
		title: "Message List",
		messages: messages,
		user: currUser,
		users_list: users,
	});
});


exports.profile_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const [user, userMessages] = await Promise.all([User.findById(req.params.id).exec(), Message.find({ user: req.params.id }).exec()]);
	res.render("profile", {
		title: "Profile Page",
		user: user,
		userMessages: userMessages,
	});
});

exports.status_page_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const user = await User.findById(req.params.id).exec();
	res.render("auth_status", {
		title: "Status Page",
		user: user,
	});
});
