import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../redux/auth/authSlice';
// import { toast } from 'react-toastify';
// import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
import { setID, setName, setAvatar, setEmail, setRole, setPhone, setBirthday  } from '../../redux/users/userSelectors';
import { updateUser } from '../../redux/users/userOperations';

// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
//   ErrorText,
  Img,
//   Inputs,
//   Container,
//   PasswordInput,
//   Content,
//   LoginBtn,
//   StyledRegistrationLink,
  StyledLink,
//   PasswordToggle,
//   PasswordIcon,
  LogOut
} from './MyProfile.styled';
import { logout } from '../../redux/auth/authOperations';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

  const username = useSelector(setName);
  const avatar = useSelector(setAvatar);
  const email = useSelector(setEmail);
  const role = useSelector(setRole);
  const phone = useSelector(setPhone);
  const birthday = useSelector(setBirthday);
  const userId = useSelector(setID);

  const [userData, setUserData] = useState({
    username: '',
    phone: '',
    birthday: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUpdateUser = () => {
    dispatch(updateUser(userId, userData));

    if (!handleUpdateUser) {
      toast.success('Ваш профіль успішно оновлено');
    } else {
      toast.error('Помилка під час оновлення профілю');
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/');
      toast.success('Ви успішно розлогінились');
    } catch (error) {
      console.log('Сталася помилка під час виходу:', error);
      toast.error('Під час розлогінення сталася помилка');
    }
  };

  return (
    <div>
        <div>
            {isLoggedInUser &&
                <div>
                    <h1>Ваш профіль</h1>
                    <p>{userId}</p>
                    <Img src={avatar} alt="" />
                    <div>
                        <label htmlFor="username">Ваше ім'я</label><p>{username}</p>
                        <label htmlFor="email">Ваша емейл:</label><p>{!email ? 'Пошта: Немає' : email}</p>
                        <label htmlFor="role">Ваша роль:</label><p>{!role ? 'Права доступу: Немає' : role}</p>

                        <label htmlFor="phone">Ваш номер телефону:</label>
                        <p>{!phone ? 
                        <div>
                            <p>У вас немає номера телефону, будь ласка напишіть ваш номер телефону</p>
                            <label for="telephone">Номер телефону:</label>
                            <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleInputChange} />
                        </div> : phone}</p>

                        <label htmlFor="birthday">Ваша дата дня народження:</label>
                        <p>{!birthday ? 
                        <div>
                            <p>У вас не встановлена дата вашого дня народження, будь ласка обереіть вашу дату дня народження</p>
                            <label for="birthday">Дата народження:</label>
                            <input type="date" id="birthday" name="birthday" value={userData.birthday} onChange={handleInputChange} />
                        </div> : <div>{ birthday} <button>Edit</button></div>}</p>
                    </div>

                    <button type="submit" onClick={handleUpdateUser}>Редагувати</button>
                    <LogOut onClick={handleLogout}>Вийти</LogOut>
                </div>
            }
            {!isLoggedInUser &&
                <div>
                    <div>Please Register Here: <StyledLink to="/auth/register">Register</StyledLink></div>
                </div>
            }
        </div>
    </div>
  );
};

export default MyProfile;