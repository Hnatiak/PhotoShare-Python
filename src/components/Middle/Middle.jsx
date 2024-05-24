import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createPhoto } from '../../redux/photos/photoOperations';
import { selectPhotos } from '../../redux/photos/photoSelectors';
import { A, Div, DivContent, AddPhotoBtn, ModalContent, Form, Input, Textarea, SubmitButton, ModalComponent, FileInput, EditPhoto, ImagePreview, CloseButtonWrapper, CloseButton } from './Middle.styled';
import Photos from './Photos/Photos';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

const Middle = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);

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
        })
        .catch((error) => {
          toast.error(`Щось пішло не так, спробуйте ще раз: ${error.message}`);
        });
    } else {
      toast.error('Будь ласка, додайте фото.');
    }
  };

  Modal.setAppElement('#root');  // Ensure Modal is accessible

  return (
    <div>
      <Photos photos={photos} />
      {isLoggedIn && (
        <DivContent>
          <AddPhotoBtn type="button" onClick={openModal}>Add Photo</AddPhotoBtn>

          <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Photo Modal">
            <ModalContent>
              <Form onSubmit={handleSubmit(onSubmit)}>
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




















// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { createPhoto } from '../../redux/photos/photoOperations';
// import { selectPhotos } from '../../redux/photos/photoSelectors';
// import { A, Div, DivContent, AddPhotoBtn, ModalContent, Form, Input, Textarea, SubmitButton, ModalComponent, FileInput, EditPhoto, ImagePreview } from './Middle.styled';
// import Photos from './Photos/Photos';
// import { toast } from 'react-toastify';

// const Middle = () => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const { register, handleSubmit } = useForm();
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.auth.user);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedFile(null);
//     setPreviewUrl(null);
//   };

//   const onFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreviewUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//     const onSubmit = (data) => {
//         if (selectedFile) {
//             const formData = new FormData();
//             formData.append('photo', selectedFile);
//             formData.append('description', data.description);
//             formData.append('tags', data.tags);

//             dispatch(createPhoto(formData))
//                 .then(() => {
//                     toast.success('Ваш пост успішно добавлено');
//                     closeModal();
//                 })
//                 .catch((error) => {
//                     toast.error(`Щось пішло не так, спробуйте ще раз: ${error.message}`);
//                 });
//         } else {
//             toast.error('Будь ласка, додайте фото.');
//         }
//     };

//   const photos = useSelector(selectPhotos);

//   return (
//     <div>
//       {isLoggedIn && (
//         <DivContent>
//           <AddPhotoBtn type="button" onClick={openModal}>Add Photo</AddPhotoBtn>

//           <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Photo Modal">
//             <ModalContent>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <h2>Add Post</h2>
//                 {previewUrl && <ImagePreview src={previewUrl} alt="Preview" />}
//                 <FileInput type="file" id='file' name='photo' onChange={onFileChange} />
//                 <EditPhoto htmlFor="file">Add Photo</EditPhoto>
//                 <Textarea name='description' placeholder="Enter description" />
//                 <Input type="text" name='tags' placeholder="Enter tags separated by comma" />
//                 <SubmitButton type="submit">Submit</SubmitButton>
//               </Form>
//             </ModalContent>
//           </ModalComponent>
//         </DivContent>
//       )}
//       {!isLoggedIn && (
//         <Div>
//           <h1>Для того щоб почати тут щось робити, будь ласка <A to="/auth/register">зареєструйся</A> спочатку</h1>
//         </Div>
//       )}
//       <Photos photos={photos} />
//     </div>
//   );
// };

// export default Middle;























// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { createPhoto } from '../../redux/photos/photoOperations';
// import { selectPhotos } from '../../redux/photos/photoSelectors';
// import { A, Div, DivContent, AddPhotoBtn, ModalContent, Form, Input, Textarea, SubmitButton, ModalComponent, FileInput, EditPhoto, ImagePreview } from './Middle.styled';
// import Photos from './Photos/Photos';
// import { toast } from 'react-toastify';

// const Middle = () => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const { register, handleSubmit } = useForm();
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.auth.user);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedFile(null);
//     setPreviewUrl(null);
//   };

//   const onFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreviewUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//     const onSubmit = (data) => {
//   if (selectedFile) {
//     // Handle photo creation
//     const formData = new FormData();
//     formData.append('photo', selectedFile);
//     formData.append('description', data.description);
//     formData.append('tags', data.tags);
//     dispatch(createPhoto(formData));
//     toast.success('Ваш пост успішно добавлено');
//   } else {
//     toast.error('Щось пішло не так, спробуйте ще раз');
//   }
//   closeModal();
// };

//   const photos = useSelector(selectPhotos);

//   return (
//     <div>
//       {isLoggedIn && (
//         <DivContent>
//           <AddPhotoBtn type="button" onClick={openModal}>Add Photo</AddPhotoBtn>

//           <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Photo Modal">
//             <ModalContent>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <h2>Add Post</h2>
//                 {previewUrl && <ImagePreview name="photo" src={previewUrl} alt="Preview" />}
//                 <FileInput type="file" id="file" {...register("photo")} onChange={onFileChange} />
//                 <EditPhoto htmlFor="file" name="photo">Add Photo</EditPhoto>
//                 <Textarea name="description" {...register("description")} placeholder="Enter description" />
//                 <Input type="text" name="tags" {...register("tags")} placeholder="Enter tags separated by comma" />
//                 <SubmitButton type="submit">Submit</SubmitButton>
//               </Form>
//             </ModalContent>
//           </ModalComponent>
//         </DivContent>
//       )}
//       {!isLoggedIn && (
//         <Div>
//           <h1>Для того щоб почати тут щось робити, будь ласка <A to="/auth/register">зареєструйся</A> спочатку</h1>
//         </Div>
//       )}
//       <Photos photos={photos} />
//     </div>
//   );
// };

// export default Middle;





















// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { A, Div, DivContent, AddPhotoBtn, ModalContent, Form, Input, Textarea, SubmitButton, ModalComponent, FileInput, EditPhoto, ImagePreview } from './Middle.styled';

// const Middle = () => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   // eslint-disable-next-line
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const { register, handleSubmit } = useForm();

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedFile(null); // Clear the selected file when closing the modal
//     setPreviewUrl(null); // Clear the preview URL when closing the modal
//   };

//   const onFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     // Create a URL for the selected file
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreviewUrl(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     closeModal();
//   };

//   return (
//     <div>
//       {isLoggedIn && (
//         <DivContent>
//           <AddPhotoBtn type="button" onClick={openModal}>Add Photo</AddPhotoBtn>

//           <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Photo Modal">
//             <ModalContent>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <h2>Add Post</h2>
//                 {previewUrl && <ImagePreview src={previewUrl} alt="Preview" />}
//                 <FileInput type="file" id="file" {...register("photo")} onChange={onFileChange} />
//                 <EditPhoto htmlFor="file">Add Photo</EditPhoto>
//                 <Textarea {...register("description")} placeholder="Enter description" />
//                 <Input type="text" {...register("tags")} placeholder="Enter tags separated by comma" />
//                 <SubmitButton type="submit">Submit</SubmitButton>
//               </Form>
//             </ModalContent>
//           </ModalComponent>
//         </DivContent>
//       )}
//       {!isLoggedIn && (
//         <Div>
//           <h1>Для того щоб почати тут щось робити, будь ласка <A to="/auth/register">зареєструйся</A> спочатку</h1>
//         </Div>
//       )}
//     </div>
//   );
// };

// export default Middle;