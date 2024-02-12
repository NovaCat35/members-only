import mongoose, { Document, Schema, Types } from "mongoose";
import { DateTime } from "luxon";

interface IMessage extends Document {
	title: String;
	message: String;
	user: Types.ObjectId;
	post_date: Date;
}

const MessageSchema = new Schema({
	title: { type: String, required: true },
	message: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	post_date: { type: Date, default: Date.now, required: true },
});

MessageSchema.virtual("format_date").get(function (this: IMessage) {
	const easternDateTime = DateTime.fromJSDate(this.post_date).setZone("America/New_York");
	return `${easternDateTime.toLocaleString(DateTime.DATETIME_MED)} (EST)`;
});

module.exports = mongoose.model("Message", MessageSchema);
