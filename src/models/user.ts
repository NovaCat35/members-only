import { Document, Schema, model } from 'mongoose';
import { DateTime } from "luxon";

interface IUser {
    username: string;
    password: string;
    member_status: string;
    profile_pic: Number,
    date_joined: Date;
}

export interface IUserDocument extends IUser, Document {
    // Define additional instance methods or properties here
    url: string;
}

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    member_status: { type: String, required: true },
    profile_pic: {type: Number, default: 0, required: true},
    date_joined: { type: Date, default: Date.now, required: true },
});

UserSchema.virtual("format_date").get(function (this: IUserDocument) {
	return DateTime.fromJSDate(this.date_joined).toLocaleString(DateTime.DATETIME_MED);
});

module.exports = model("User", UserSchema);

