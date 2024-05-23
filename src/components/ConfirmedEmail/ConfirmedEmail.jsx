import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Menu,
  Inputs,
  Container,
  Content,
  RegisterBtn,
} from './ConfirmedEmail.styled';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
});

const ConfirmedEmail = () => {
  return (
    <Container>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema}>
          <Content>
            <Menu>
              <h1>Підтвердження реєстрації</h1>
            </Menu>
            <Inputs>
              <p>Будь ласка перегляньте вашу електронну пошту, і підтвердіть вашу реєстрацію, після чого нажміть на "Перейти далі"</p>
              <RegisterBtn to="/auth/login" underline="none">Перейти далі</RegisterBtn>
            </Inputs>
          </Content>
        </Formik>
    </Container>
  );
};

export default ConfirmedEmail;