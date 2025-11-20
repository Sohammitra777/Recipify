import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_API_URL; 
console.log(url); 

const fetchRecipe = createAsyncThunk<string, string[], { rejectValue: string }>(
    "recipe/fetchRecipe",
    async (ingredient , { rejectWithValue }) => {
        try {
            const response = await axios.post(url+"/api/data", 
                {ingredient}
            );

            return response.data.content as string;
        } catch (err) {
            return rejectWithValue("Failed to fetch recipe");
        }
    }
);

export default fetchRecipe;
