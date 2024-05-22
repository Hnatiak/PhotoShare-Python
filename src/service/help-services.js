import axios from 'axios';

export const sendEmail = async commentData => {
    await axios.post('api/auth/help', commentData);
};

export const sendBuy = async commentData => {
    await axios.post('api/auth/buy', commentData);
};