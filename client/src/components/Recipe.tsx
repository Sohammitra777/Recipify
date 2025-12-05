import fetchRecipe from "../app/features/ingredients/ingredientThunks";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function Recipe() {
    const ingredient = useAppSelector((state) => state.ingredient);
    const dispatch = useAppDispatch();
    return (
        <div>
            {ingredient.list.length > 4 && (
                <div className="mt-2 mr-8 ml-8 p-4 bg-[#f0efeb] rounded-xl flex items-center">
                    <div className="grow">
                        <h2 className="m-2 text-lg sm:text-xl font-medium">
                            Ready for Recipe?
                        </h2>
                        <p className="m-2 text-md sm:text-lg">
                            Generate a recipe from your list of ingredient
                        </p>
                    </div>
                    <div>
                        {!ingredient.loading ? (
                            <button
                                className="p-2 pr-4 pl-4 sm:mr-4 bg-[#d17557] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#d17557] active:bg-[#d17557] active:text-[#ffffff] rounded-lg duration-300 cursor-pointer"
                                onClick={() =>
                                    dispatch(fetchRecipe(ingredient.list))
                                }
                            >
                                Get recipe
                            </button>
                        ) : (
                            <button className="p-2 pr-4 pl-4 sm:mr-4 bg-[#d17557] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#d17557] active:bg-[#d17557] active:text-[#ffffff] rounded-lg duration-300 cursor-pointer">
                                Loading...
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Recipe;
