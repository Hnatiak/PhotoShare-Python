import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photos: [],
  },
  reducers: {
    photoCreated: (state, action) => {
      state.photos.push(action.payload);

    },
  },
});

export const photoReducer = photoSlice.reducer;