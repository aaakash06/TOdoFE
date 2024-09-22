import mongoose, { Schema, Document } from "mongoose";
export type ObjectIdType = mongoose.Schema.Types.ObjectId;

export interface IUser extends mongoose.Document {
  name: string;
  username: string;
  email: string;
  emailVerified?: Date;
  password?: string;
  bio?: string;
  picture?: string;
  saved?: ObjectIdType[];
  posts?: ObjectIdType[];
  comments?: ObjectIdType[];
  joinAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Date },
  password: { type: String },
  bio: { type: String },
  picture: { type: String },
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  joinAt: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
