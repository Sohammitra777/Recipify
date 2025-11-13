import { createSlice } from "@reduxjs/toolkit";
import fetchRecipe from "./ingredientThunks";

interface ingredientState {
    list : string[], 
    recipe: string, 
    loading: boolean, 
    error: string | null
}


const initialState: ingredientState = {
    list: [],
    recipe : "", 
    loading: false, 
    error: null
};

const userIngredient = createSlice({
    name: "Ingredient",
    initialState,
    reducers: {
        addUserIngredient: (state, action) => {
            state.list.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipe.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
                state.loading = false; 
                state.recipe = action.payload;
            })
            .addCase(fetchRecipe.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload || "something went wrong"
            })
    }
});

const userIngredientReducer = userIngredient.reducer;
export const { addUserIngredient } = userIngredient.actions;
export default userIngredientReducer;
