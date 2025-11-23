import { InferenceClient } from "@huggingface/inference";
import { configDotenv } from "dotenv";

configDotenv();

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients and produces a recipe using clean markdown.

RULES:
- NEVER use code fences like \`\`\`, \`\`\`markdown, or any fenced code block.
- NEVER wrap your answer in code formatting.
- ONLY return simple markdown headings, lists, and paragraphs.
- DO NOT escape characters like \\n.
`;


export default async function generateRecipe(ingredients: string[]) {
    try {
        const response = await hf.chatCompletion({
            model: "Qwen/Qwen3-32B",
            provider: "cerebras",
            messages: [
                {
                    role: "user",
                    content: `${SYSTEM_PROMPT}\nList of ingredients:  ${ingredients} in a proper markdown format`,
                },
            ],
            max_tokens: 2048,
            temperature: 0.3,
        });

        let content = response.choices[0].message.content || "";
        content = content
            .replace(/<think>[\s\S]*?<\/think>/g, "")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .trim();

        return content;
    } catch (err) {
        console.error("Error generating recipe:", err);
        throw new Error("Failed to generate recipe");
    }
}
