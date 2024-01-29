import { Request, Response, NextFunction } from 'express';
const User = require("../models/user");
const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// CONTROLLER FOR LOGIN, SIGN-UP, & Member status FORM
exports.homepage = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
   const messages = await Message.find({}).exec();
   res.render('index', {
      title: 'Members Only',
      messages: messages,
   })
})

exports.signup_get = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {
   res.render('signup', {
      title: 'Sign-up Page',
   })
})

// exports.signup_post = [

// ]

exports.login_get = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {
   res.render('login', {
      title: 'Login Page',
   })
})

// exports.login_post = []


// exports.member_access_get = asyncHandler(async (req: Request, res:Response, next: NextFunction) => {

// })