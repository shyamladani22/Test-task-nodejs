import mongoose from 'mongoose';
import { appconfig } from '../config/app.config.js';

mongoose.connect(appconfig.mongodbUrl)

// mongoose.connect("mongodb://127.0.0.1:27017/test-task-api");

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database Connected")
})