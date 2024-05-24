import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deletePhoto, updatePhoto } from './photoOperations';

const getAuthToken = (state) => state.auth.access_token;

export const updatePhotoThunk = createAsyncThunk(
  'photo/updatePhoto',
  async ({ photoId, description, tags }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = getAuthToken(state);
      const updatedPhoto = await updatePhoto(photoId, { description, tags }, token);
      return updatedPhoto;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



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
      .addCase(updatePhotoThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updatePhotoThunk.fulfilled, (state, action) => {
        const updatedPhoto = action.payload;
        state.photos = state.photos.map((photo) =>
          photo.id === updatedPhoto.id ? updatedPhoto : photo
        );
        state.status = 'succeeded';
      })
      .addCase(updatePhotoThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
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