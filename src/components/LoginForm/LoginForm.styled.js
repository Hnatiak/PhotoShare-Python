import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100%;
  background: var(--welcomeBgColor);
  background-repeat: no-repeat;
  background-size: cover;
`
export const Content = styled.div `
  text-align: center;
  // background: #111;
  border-radius: 20px;
  border: 1px solid #9AC43C;
`
export const Menu = styled.div`
    background: #9AC43C;
    padding: 30px;
    display: flex;
    border-radius: 20px 20px 0 0;
`;

export const StyledLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: var(--fontWeight500);
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #111;
`;

export const StyledRegistrationLink = styled(Link)`
  margin-right: 14px;
  font-style: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: white;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 30px;

  input {
    width: 326px;
    height: 49px;
    left: 40px;
    top: 107px;
    // color: white;
    background: var(--inputBgColor);
    opacity: 0.4;
    border: 1px solid white;
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    @media screen and (max-width: 768px) {
        width: 287px;

    }
  }
`;
export const PasswordInput = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;
`
export const PasswordInputField = styled.input`
  width: 326px;
  height: 49px;
  left: 40px;
  top: 107px;
  color: var(--lightColor);
  background: var(--inputBgColor);
  opacity: 0.4;
  border: 1px solid white;
  padding-left: 18px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
`;

export const PasswordToggle = styled.span`
    position: absolute;
    right: 18px;
    top: 15px;
    cursor: pointer;
    color: var(--passwordColor);
`;

export const PasswordIcon = styled(FontAwesomeIcon)`
    color: var(--passwordColor);
`;
export const Svg = styled.svg`
  width: 16.5px;
  height: 16px;
  top: 50%;
  right: 4px;
`;
export const LoginBtn = styled.button`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin-top: 24px;
    letter-spacing: -0.02em;
    width: 100%;
    height: 49px;
    background: rgb(154, 196, 60);
    border-radius: 8px;
    color: #000;
    @media screen and (max-width: 768px) {
        width: 287px;
    }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 15px;
  color: #000;
`;