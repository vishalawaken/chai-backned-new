// require('dotenv').config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config(
    {
        path:'./env'
    }
);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at port ${process.env.PORT}`); // Use the PORT from .env 
    })
})
.catch((error)=>{
    console.log("MONGODB Connection Failed !!!",error)
})













// import express from "express";
// const app = express();
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is Listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// })();