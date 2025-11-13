import fetchRecipe from "../../app/features/ingredients/ingredientThunks";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Recipe.css";

function Recipe() {
    const ingredient = useAppSelector((state) => state.ingredient.list);
    const dispatch = useAppDispatch();
    return (
        <div>
            {ingredient.length > 4 && (
                <div className="innerRecipe">
                    <div>
                        <h2>Ready for Recipe?</h2>
                        <p>Generate a recipe from your list of ingredient</p>
                    </div>
                    <div>
                        <button
                            onClick={() => dispatch(fetchRecipe(ingredient))}
                        >
                            Get a recipe
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe;
