import mongoose, { Document, Schema, Types } from "mongoose";
import { DateTime } from "luxon";

interface IMessage extends Document {
	title: String;
	message: String;
	user: Types.ObjectId;
	post_date: Date;
	format_date: String;
}

const MessageSchema = new Schema({
	title: { type: String, required: true },
	message: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	post_date: { type: Date, default: Date.now, required: true },
	format_date: Date,
});

MessageSchema.virtual("formate_date").get(function (this: IMessage) {
	return DateTime.fromJSDate(this.post_date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Message", MessageSchema);
