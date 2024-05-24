import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LogoNav = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 780px) {
    max-width: 228px;
  }
`;

export const LogoImg = styled.img`
  max-height: 59px;
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const LogoText = styled.b`
  font-size: 14px;
  color: #000;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
