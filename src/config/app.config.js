import { config } from "dotenv";

config()

export const appconfig = {
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
    mongodbUrl: process.env.MONGODB_URL,
    secretKey: process.env.JWT_SECRET
}
