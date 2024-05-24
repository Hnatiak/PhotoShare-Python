import axios from 'axios';

// import { getUserData } from '../auth/authOperations';


// export const createPhoto = (photoData) => async (dispatch, getState) => {
//     try {
//       const state = getState();
//       const token = state.auth.access_token;
//       const headers = {
//         Authorization: `Bearer ${token}`
//       };
  
//       // Переконайтеся, що photoData містить необхідні поля
//       const body = {
//         description: photoData.description,
//         tags: photoData.tags
//       };
  
//       const response = await axios.post('/api/photos', body, { headers });
//       dispatch({ type: 'photo/photoCreated', payload: response.data });
//     } catch (error) {
//       console.error('Error creating photo:', error);
//     }
//   };



// export const createPhoto = (photoData) => async (dispatch, getState) => {
//     try {
//       const state = getState();
//       const token = state.auth.access_token;
//       const headers = {
//         Authorization: `Bearer ${token}`
//       };
  
//       const response = await axios.post('/api/photos', photoData, { headers });
//       dispatch({ type: 'photo/photoCreated', payload: response.data });
//     } catch (error) {
//       console.error('Error creating photo:', error);
//     }
//   };




export const createPhoto = (photoData) => async (dispatch, getState) => {
    try {
      const state = getState();
      const token = state.auth.access_token;
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      };
  
      const response = await axios.post('/api/photos', photoData, { headers });
      dispatch({ type: 'photo/photoCreated', payload: response.data });
    } catch (error) {
      console.error('Error creating photo:', error);
      throw error;
    }
  };