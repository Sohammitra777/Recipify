import fetchRecipe from "../../app/features/ingredients/ingredientThunks";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Recipe.css";

function Recipe() {
    const ingredient = useAppSelector((state) => state.ingredient);
    const dispatch = useAppDispatch();
    return (
        <div>
            {ingredient.list.length > 4 && (
                <div className="innerRecipe">
                    <div>
                        <h2>Ready for Recipe?</h2>
                        <p>Generate a recipe from your list of ingredient</p>
                    </div>
                    <div>
                        {!ingredient.loading ? (
                            <button
                                onClick={() =>
                                    dispatch(fetchRecipe(ingredient.list))
                                }
                            >
                                Get a recipe
                            </button>
                        ) : (
                            <button>Loading...</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe;
