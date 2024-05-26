import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://photoshare-python-back-48d1.onrender.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};

/*
 * POST @ /api/auth/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.access_token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/api/auth/login', credentials);
//       // After successful login, add the token to the HTTP header
//       setAuthHeader(res.data.access_token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// )


export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', credentials);
      setAuthHeader(res.data.access_token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       // Convert email to username as per OAuth2PasswordRequestForm
//       const data = {
//         username: credentials.email,
//         password: credentials.password,
//       };
//       const res = await axios.post('/api/auth/login', data);
//       setAuthHeader(res.data.access_token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );


/*
 * POST @ /api/auth/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /api/auth/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /api/users/role/{userId}
 * body: { role }
 * headers: Authorization: Bearer token
 */
// export const updateUserRole = createAsyncThunk(
//   'user/updateUserRole',
//   async ({ userId, role }, { rejectWithValue }) => {
//     try {
//       const state = thunkAPI.getState();
//       const token = state.auth.access_token;

//       setAuthHeader(token);

//       const response = await axios.put(
//         `/api/users/role/${userId}`,
//         { role }, // Додали об'єкт з роллю у тіло запиту
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       return response.data;
//     } catch (error) {
//       console.error('Error response:', error.response);
//       const errorMessage = error.response?.data?.detail
//         ? error.response.data.detail.toString()
//         : error.message;
//       return rejectWithValue(errorMessage);
//     }
//   }
// );