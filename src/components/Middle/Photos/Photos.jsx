import React, { useState } from 'react';
import { PhotoItem, PhotoList, Delete, Div, Edit, DivButtons, Save } from './Photos.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhotoThunk, updatePhotoThunk } from '../../../redux/photos/photoSlice';
import { toast } from 'react-toastify';
import { selectPhotos } from '../../../redux/photos/photoSelectors';

const Photos = () => {
  const role = useSelector((state) => state.auth.user.role);
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const [editing, setEditing] = useState({});

  const toggleEditing = (photoId) => {
    setEditing((prevEditing) => ({
      ...prevEditing,
      [photoId]: !prevEditing[photoId],
    }));
  };

  const handleSave = async (photoId, updatedDetails) => {
    try {
      await dispatch(updatePhotoThunk({ photoId, ...updatedDetails }));
      toast.success('Фотографія успішно оновлена');
      toggleEditing(photoId);
    } catch (error) {
      console.error('Error updating photo:', error);
      toast.error('Помилка при оновленні фотографії');
    }
  };

  const handleDelete = async (photoId) => {
    try {
      await dispatch(deletePhotoThunk(photoId));
      toast.success('Фотографія успішно видалена');
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast.error('Помилка при видаленні фотографії');
    }
  };

  return (
    <PhotoList>
      {photos.map((photo) => (
        <PhotoItem key={photo.id}>
          <Div>
            {editing[photo.id] ? (
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSave(photo.id, {
                  description: e.target.description.value,
                  tags: e.target.tags.value.split(','),
                });
              }}>
                <input name="description" defaultValue={photo.description} />
                <input name="tags" defaultValue={Array.isArray(photo.tags) ? photo.tags.join(',') : photo.tags} />
                <Save type="submit">Зберегти</Save>
              </form>
            ) : (
              <div>
                <img name="photo" src={photo.url} alt={photo.description} />
                <p name="description">{photo.description}</p>
                <p name="tags">{Array.isArray(photo.tags) ? photo.tags.join(', ') : photo.tags}</p>
              </div>
            )}
            <DivButtons>
              {role === 'admin' && (<Delete name="delete" onClick={() => handleDelete(photo.id)}>Delete</Delete>)}
              <Edit name="edit" onClick={() => toggleEditing(photo.id)}>
                {editing[photo.id] ? 'Скасувати' : 'Редагувати'}
              </Edit>
            </DivButtons>
          </Div>
        </PhotoItem>
      ))}
    </PhotoList>
  );
};

export default Photos;