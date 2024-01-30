import { Request, Response, NextFunction } from 'express';
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// CONTROLLER FOR MESSAGE POSTS
exports.message_list = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {
	const [messages, users] = await Promise.all([Message.find().populate("user").exec(), User.find().exec()]);
   res.render('message_list', {
      title: "Message List",
      messages: messages,
      users: users,
   })
});

exports.message_form_get = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {
   res.render('message_form', {
      title: "Message Form",
   })
});

exports.message_form_post = []

