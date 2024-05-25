// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateUserRole } from '../../redux/users/userOperations';

// const Users = ({ userId }) => {
//   const dispatch = useDispatch();
//   const [newRole, setNewRole] = useState('');

//   const handleRoleChange = (e) => {
//     setNewRole(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (newRole) {
//       dispatch(updateUserRole({ userId: 61, role: newRole }))
//         .then(() => {
//           console.log('Role updated successfully');
//         })
//         .catch((error) => {
//           console.error('Failed to update role:', error);
//         });
//     } else {
//       console.error('Please select a new role');
//     }
//   };

//   return (
//     <div>
//       <h3>Change User Role</h3>
//       <div>
//         <input type="radio" id="user" name="role" value="user" checked={newRole === 'user'} onChange={handleRoleChange} />
//         <label htmlFor="user">User</label>
//       </div>
//       <div>
//         <input type="radio" id="moderator" name="role" value="moderator" checked={newRole === 'moderator'} onChange={handleRoleChange} />
//         <label htmlFor="moderator">Moderator</label>
//       </div>
//       <div>
//         <input type="radio" id="admin" name="role" value="admin" checked={newRole === 'admin'} onChange={handleRoleChange} />
//         <label htmlFor="admin">Admin</label>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Users;






// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateUserRole } from '../../redux/users/userOperations';

// const Users = ({ userId }) => {
//   const dispatch = useDispatch();
//   const [newRole, setNewRole] = useState('');

//   const handleRoleChange = (e) => {
//     setNewRole(e.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       await dispatch(updateUserRole({ userId: 61, role: newRole }));
//       console.log('Role updated successfully');
//     } catch (error) {
//       console.error('Failed to update role:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Change User Role</h3>
//       <div>
//         <input type="radio" id="user" name="role" value="user" checked={newRole === 'user'} onChange={handleRoleChange} />
//         <label htmlFor="user">User</label>
//       </div>
//       <div>
//         <input type="radio" id="moderator" name="role" value="moderator" checked={newRole === 'moderator'} onChange={handleRoleChange} />
//         <label htmlFor="moderator">Moderator</label>
//       </div>
//       <div>
//         <input type="radio" id="admin" name="role" value="admin" checked={newRole === 'admin'} onChange={handleRoleChange} />
//         <label htmlFor="admin">Admin</label>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Users;






























import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserRole } from '../../redux/users/userOperations';
import { DivStyles, EditRoleModal, ModalOverlay, ModalButton, Select } from './AllUsers.styled';
import { toast } from 'react-toastify';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.auth.user);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers({ skip: 0, limit: 10 }));
  }, [dispatch]);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setNewRole('');
    setIsModalOpen(false);
  };

  const handleRoleChange = (e) => {
    setNewRole(e.target.value);
  };

  // const handleSubmit = () => {
  //   if (selectedUser && newRole) {
  //     dispatch(updateUserRole({ userId: selectedUser.id, newRole }))
  //       .then(() => {
  //         closeModal();
  //       })
  //       .catch((error) => {
  //         console.error('Failed to update role:', error);
  //       });
  //     toast.success('Role updated successfully');
  //   } else {
  //     toast.error('Please select a user and select a new role');
  //   }
  // };
  const handleSubmit = () => {
    if (selectedUser && newRole) {
      dispatch(updateUserRole({ userId: selectedUser.id, role: newRole }))
        .then(() => {
          closeModal();
        })
        .catch((error) => {
          console.error('Failed to update role:', error);
        });
      toast.success('Role updated successfully');
    } else {
      toast.error('Please select a user and select a new role');
    }
  };

  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  const filteredUsers = users.filter((user) => user.id !== currentUser.id);

  return (
    <DivStyles>
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h2>Username: {user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <ModalButton onClick={() => openModal(user)}>Edit Role</ModalButton>
        </div>
      ))}
      {isModalOpen && (
        <ModalOverlay>
          <EditRoleModal>
            <h2>Edit Role for {selectedUser?.username}</h2>
            <Select name="role" value={newRole} onChange={handleRoleChange}>
              <option value="" disabled>Select new role</option>
              <option name="user" value="user">User</option>
              <option name="moderator" value="moderator">Moderator</option>
              <option name="admin" value="admin">Admin</option>
            </Select>
            <ModalButton onClick={handleSubmit}>Submit</ModalButton>
            <ModalButton onClick={closeModal}>Cancel</ModalButton>
          </EditRoleModal>
        </ModalOverlay>
      )}
    </DivStyles>
  );
};

export default Users;