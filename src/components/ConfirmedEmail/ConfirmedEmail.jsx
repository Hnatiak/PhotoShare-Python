import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';

function EmailConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const confirmEmail = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (!token) {
        setConfirmationMessage('Invalid confirmation link');
        return;
      }

      try {
        const response = await axios.get(`/api/auth/refresh_token`);
        setConfirmationMessage(response.data.message);

        if (response.data.message === 'Email confirmed') {
          const email = await axios.get(`/api/auth/refresh_token`);
          dispatch(login({ email, token }));
          navigate('/');
        }
      } catch (error) {
        console.error('Помилка підтвердження електронної пошти:', error);
        setConfirmationMessage('Verification error');
      }
    };

    confirmEmail();
  }, [dispatch, location.search, navigate]);

  return (
    <div>
      <h1>Email Confirmation</h1>
      <p>{confirmationMessage || 'Підтвердження електронної пошти...'}</p>
    </div>
  );
}

export default EmailConfirmation;