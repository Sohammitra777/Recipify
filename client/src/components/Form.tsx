import { useState } from "react";
import { addUserIngredient, reset } from "../app/features/ingredients/ingredientSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function Form() {
    const [ingredient, setIngredient] = useState("");
    const list = useAppSelector((state) => state.ingredient.list);
    const len = useAppSelector((state) => state.ingredient.list.length);
    const dispatch = useAppDispatch();

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const ingri = ingredient.charAt(0).toUpperCase() + ingredient.slice(1); 
        if (!/^[A-Za-z]+$/.test(ingri)) return;
        dispatch(addUserIngredient(ingri));
        setIngredient("");
    };

    return (
        <form
            onSubmit={handleClick}
            className="flex flex-row justify-center items-center flex-wrap gap-4 sm:gap-3"
        >
            <h3 className="mt-4 text-center text-md sm:text-2xl w-full">
                {len < 5 &&
                    `Need minimum ${5 - len} ingredient to make a Recipe`}
            </h3>
            <input
                className="m-1 sm:m-0 w-70 sm:w-100 border-2 h-10 rounded-lg text-center sm:text-xl"
                title="Please enter letters only"
                aria-label="Ingredient Name"
                required
                type="text"
                pattern="[A-Za-z]+"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="e.g. oregano"
            />
            <button className="p-2 pl-4 pr-4 sm:p-[.4rem] sm:pl-4 sm:pr-4 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-2 cursor-pointer duration-300 ease-in">
                Add Ingredient
            </button>
            {list.length > 0 && (
                <button
                    className="p-2 pl-4 pr-4 sm:p-[.4rem] sm:pl-4 sm:pr-4 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-2 cursor-pointer duration-300 ease-in"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            )}
        </form>
    );
}

export default Form;
