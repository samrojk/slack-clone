import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(ENV.MONGO_URI);

        console.log("Connected to MongoDB:", connect.connection.host);
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Status code 1 indicates an error, 0 means success
    }
}
