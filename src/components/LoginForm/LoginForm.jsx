// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/authOperations';
// import { toast } from 'react-toastify';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import {
//   ErrorText,
//   Menu,
//   Inputs,
//   Container,
//   PasswordInput,
//   Content,
//   LoginBtn,
//   StyledRegistrationLink,
//   StyledLink,
//   PasswordToggle,
//   PasswordIcon,
// } from './LoginForm.styled';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
//   password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     const User = {
//       email: event.target.elements.email.value,
//       password: event.target.elements.password.value,
//     };
  
//     const response = await dispatch(logIn(User));
  
//     if (response.error) {
//       toast.error(`Error: ${response.error}`);
//     } else {
//       navigate('/');
//       toast.success('Successfully logged in');
//     }
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={LoginSchema}
//         >
//           {({ isSubmitting }) => (
//               <Content>
//                 <Menu>
//                   <StyledRegistrationLink to="/auth/register" underline="none">Реєстрація</StyledRegistrationLink>
//                   <StyledLink to="/auth/login" underline="none">Вхід</StyledLink>
//                 </Menu>
//                 <Inputs>
//                   <Field autoFocus name="email" type="email" placeholder="Е-пошта" />
//                   <ErrorMessage name="email" component={ErrorText} />
//                   <PasswordInput>
//                     <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Пароль" />
//                     <ErrorMessage name="password" component={ErrorText} />
//                     <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
//                       {showPassword ? (
//                         <PasswordIcon icon={faEyeSlash} width="18px" />
//                       ) : (
//                         <PasswordIcon icon={faEye} width="18px" />
//                       )}
//                     </PasswordToggle>
//                   </PasswordInput>
//                   <LoginBtn type="submit" disabled={isSubmitting}>Увійти</LoginBtn>
//                   <ErrorMessage name="submit" component={ErrorText} />
//                 </Inputs>
//               </Content>
//           )}
//         </Formik>
//       </form>
//     </Container>
//   );
// };

// export default Login;










// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/authOperations';
// import { toast } from 'react-toastify';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import {
//   ErrorText,
//   Menu,
//   Inputs,
//   Container,
//   PasswordInput,
//   Content,
//   LoginBtn,
//   StyledRegistrationLink,
//   StyledLink,
//   PasswordToggle,
//   PasswordIcon,
// } from './LoginForm.styled';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
//   password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Container>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={LoginSchema}
//         onSubmit={async (values, { setSubmitting }) => {
//           const User = {
//             email: values.email,
//             password: values.password,
//           };

//           const response = await dispatch(logIn(User));
//           setSubmitting(false);

//           if (response.error) {
//             const errorMessage = response.error.message || response.error;
//             toast.error(`Error: ${JSON.stringify(errorMessage)}`);
//           } else {
//             navigate('/');
//             toast.success('Successfully logged in');
//           }
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Content>
//             <Menu>
//               <StyledRegistrationLink to="/auth/register" underline="none">Реєстрація</StyledRegistrationLink>
//               <StyledLink to="/auth/login" underline="none">Вхід</StyledLink>
//             </Menu>
//             <Inputs>
//               <Field autoFocus name="email" type="email" placeholder="Е-пошта" />
//               <ErrorMessage name="email" component={ErrorText} />
//               <PasswordInput>
//                 <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Пароль" />
//                 <ErrorMessage name="password" component={ErrorText} />
//                 <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
//                   {showPassword ? (
//                     <PasswordIcon icon={faEyeSlash} width="18px" />
//                   ) : (
//                     <PasswordIcon icon={faEye} width="18px" />
//                   )}
//                 </PasswordToggle>
//               </PasswordInput>
//               <LoginBtn type="submit" disabled={isSubmitting}>Увійти</LoginBtn>
//               <ErrorMessage name="submit" component={ErrorText} />
//             </Inputs>
//           </Content>
//         )}
//       </Formik>
//     </Container>
//   );
// };

// export default Login;












import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  ErrorText,
  Inputs,
  Menu,
  Container,
  PasswordInput,
  Content,
  LoginBtn,
  StyledRegistrationLink,
  StyledLink,
  PasswordToggle,
  PasswordIcon,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import { useState } from 'react';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().min(6, 'Е-пошта мусить бути більше 6-ти символів').email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  password: Yup.string().min(4, 'Пароль мусить бути більше 8-ми цифр').required('Пароль обов\'язковий'),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const User = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(logIn(User));

    if (response.error) {
      toast.error(`Помилка під час входу ${response.error}`)
    } else {
      toast.success("Ви успішно зареєструвалися");
      navigate(`/auth/confirmed_email?email=${User.email}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik initialValues={{ username: '', email: '', password: '' }} validationSchema={RegisterSchema}>
          <Content>
            <Menu>
              <StyledRegistrationLink to="/auth/register" underline="none">Реєстрація</StyledRegistrationLink>
              <StyledLink to="/auth/login" underline="none">Вхід</StyledLink>
            </Menu>
            <Inputs>
              <Field name="email" type="email" placeholder="Е-пошта" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Пароль" />
                <ErrorText name="password" component="div" />
                <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <PasswordIcon icon={faEyeSlash} width="18px" />
                  ) : (
                    <PasswordIcon icon={faEye} width="18px" />
                  )}
                </PasswordToggle>
              </PasswordInput>
              <LoginBtn type="submit">Зареєструватися</LoginBtn>
              <ErrorText name="submit" component="div" />
            </Inputs>
          </Content>
        </Formik>
      </form>
    </Container>
  );
}

export default Login;
