import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchIngredients = createAsyncThunk(
  'recipes/fetchIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await http.get('/ingredients');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAreas = createAsyncThunk(
  'recipes/fetchAreas',
  async (_, thunkAPI) => {
    try {
      const response = await http.get('/areas');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (data, thunkApi) => {
    try {
      const params = new URLSearchParams();
      const response = await http.get('/recipes/search', data);

      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const fetchRecipes = createAsyncThunk(
//   'recipes/fetchRecipes',
//   async (data, thunkApi) => {
//     try {
//       // Create an instance of URLSearchParams
//       const params = new URLSearchParams();

//       // Append parameters if they are provided
//       if (data.categoryId) {
//         params.append('categoryId', data.categoryId);
//       }
//       if (data.areaId) {
//         params.append('areaId', data.areaId);
//       }
//       if (data.ingredientIds) {
//         data.ingredientIds.forEach(id => params.append('ingredientIds[]', id));
//       }
//       if (data.limit) {
//         params.append('limit', data.limit);
//       }
//       if (data.offset) {
//         params.append('offset', data.offset);
//       }

//       const response = await http.get(`/recipes/search?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
