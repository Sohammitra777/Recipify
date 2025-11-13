import { configureStore } from "@reduxjs/toolkit";
import userIngredientReducer from "./features/ingredients/ingredientSlice";

const store = configureStore({
    reducer: {
        ingredient: userIngredientReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
