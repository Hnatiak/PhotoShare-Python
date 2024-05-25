import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createPhoto } from '../../redux/photos/photoOperations';
import { A, Div, DivContent, AddPhotoBtn, ModalContent, Form, Input, Textarea, SubmitButton, ModalComponent, FileInput, EditPhoto, ImagePreview, DivSearch, CloseButtonWrapper, CloseButton } from './Middle.styled';
import Photos from './Photos/Photos';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Middle = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('description', data.description);
      formData.append('tags', data.tags);

      dispatch(createPhoto(formData))
        .then(() => {
          toast.success('Ваш пост успішно добавлено');
          closeModal();
          window.location.reload()
        })
        .catch((error) => {
          toast.error(`Щось пішло не так, спробуйте ще раз: ${error.message}`);
        });
    } else {
      toast.error('Будь ласка, додайте фото.');
    }
  };

  Modal.setAppElement('#root');

  return (
    <div>
      {/* {isLoggedIn &&
      <DivSearch>
        <form action="">
          <input type="text" placeholder="Шукати тут..." />
          <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </DivSearch>} */}
      {isLoggedIn && (<Photos />)}
      {isLoggedIn && (
        <DivContent>
          <AddPhotoBtn type="button" onClick={openModal}>Add Photo</AddPhotoBtn>

          <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Photo Modal">
            <ModalContent>
              <Form onSubmit={handleSubmit(onSubmit)} method="post">
                <CloseButtonWrapper>
                    <h2 style={{ margin: '0px' }}>Add Post</h2>
                    <CloseButton type="button" onClick={closeModal}>✖</CloseButton>
                </CloseButtonWrapper>
                {previewUrl && <ImagePreview src={previewUrl} alt="Preview" />}
                <FileInput type="file" id='file' name='photo' onChange={onFileChange} />
                <EditPhoto htmlFor="file">Add Photo</EditPhoto>
                <Textarea name='description' placeholder="Enter description" {...register('description')} />
                <Input type="text" name='tags' placeholder="Enter tags separated by comma" {...register('tags')} />
                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            </ModalContent>
          </ModalComponent>
        </DivContent>
      )}
      {!isLoggedIn && (
        <Div>
          <h1>Для того щоб почати тут щось робити, будь ласка <A to="/auth/register">зареєструйся</A> спочатку</h1>
        </Div>
      )}
    </div>
  );
};

export default Middle;