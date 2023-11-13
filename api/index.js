import express from 'express'
import mongoose from 'mongoose';
import sample from "./routes/sample.js"
import authRouter from "./routes/auth.route.js"
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js';
const app = express();
app.use(express.json());

import path from 'path';
dotenv.config();

//cookie-parser
import cookieParser from 'cookie-parser';
app.use(cookieParser());

import cors from 'cors'
//const jwtt =require("jsonwebtoken")
app.use(cors())

app.get("/", cors(), (req, res) => {

})
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})



//dataBAse
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect("mongodb+srv://gogulasukumar26:Kumar%409113@cluster0.kcci3gw.mongodb.net/?retryWrites=true&w=majority", configOptions)
    .then(() => console.log("Db connected "))
    .catch((err) => console.log(err))

//Routers



app.use("/api/auth", authRouter);
app.use('/api/user', userRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});



app.listen(3000, () => {
    console.log("server start!!");
})