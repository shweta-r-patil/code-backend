import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
    path: './env'
})

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running at port ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log("Mongo DB connection failed !!! ", err);
})


/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        app.on("ERROR", (err) => {
            console.log(err);
            throw err;
        })
        app.listen(Process.env.PORT, () => {
            console.log(`App is listening at PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR", error);
        throw err
    }
}) () */