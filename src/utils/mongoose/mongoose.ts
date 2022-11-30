import mongoose from "mongoose";

export async function useMongoose() {
    if (!process.env.MONGODB_URI) return false;
    mongoose.connect(process.env.MONGODB_URI, async () => {
        console.log("Mongoose connected");
    });
}
