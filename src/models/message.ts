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
	// Convert the stored UTC date to the user's local time
	const localDate = DateTime.fromJSDate(this.post_date).toLocal();
	// Retrieve the timezone
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	// Format the local date and time along with the timezone
	const formattedDate = `${localDate.toLocaleString(DateTime.DATETIME_MED)} ${timeZone}`;
	return formattedDate;
});

module.exports = mongoose.model("Message", MessageSchema);
