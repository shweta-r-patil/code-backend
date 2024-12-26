import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();


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