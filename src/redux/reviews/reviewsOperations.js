import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000/';

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (reviewData, thunkAPI) => {
    try {
      const res = await axios.post('/api/reviews', reviewData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async (_, thunkAPI) => {
//   try {
//     const res = await axios.get('/api/reviews');
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id, thunkAPI) => {
  try {
    await axios.delete(`/api/reviews/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});