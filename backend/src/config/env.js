import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT || 5001,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_ENV: process.env.MONGO_ENV,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY,
    SENTRY_DSN: process.env.SENTRY_DSN,
    INNGEST_ENDPOINT: process.env.INNGEST_ENDPOINT,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
};