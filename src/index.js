import express from 'express';
import "./db/mongoose.js"
import userRouter from './routers/user.js';
import { appconfig } from './config/app.config.js';

const app = express()
const port = appconfig.port

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}) 