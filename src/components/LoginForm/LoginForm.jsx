import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  ErrorText,
  Menu,
  Inputs,
  Container,
  PasswordInput,
  Content,
  LoginBtn,
  StyledRegistrationLink,
  StyledLink,
  PasswordToggle,
  PasswordIcon,
} from './LoginForm.styled';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
  password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
});

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const response = await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
  
      if (response.error) {
        toast.error('Щось пішло не так. Перевірте е-пошту або введені вами дані ще раз');
      } else {
        navigate('/');
        toast.success('Ви успішно залогінілись');
      }
    } catch (error) {
      console.error('Помилка під час входу:', error);
      toast.error('Помилка під час входу. Будь ласка, спробуйте знову.');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema}>
          <Content>
            <Menu>
              <StyledRegistrationLink to="/auth/register" underline="none">Реєстрація</StyledRegistrationLink>
              <StyledLink to="/auth/login" underline="none">Вхід</StyledLink>
            </Menu>
            <Inputs>
              <Field autoFocus name="email" type="email" placeholder="Е-пошта" value={email} onChange={(e) => setEmail(e.target.value)} />
              <ErrorText name="username" component="div" />
              <PasswordInput>
                <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                <ErrorText name="password" component="div" />
                <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
                  {showPassword ? (
                  <PasswordIcon icon={faEyeSlash} width="18px" />
                ) : (
                  <PasswordIcon icon={faEye} width="18px" />
                )}
              </PasswordToggle>
            </PasswordInput>
              <LoginBtn type="submit">Увійти</LoginBtn>
              <ErrorText name="submit" component="div" />
            </Inputs>
          </Content>
        </Formik>
      </form>
    </Container>
  );
};

export default Login;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../redux/auth/authOperations';
// import { useDispatch } from 'react-redux';
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
// import { setAccessToken } from '../../redux/auth/authSelectors';
// import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Е-пошта неправильний').required('Е-пошта обов\'язкова'),
//   password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
// });

// function LoginPage() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     const currentUser = {
//       email: event.target.elements.email.value,
//       password: event.target.elements.password.value,
//     };

//     const response = await dispatch(login(currentUser, setAccessToken));

//     if (response.error) {
//       toast.error();
//     } else {
//       navigate('/');
//       toast.success('Ви успішно залогінились')
//     }
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} >
//           <Content>
//             <Menu>
//                 <StyledRegistrationLink to="/auth/register" underline="none">Реєстрація</StyledRegistrationLink>
//                 <StyledLink to="/auth/login" underline="none">Вхід</StyledLink>
//             </Menu>
//             <Inputs>
//               <Field autoFocus name="email" type="email" placeholder="Е-пошта" />
//               <ErrorText name="username" component="div" />
//               {/* <PasswordInput>
//                 <Field type="password"
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <ErrorText name="password" component="div" />
//               </PasswordInput> */}


//               <PasswordInput>
//                 <Field name="password" type={showPassword ? 'text' : 'password'} placeholder="Пароль" />
//                 <ErrorText name="password" component="div" />
//                 <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
//                   {showPassword ? (
//                     <PasswordIcon icon={faEyeSlash} width="18px" />
//                   ) : (
//                     <PasswordIcon icon={faEye} width="18px" />
//                   )}
//                 </PasswordToggle>
//               </PasswordInput>



//               <LoginBtn type="submit">Увійти</LoginBtn>
//               <ErrorText name="submit" component="div" />
//             </Inputs>
//           </Content>
//         </Formik>
//       </form>
//     </Container>
//   );
// }

// export default LoginPage;