import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  justify-content: space-between;
  padding: 7px 40px 10px 40px;
  display: flex;
  gap: 30px;
  background: #fff;
  top: 0;
  position: sticky;
  z-index: 3;
  @media screen and (max-width: 780px) {
    padding: 7px 20px 10px 20px;
    align-items: center;
  }
`;

export const LogOut = styled.button`
  background: red;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  padding: 4px 20px;
  border: none;
  @media screen and (max-width: 780px) {
    padding: 7px 20px 10px 20px;
    align-items: center;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 60%;
`;

export const Menu = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-end;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const MenuItem = styled.li`
  line-height: 1.6em;
  color: #111;
`;

export const A = styled(NavLink)`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #9ac43c;
  border-bottom: 1px dotted #e6e6e6;
  @media (max-width: 780px) {
    border-bottom: none;
    margin: 0;
    padding-bottom: 0;
  }
`;

export const Ab = styled(NavLink)``;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;
`;

export const LastDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const EditBtn = styled.button`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 100%;
    height: 29px;
    margin-top: 10px;
    background: rgb(154, 196, 60);
    border-radius: 15px;
    @media screen and (max-width: 768px) {
        width: 287px;
    }
`;

export const EditPhoto = styled.label`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 100%;
    height: 29px;
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




export const DivPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
`;

export const DivEdit = styled.div`
  display: flex;
  flex-direction: column;
`;


export const AboutA = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px 10px 15px;
  display: block;
  &:hover {
    cursor: pointer;
    background: #9ac43c;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  color: #9AC43C;
  align-items: center;
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