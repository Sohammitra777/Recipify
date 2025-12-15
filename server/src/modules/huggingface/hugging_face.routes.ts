import { Router } from "express";
import { huggingFaceController } from "./hugging_face.controller";

const huggingFaceRouter = Router();

huggingFaceRouter.post("/api/data", huggingFaceController);

export default huggingFaceRouter;
