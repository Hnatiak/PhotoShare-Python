import { useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import {
  ModalTitle,
  Title,
  StyledForm,
  StyledField,
  ModalContentStyle,
  Textarea,
  ErrorText,
  ErrorMessageText,
  ModalStyle,
  BtnSend,
  CloseBtnStyle,
  Settings,
  Svg,
  Container,
  Label,
  FormDiv,
  Div,
} from './ModalQuestion.styled';

import { Formik } from 'formik'; // Додано Field
import * as Yup from 'yup';
import { sendEmail } from '../../../service/help-services';
import { toast } from 'react-toastify';

const CommentSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  message: Yup.string()
    .required('Коментар обов\'язковий')
    .min(10, 'Будь ласка напишіть більше деталей'),
});

const HelpModal = ({ closeModal }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (values, { setSubmitting }) => { // Змінено параметр з value на values
    setSubmitting(true);

    try {
      await sendEmail(values); // Змінено параметр з value на values
      toast.success('Ваше питання надіслано успішно'); // Змінено "Email send" на "Email sent"
      closeModal();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <ModalStyle onClose={closeModal}>
      <ModalContentStyle>
       <ModalTitle>
         <Settings>
           <Svg icon={faCircleQuestion} />
           <Title>Задати питання</Title>
         </Settings>
         <CloseBtnStyle onClick={closeModal}>✖</CloseBtnStyle>
       </ModalTitle>
       <Container>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={CommentSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <Div>
                <FormDiv>
                  <Label>Ім'я<span>*</span></Label>
                  <StyledField autoFocus name="name" type="name" placeholder="Іван Іванович" />
                </FormDiv>
                <ErrorText name="name" component="div" />

                <FormDiv>
                  <Label>E-mail<span>*</span></Label>
                  <StyledField autoFocus name="email" type="email" placeholder="Email address" />
                </FormDiv>
                <ErrorText name="email" component="div" />
              </Div>

              <FormDiv>
                <Label>Питання<span>*</span></Label>
                <Textarea name="message" as="textarea" placeholder="Зміст питання" />
              </FormDiv>
              <ErrorText name="message" component="div" />
              <BtnSend type="submit" disabled={isSubmitting}>Надіслати</BtnSend>
              {errorMessage && (
                <ErrorMessageText>{errorMessage}</ErrorMessageText>
              )}
            </StyledForm>
          )}
        </Formik>
      </Container>
      </ModalContentStyle>
    </ModalStyle>
  );
};

export default HelpModal;