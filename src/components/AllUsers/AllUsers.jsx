// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, updateUserRole } from '../../redux/users/userOperations';
// import { DivStyles, EditRoleModal, ModalOverlay, ModalButton, Select } from './AllUsers.styled';
// import { toast } from 'react-toastify';

// const Users = () => {
//   const dispatch = useDispatch();
//   const { users, isLoading, error } = useSelector((state) => state.user);
//   const currentUser = useSelector((state) => state.auth.user);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [newRole, setNewRole] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     dispatch(fetchUsers({ skip: 0, limit: 10 }));
//   }, [dispatch]);

//   const openModal = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedUser(null);
//     setNewRole('');
//     setIsModalOpen(false);
//   };

//   const handleRoleChange = (e) => {
//     setNewRole(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (selectedUser && newRole) {
//       dispatch(updateUserRole({ userId: selectedUser.id, newRole }))
//         .then(() => {
//           closeModal();
//           toast.success('Role updated successfully');
//         })
//         .catch((error) => {
//           console.error('Failed to update role:', error);
//           toast.error(error); // Display error message
//         });
//     } else {
//       toast.error('Please select a user and select a new role');
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Display error message
//   }

//   if (!users || users.length === 0) {
//     return <div>No users found.</div>;
//   }

//   const filteredUsers = users.filter((user) => user.id !== currentUser.id);

//   return (
//     <DivStyles>
//       {filteredUsers.map((user) => (
//         <div key={user.id}>
//           <h2>Username: {user.username}</h2>
//           <p>Email: {user.email}</p>
//           <p>Role: {user.role}</p>
//           <ModalButton onClick={() => openModal(user)}>Edit Role</ModalButton>
//         </div>
//       ))}
//       {isModalOpen && (
//         <ModalOverlay>
//           <EditRoleModal>
//             <h2>Edit Role for {selectedUser?.username}</h2>
//             <Select value={newRole} onChange={handleRoleChange}>
//               <option value="" disabled>Select new role</option>
//               <option value="user">User</option>
//               <option value="moderator">Moderator</option>
//               <option value="admin">Admin</option>
//             </Select>
//             <ModalButton onClick={handleSubmit}>Submit</ModalButton>
//             <ModalButton onClick={closeModal}>Cancel</ModalButton>
//           </EditRoleModal>
//         </ModalOverlay>
//       )}
//     </DivStyles>
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

  const handleSubmit = () => {
    if (selectedUser && newRole) {
      dispatch(updateUserRole({ userId: selectedUser.id, newRole }))
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
            <Select value={newRole} onChange={handleRoleChange}>
              <option value="" disabled>Select new role</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
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