import ReactMarkdown from "react-markdown";
import { useAppSelector } from "../app/hooks";

function RecipeList() {
    const recipe = useAppSelector((state) => state.ingredient.recipe);
    return (
        <section className="ml-10 mr-10">
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => (
                        <h1 className="text-3xl font-bold my-4" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2
                            className="text-2xl sm:text-3xl font-semibold my-3"
                            {...props}
                        />
                    ),
                    p: ({ node, ...props }) => (
                        <p
                            className="text-gray-700 leading-relaxed my-2"
                            {...props}
                        />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className="list-disc ml-6 my-2" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                        <li className="my-1" {...props} />
                    ),
                }}
            >
                {recipe}
            </ReactMarkdown>
        </section>
    );
}

export default RecipeList;
