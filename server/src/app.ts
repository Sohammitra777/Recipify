import express from "express";
import cors from "cors";
import huggingFaceRouter from "./modules/huggingface/hugging_face.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", huggingFaceRouter);

export default app;
