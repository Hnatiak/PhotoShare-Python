import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/userOperations';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers({ skip: 0, limit: 10 }));
  }, [dispatch]);

  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  const userElements = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    userElements.push(
      <div key={user.id}>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <p>{user.role}</p>
      </div>
    );
  }

  return <div>{userElements}</div>;
};

export default Users;






// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../redux/users/userSlice';

// const Users = () => {
//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUsers({ skip: 0, limit: 10 }));
//   }, [dispatch]);

//   if (!users || users.length === 0) {
//     return <div>No users found.</div>;
//   }

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.username}</h2>
//           <p>{user.email}</p>
//           <p>{user.role}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;










// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../redux/users/userSlice';

// const Users = () => {
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers({ skip: 0, limit: 10 }));
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.username}</h2>
//           <p>{user.email}</p>
//           <p>{user.role}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;