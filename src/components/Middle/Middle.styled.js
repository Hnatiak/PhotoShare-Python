import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export const ModalComponent = styled(Modal)`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const Div = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;

export const DivContent = styled.div`
  margin: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row-reverse;
`;

export const AddPhotoBtn = styled.button`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 20%;
    height: 49px;
    background: rgb(154, 196, 60);
    border-radius: 8px;
    @media screen and (max-width: 768px) {
        width: 287px;
    }
`;

export const A = styled(Link)`
    transition: color 0.2s ease-in;
    &:hover{
        color: #9AC43C;
    }
`;


export const DivModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        color: #9AC43C;
    }
`;


export const FileInputWrapper = styled.label`
  display: inline-block;
  margin-top: 10px;
  width: 24px;
  color: black;
  height: 24px;
  border-radius: 15px;
  background: rgb(154, 196, 60);
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;




export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80%;
  background: white;
  padding: 35px;
  border-radius: 25px;
  border: 1px solid rgb(154, 196, 60);
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  resize: none;
  width: 300px;
  height: 80px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export const EditPhoto = styled.label`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 350px;
    height: 49px;
    margin-top: 10px;
    background: rgb(154, 196, 60);
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        width: 287px;
    }
`;

export const ImagePreview = styled.img `
    width: 60%;
`


export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;




export const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 15px;

  form {
    display: flex;
    width: 100%;
  }

  input {
    width: 100%;
    padding-left: 20px;
    border: 2px solid #494547;
    border-radius: 50px 0px 0px 50px;
    outline: none;
    background: #F9F0DA;
    color: #9E9C9C;
  }

  button {
    top: 0;
    right: 0px;
    width: 42px;
    height: 42px;
    border: none;
    background: #494547;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
  }

  button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #F9F0DA;
  }

  svg {
    color: white;
    font-size: 20px;
    margin-right: 5px;
  }
`;