import { createSlice } from '@reduxjs/toolkit';
import { updateUser, fetchUsers, updateUserAvatar } from './userOperations'

const initialState = {
    user: {
      username: null,
      email: null,
      birthday: null,
      avatar: null,
      phone: null,
    },
    isLoading: false,
    error: null,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
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
        })
        .addCase(updateUserAvatar.fulfilled, (state, action) => {
          state.isLoading = false;          
          state.user = action.payload;      
        })
        .addCase(updateUserAvatar.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  


export const userReducer = userSlice.reducer;