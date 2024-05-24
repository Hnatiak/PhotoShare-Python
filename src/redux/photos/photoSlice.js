import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deletePhoto } from './photoOperations';

export const deletePhotoThunk = createAsyncThunk(
  'photos/deletePhoto',
  async (photoId, { rejectWithValue, getState }) => {
    try {
      const response = await deletePhoto(photoId, getState);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photos: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    photoCreated: (state, action) => {
      state.photos.push(action.payload);
    },
    photoDeleted: (state, action) => {
      state.photos = state.photos.filter((photo) => photo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePhotoThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePhotoThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.photos = state.photos.filter((photo) => photo.id !== action.meta.arg);
      })
      .addCase(deletePhotoThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { photoCreated, photoDeleted } = photoSlice.actions;

export const photoReducer = photoSlice.reducer;