import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/users/userOperations';
import { logout } from '../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import { Img, StyledLink, LogOut, EditBtn, Div, DivPhoto, DivEdit, EditPhoto, FileInput, LastDiv, DivStyles } from './MyProfile.styled';
import { updateUserAvatar } from '../../redux/users/userOperations';

const MyProfile = ({ stockAvatar, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState(null);
  // eslint-disable-next-line
  const [imageUrl, setImageUrl] = useState('');
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);
  // const user = useSelector(state => state.user.user);
  const user = useSelector(state => state.auth.user);

  // const user = useSelector(state => state.auth.user);


  const [avatarFile, setAvatarFile] = useState(null);

  const handleFileChange = (event) => {
    setAvatarFile(event.target.files[0]);
  };

  const handleUpdateAvatar = async () => {
    if (avatarFile) {
      dispatch(updateUserAvatar({ userId: user.id, avatarFile }));
      toast.success('Ваш профіль успішно оновлено');
    } else {
      toast.error('Ви не вибрали файл, або щось пішло не так');
    }
  };

  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: user?.username || '',
    phone: user?.phone || '',
    birthday: user?.birthday || '',
  });

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        setImageUrl(event.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    setUserData({
      username: user?.username || '',
      phone: user?.phone || '',
      birthday: user?.birthday || '',
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      await dispatch(updateUser({ userId: user.id, userData })).unwrap();
      setEditMode(false);
      toast.success('Ваш профіль успішно оновлено');
    } catch (error) {
      toast.error('Помилка під час оновлення профілю');
      setUserData(prevUserData => ({
        ...prevUserData,
        username: user?.username || '',
        phone: user?.phone || '',
        birthday: user?.birthday || '',
      }));
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
      {user && (
        <div>
          {isLoggedInUser && (
            <DivStyles>
              <Div>
                <DivPhoto>
                  <Img src={user.avatar} alt="" />
                  <FileInput type="file" id="file" onChange={handleFileChange} />
                  <EditPhoto htmlFor="file">Edit Photo</EditPhoto>
                  <button onClick={handleUpdateAvatar}>Update Avatar</button>
                </DivPhoto>
                <DivEdit>
                  <label htmlFor="username">Ваше ім'я</label>
                  {editMode ? (
                    <input type="text" id="username" name="username" value={userData.username} onChange={handleInputChange} />
                  ) : (
                    <p>{userData.username} <EditBtn onClick={() => setEditMode(true)}>Edit</EditBtn></p>
                  )}

                  <label htmlFor="email">Ваша емейл:</label><p>{user.email}</p>
                  <label htmlFor="role">Ваша роль:</label><p>{user.role}</p>

                  <label htmlFor="phone">Ваш номер телефону:</label>
                  {editMode ? (
                    <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleInputChange} />
                  ) : (
                    <p>{userData.phone} <EditBtn onClick={() => setEditMode(true)}>Edit</EditBtn></p>
                  )}
                  <label htmlFor="birthday">Ваша дата дня народження:</label>
                  {editMode ? (
                    <input type="date" id="birthday" name="birthday" value={userData.birthday} onChange={handleInputChange} />
                  ) : (
                    <p>{userData.birthday} <EditBtn onClick={() => setEditMode(true)}>Edit</EditBtn></p>
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
              <div>Please Register Here: <StyledLink to="/auth/register">Register</StyledLink></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyProfile;