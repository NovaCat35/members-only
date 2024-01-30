// const bcrypt = require("bcryptjs");
// import { Response } from "express";

// // Hash and salt
// const hashPassword = async (password: String, res: Response) => {
// 	const hashedPassword = await bcrypt.hash(password, 10, async (err: Error, hashedPassword: String) => {
// 		// Check if hashing error
// 		if (err) {
// 			console.error("Error hashing password:", err);
// 			return res.status(500).send("Internal Server Error");
// 		}
// 		return hashedPassword;
// 	});
// 	return hashedPassword;
// };

// module.exports = { hashPassword, bcrypt };
