import express from "express";
import cors from "cors";
import "dotenv/config.js";
import route from "./src/router.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use("/api/v1",route);

app.listen(port,()=>{
    console.log(`server successfully running on port: ${port}`)
})