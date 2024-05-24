import { A, Div, DivContent, AddPhotoBtn } from './Middle.styled';
import React from 'react';
import { useSelector } from 'react-redux';

const Middle = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn && <DivContent><AddPhotoBtn type="submit">Add Photo</AddPhotoBtn></DivContent>}
      {!isLoggedIn && <Div><h1>Для того щоб почати тут щось робити, будь ласка <A to="/auth/register">зареєструйся</A> спочатку</h1></Div>}
    </div>
  );
};

export default Middle;