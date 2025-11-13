import "./Form.css";
import { useState } from "react";
import { addUserIngredient } from "../../app/features/ingredients/ingredientSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

function Form() {
    const [ingredient, setIngredient] = useState("");
    const len = useAppSelector((state) => state.ingredient.list.length);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(addUserIngredient(ingredient));
        setIngredient("");
    };
    return (
        <form action={handleClick}>
            <h3>
                {len < 5 &&
                    `Need minimum ${5 - len} ingredient to make a Recipe`}
            </h3>
            <input
                required
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="e.g. oregano"
            />
            <button>Add Ingredient</button>
        </form>
    );
}

export default Form;
