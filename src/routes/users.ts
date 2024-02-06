import { NextFunction, Request, Response } from "express";
import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});

export = router;