import express from "express";
import cors from "cors";
import "dotenv/config";
import route from "./src/router.js";
import { dbInstance } from "./db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

import cookieParser from 'cookie-parser';
app.use(cookieParser());

app.use("/api/v1",route);

dbInstance.then(()=>{
    console.log("connected to database")
    app.listen(port,()=>{
        console.log(`server running at port ${port}`);
    });
})
.catch((err) => {
    console.log("can't connect with the database",err);
    process.exit(1);
})