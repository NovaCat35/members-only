import { Request, Response, NextFunction } from 'express';
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// CONTROLLER FOR MESSAGE POSTS
exports.message_list = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {
	const message = await Message.find({});
   res.render('messages_list', {
      title: "Message List",
      message: message,
   })
});

exports.message_form_get = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {
   res.render('message_form', {
      title: "Message Form",
   })
});

exports.message_form_post = []

