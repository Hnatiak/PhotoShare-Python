import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './userOperations'

const initialState = {
    user: null,
    isLoading: false,
    error: null,
  };
  
  // Slice
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser(state, action) {
        state.user = action.payload;
      },
      clearUser(state) {
        state.user = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(updateUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  


export const userReducer = userSlice.reducer;