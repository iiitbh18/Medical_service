import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

app.listen(5000, ()=> console.group("server running on port 5000"));