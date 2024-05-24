import axios from 'axios';

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


export const deletePhoto = async (photoId, getState) => {
  try {
    const state = getState();
    const token = state.auth.access_token;

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.delete(`/api/photos/${photoId}`, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else {
      throw new Error('An error occurred while deleting the photo.');
    }
  }
};