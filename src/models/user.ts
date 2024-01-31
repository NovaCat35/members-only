import { Document, Schema, model } from 'mongoose';

interface IUser {
    username: string;
    password: string;
    member_status: string;
}

export interface IUserDocument extends IUser, Document {
    // Define additional instance methods or properties here
    url: string;
}

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    member_status: { type: String, required: true },
});

UserSchema.virtual('url').get(function (this: IUserDocument) {
    return `${this._id}`;
});

module.exports = model("User", UserSchema);

