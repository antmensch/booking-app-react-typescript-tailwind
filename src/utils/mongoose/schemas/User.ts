import mongoose from "mongoose";
import useMongoose from "../mongoose";

useMongoose();

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

export default User;
