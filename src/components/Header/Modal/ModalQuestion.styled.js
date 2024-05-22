import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Field, ErrorMessage } from 'formik';

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s linear, top 0.3s ease-out;
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 12px;
  color: var(--createBoardInputTextFocus);
`;

export const ModalTitle = styled.div`
  background-color: #9ac43c;
  padding: 25px 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px 12px 0 0;
  @media screen and (max-width: 480px) {
    padding: 15px 10px;
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h4`
  background: #9ac43c;
  color: #fff;
  font-size: 28px;
  margin-bottom: 0px;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Container = styled.div`
  position: relative;
  max-height: 400px;
  padding: 15px 15px 35px 15px;
  justify-content: space-around;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 15px 15px 25px 15px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  margin: 5px 15px 0 0;
  font-weight: bold;
`;

export const Textarea = styled(Field)`
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #cccccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border linear 0.2s, box-shadow linear 0.2s;
  height: 150px;
  padding: 4px 6px;
  font-size: 14px;
  resize: vertical;
  width: 100%;
  margin-top: 8px;
  resize: none;
  @media screen and (min-width: 481px) {
    width: 220px;
  }
`;

export const ModalContentStyle = styled.div`
  border-radius: 12px;
  top: 10%;
  left: 50%;
  z-index: 1050;
  width: 560px;
  background-color: #ffffff;
  @media screen and (max-width: 589px) {
    width: 95%;
  }
`;

export const Svg = styled(FontAwesomeIcon)`
  position: relative;
  margin-right: 15px;
  color: white;
  font-size: 4em;
  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
`;

export const CloseBtnStyle = styled.button`
  background: transparent;
  border: 0;
`;

export const BtnSend = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  text-shadow: none;
  border: none;
  padding: 8px 22px;
  box-shadow: none;
  margin-top: 20px;
  background: #9ac43c;
  border-radius: 4px;
  @media screen and (max-width: 480px) {
    padding: 4px 18px;
    font-size: 14px;
    margin-top: 20px;
  }
`;

export const ErrorMessageText = styled.div`
  color: var(--createBoardInputTextFocus);
  margin-top: 10px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    gap: 0px;
  }
`;

export const StyledField = styled(Field)`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  max-width: 100%;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border linear 0.2s, box-shadow linear 0.2s;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 20px;
  color: #555555;
  vertical-align: middle;
  border-radius: 4px;
  @media screen and (min-width: 481px) {
    width: 220px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
