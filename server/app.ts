import express, { Request, Response } from "express";
import cors from "cors";
import generateRecipe from "./model";

const app = express();
const PORT = process.env.PORT || 3000;

interface DataBody {
    ingredient: string[];
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/data", async (req: Request<{}, {}, DataBody>, res: Response) => {
    const { ingredient } = req.body;
    res.json({
        message: `Received data for name, age age.`,
        content: await generateRecipe(ingredient),
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
