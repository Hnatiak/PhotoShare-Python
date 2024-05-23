// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUser } from '../../redux/users/userOperations';

// const MyProfile = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user.user);
//   const isLoading = useSelector(state => state.user.isLoading);
//   const error = useSelector(state => state.user.error);

//   const [editMode, setEditMode] = useState(false);
//   const [userData, setUserData] = useState({
//     username: user?.username || '',
//     phone: user?.phone || '',
//     birthday: user?.birthday || '',
//   });

//   useEffect(() => {
//     setUserData({
//       username: user?.username || '',
//       phone: user?.phone || '',
//       birthday: user?.birthday || '',
//     });
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevUserData => ({
//       ...prevUserData,
//       [name]: value,
//     }));
//   };

//   const handleUpdateUser = async () => {
//     try {
//       await dispatch(updateUser({ userId: user.id, userData })).unwrap();
//       setEditMode(false);
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const toggleEditMode = () => {
//     setEditMode(prevMode => !prevMode);
//   };

//   return (
//     <div>
//       {/* {isLoading && <div>Loading...</div>} */}
//       {/* {error && <div>Error: {error}</div>} */}
//       {user && (
//         <div>
//           <button onClick={toggleEditMode}>{editMode ? 'Cancel' : 'Edit'}</button>
//           {editMode ? (
//             <div>
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={userData.username}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="phone">Phone:</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={userData.phone}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="birthday">Birthday:</label>
//               <input
//                 type="date"
//                 id="birthday"
//                 name="birthday"
//                 value={userData.birthday}
//                 onChange={handleInputChange}
//               />
//               <button onClick={handleUpdateUser}>Save Changes</button>
//             </div>
//           ) : (
//             <div>
//               <p>Username: {userData.username}</p>
//               <p>Phone: {userData.phone}</p>
//               <p>Birthday: {userData.birthday}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyProfile;



















import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/users/userOperations';

const MyProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const isLoading = useSelector(state => state.user.isLoading);
  const error = useSelector(state => state.user.error);

  const [userData, setUserData] = useState({
    username: user?.username || '',
    phone: user?.phone || '',
    birthday: user?.birthday || '',
  });

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
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {user && (
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={userData.birthday}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdateUser}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;




















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setName, setAvatar, setEmail, setRole, setPhone, setBirthday, setID } from '../../redux/users/userSelectors';
// import { updateUser } from '../../redux/users/userOperations';
// import { Img, StyledLink, LogOut } from './MyProfile.styled';
// import { logout } from '../../redux/auth/authOperations';
// import { toast } from 'react-toastify';


// const MyProfile = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

//   const username = useSelector(setName);
//   const avatar = useSelector(setAvatar);
//   const email = useSelector(setEmail);
//   const role = useSelector(setRole);
//   const phone = useSelector(setPhone);
//   const birthday = useSelector(setBirthday);
//   const userId = useSelector(setID);

//   const [editMode, setEditMode] = useState(false);
//   const [userData, setUserData] = useState({
//     username: username,
//     phone: phone,
//     birthday: birthday,
//   });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setUserData({
//   //     ...userData,
//   //     [name]: value,
//   //   });
//   // };

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setUserData(prevUserData => ({
//   //     ...prevUserData,
//   //     [name]: value,
//   //   }));
//   // };

//   const handleUpdateUser = async () => {
//     try {
//       await dispatch(updateUser({ userId, userData }));
//       // setEditMode(false);
//       toast.success('Ваш профіль успішно оновлено');
//     } catch (error) {
//       toast.error('Помилка під час оновлення профілю');

//       const previousUserData = {
//         username: username,
//         phone: phone,
//         birthday: birthday,
//       };
//       setUserData(previousUserData);
//     }
//   };

//   // const handleUpdateUser = async () => {
//   //   try {
//   //     await dispatch(updateUser({ userId, userData }));
//   //     setEditMode(false);
//   //     toast.success('Ваш профіль успішно оновлено');  
//   //   } catch (error) {
//   //     toast.error('Помилка під час оновлення профілю');
//   //   }
//   // };

//   const handleLogout = async () => {
//     try {
//       await dispatch(logout());
//       navigate('/');
//       toast.success('Ви успішно розлогінились');
//     } catch (error) {
//       console.log('Сталася помилка під час виходу:', error);
//       toast.error('Під час розлогінення сталася помилка');
//     }
//   };

//   return (
//     <div>
//         <div>
//             {isLoggedInUser &&
//                 <div>
//                     <Img src={avatar} alt="" />
//                     <div>
//                         <label htmlFor="username">Ваше ім'я</label>
//                         {editMode ? (
//                           <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={userData.username}
//                             // onChange={handleInputChange}
//                           />
//                         ) : (
//                           <p>{userData.username} <button onClick={() => setEditMode(true)}>Edit</button></p>
//                         )}

//                         <label htmlFor="email">Ваша емейл:</label><p>{email}</p>
//                         <label htmlFor="role">Ваша роль:</label><p>{role}</p>

//                         <label htmlFor="phone">Ваш номер телефону:</label>
//                         {editMode ? (
//                           <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             value={userData.phone}
//                             // onChange={handleInputChange}
//                           />
//                         ) : (
//                           <p>{userData.phone} <button onClick={() => setEditMode(true)}>Edit</button></p>
//                         )}

//                         <label htmlFor="birthday">Ваша дата дня народження:</label>
//                         {editMode ? (
//                           <input
//                             type="date"
//                             id="birthday"
//                             name="birthday"
//                             value={userData.birthday}
//                             // onChange={handleInputChange}
//                           />
//                         ) : (
//                           <p>{userData.birthday} <button onClick={() => setEditMode(true)}>Edit</button></p>
//                         )}
//                     </div>

//                     {editMode && (
//                       <button type="submit" onClick={handleUpdateUser}>Зберегти</button>
//                     )}
//                     <LogOut onClick={handleLogout}>Вийти</LogOut>
//                 </div>
//             }
//             {!isLoggedInUser &&
//                 <div>
//                     <div>Please Register Here: <StyledLink to="/auth/register">Register</StyledLink></div>
//                 </div>
//             }
//         </div>
//     </div>
//   );
// };

// export default MyProfile;