import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT || 5001,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_ENV: process.env.MONGO_ENV,
};