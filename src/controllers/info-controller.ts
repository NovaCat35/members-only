import { Request, Response, NextFunction } from "express";
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// CONTROLLER FOR MESSAGE POSTS
exports.message_list = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const [messages, currUser] = await Promise.all([Message.find().populate("user").sort({post_date : -1}).exec(), User.findById(req.params.id).exec()]);
	res.render("message_list", {
		title: "Message List",
		messages: messages,
		user: currUser,
	});
});

exports.profile_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const [user, userMessages] = await Promise.all([User.findById(req.params.id).exec(), Message.find({ user: req.params.id }).sort({post_date : -1}).exec()]);
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

exports.admin_get = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const users = await User.find().exec();
	res.render("admin", {
		title: "Admin Page",
		users_list: users,
	});
});

exports.message_delete = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
	const message = await Message.findById(req.params.id).populate('user').exec();
	const user_id = message.user.url; // save the user_id of that message so we can redirect back to the messages page
	
	await message.deleteOne({_id: req.params.id});
	res.redirect(`/messages/${user_id}`);
});
