import React, { useState } from 'react';
import { PhotoItem, PhotoList, Delete, Div, Edit, DivButtons } from './Photos.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhotoThunk } from '../../../redux/photos/photoSlice';
import { toast } from 'react-toastify';
import { selectPhotos } from '../../../redux/photos/photoSelectors';

const Photos = () => {
  const role = useSelector((state) => state.auth.user.role);
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  
  const [updatedPhotos, setUpdatedPhotos] = useState(photos);

  const handleDelete = async (photoId) => {
    try {
      await dispatch(deletePhotoThunk(photoId));
      setUpdatedPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
      toast.success('Фотографія успішно видалена');
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast.error('Помилка при видаленні фотографії');
    }
  };

  return (
    <PhotoList>
      {updatedPhotos.map((photo) => (
        <PhotoItem key={photo.id}>
          <Div>
            <div>
              <img name="photo" src={photo.url} alt={photo.description} />
              <p name="description">{photo.description}</p>
              <p name="tags">{photo.tags}</p>
            </div>
            <DivButtons>
              {role === 'admin' && (
                <Delete name="delete" onClick={() => handleDelete(photo.id)}>Delete</Delete>
              )}
              <Delete name="delete" onClick={() => handleDelete(photo.id)}>Delete</Delete>
              <Edit name="edit">Edit</Edit>
            </DivButtons>
          </Div>
        </PhotoItem>
      ))}
    </PhotoList>
  );
};

export default Photos;














// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deletePhoto } from '../../../redux/photos/photoOperations';
// import { toast } from 'react-toastify';
// import { selectPhotos } from '../../../redux/photos/photoSelectors';

// const Photos = () => {
//   const role = useSelector((state) => state.auth.user.role);
//   const dispatch = useDispatch();
//   const photos = useSelector(selectPhotos);

//   const onDelete = async (photoId) => {
//     try {
//       await dispatch(deletePhoto(photoId));
//       toast.success('Фотографія успішно видалена');
//     } catch (error) {
//       console.error('Error deleting photo:', error.message);
//       toast.error('Помилка при видаленні фотографії');
//     }
//   };

//   return (
//     <div>
//       <h2>Фотографії</h2>
//       <div className="photo-list">
//         {photos.map((photo) => (
//           <div key={photo.id} className="photo-item">
//             <img src={photo.url} alt={photo.description} />
//             <p>{photo.description}</p>
//             <p>{photo.tags}</p>
//             {role === 'admin' && (
//               <button onClick={() => onDelete(photo.id)}>Видалити</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Photos;






















// import React, { useState } from 'react';
// import { PhotoItem, PhotoList, Delete, Div, Edit, DivButtons } from './Photos.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { deletePhoto } from '../../../redux/photos/photoOperations';
// import { toast } from 'react-toastify';
// import { selectPhotos } from '../../../redux/photos/photoSelectors';

// const Photos = () => {
//   const role = useSelector((state) => state.auth.user.role);
//   const dispatch = useDispatch();
//   const photos = useSelector(selectPhotos);
  
//   const [updatedPhotos, setUpdatedPhotos] = useState(photos);

//   const handleDelete = async (photoId) => {
//     try {
//       // Dispatch the delete action to the Redux store
//       await dispatch(deletePhoto(photoId));
//       // Update the local state to remove the deleted photo
//       setUpdatedPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
//       toast.success('Фотографія успішно видалена');
//     } catch (error) {
//       console.error('Error deleting photo:', error);
//       toast.error('Помилка при видаленні фотографії');
//     }
//   };

//   return (
//     <PhotoList>
//       {updatedPhotos.map((photo) => (
//         <PhotoItem key={photo.id}>
//           <Div>
//             <div>
//               <img name="photo" src={photo.url} alt={photo.description} />
//               <p name="description">{photo.description}</p>
//               <p name="tags">{photo.tags}</p>
//             </div>
//             <DivButtons>
//               {role === 'admin' && (
//                 <Delete name="delete" onClick={() => handleDelete(photo.id)}>Delete</Delete>
//               )}
//               <Edit name="edit">Edit</Edit>
//             </DivButtons>
//           </Div>
//         </PhotoItem>
//       ))}
//     </PhotoList>
//   );
// };

// export default Photos;