import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { updateUser, updateUserAvatar } from '../../redux/users/userOperations';
import { selectUserAuth } from '../../redux/users/userSelectors';
import { toast } from 'react-toastify';
import { Img, StyledLink, LogOut, EditBtn, Div, DivPhoto, DivEdit, EditPhoto, FileInput, LastDiv, DivStyles } from './MyProfile.styled';

const MyProfile = () => {
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(selectUserAuth);
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [avatarFile, setAvatarFile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    return storedUserData || {
      username: user.username,
      phone: user.phone,
      birthday: user.birthday,
      avatar: user.avatar,
    };
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const handleFileChange = (event) => {
    setAvatarFile(event.target.files[0]);
  };

  const handleUpdateAvatar = async () => {
    if (avatarFile) {
      try {
        await dispatch(updateUserAvatar({ userId: user.id, avatarFile })).unwrap();
        setUserData(prevData => ({
          ...prevData,
          avatar: URL.createObjectURL(avatarFile)
        }));
        toast.success('Ваш аватар успішно оновлено');
      } catch (error) {
        toast.error('Ви не вибрали файл або сталася помилка');
      }
    } else {
      toast.error('Ви не вибрали файл або сталася помилка');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdateUser = async () => {
    try {
      await dispatch(updateUser({ userId: user.id, userData })).unwrap();
      setEditMode(false);
      toast.success('Ваш профіль успішно оновлено');
    } catch (error) {
      console.error('Помилка під час оновлення профілю:', error);
      toast.error('Помилка під час оновлення профілю');
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/');
      toast.success('Ви успішно вийшли з облікового запису');
    } catch (error) {
      console.error('Помилка під час виходу з облікового запису:', error);
      toast.error('Помилка під час виходу з облікового запису');
    }
  };

  return (
    <div>
      {isLoggedInUser && (
        <DivStyles>
          <Div>
            <DivPhoto>
              <Img src={userData.avatar} alt="Avatar" name="avatar" />
              <FileInput type="file" id="file" onChange={handleFileChange} />
              <EditPhoto htmlFor="file">Змінити фото</EditPhoto>
              <button onClick={handleUpdateAvatar}>Оновити аватар</button>
            </DivPhoto>
            <DivEdit>
              <label htmlFor="username">Ваше ім'я</label>
              {editMode ? (
                <input type="text" id="username" name="username" value={userData.username} onChange={handleChange} />
              ) : (
                <p>{userData.username} <EditBtn onClick={() => setEditMode(true)}>Редагувати</EditBtn></p>
              )}

              <label htmlFor="email">Ваша електронна пошта:</label><p>{user.email}</p>
              <label htmlFor="role">Ваша роль:</label><p>{user.role}</p>

              <label htmlFor="phone">Ваш номер телефону:</label>
              {editMode ? (
                <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleChange} />
              ) : (
                <p>{userData.phone} <EditBtn onClick={() => setEditMode(true)}>Редагувати</EditBtn></p>
              )}
              <label htmlFor="birthday">Ваша дата народження:</label>
              {editMode ? (
                <input type="date" id="birthday" name="birthday" value={userData.birthday} onChange={handleChange} />
              ) : (
                <p>{userData.birthday} <EditBtn onClick={() => setEditMode(true)}>Редагувати</EditBtn></p>
              )}
              {editMode && (
                <EditBtn type="submit" onClick={handleUpdateUser}>Зберегти</EditBtn>
              )}
            </DivEdit>
          </Div>
          <LastDiv>
            <LogOut onClick={handleLogout} style={{ marginRight: '15px' }}>Вийти</LogOut>
            <StyledLink to="/">Головна</StyledLink>
          </LastDiv>
        </DivStyles>
      )}
      {!isLoggedInUser && (
        <div>
          <div>Будь ласка, <StyledLink to="/auth/register">зареєструйтеся</StyledLink> тут</div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;