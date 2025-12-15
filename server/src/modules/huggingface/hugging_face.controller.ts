import { Request, Response } from "express";
import generateRecipe from "./hugging_face.services";

export const huggingFaceController = async (
    req: Request<{}, {}, { ingredient: string[] }>,
    res: Response
) => {
    const { ingredient } = req.body;
    res.json({
        message: `Received data for name, age age.`,
        content: await generateRecipe(ingredient),
    });
};
