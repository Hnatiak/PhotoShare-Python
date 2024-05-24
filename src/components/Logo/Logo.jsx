import React from 'react';
import logo from '../../images/phone.webp';
import { LogoImg, LogoNav } from './Logo.styled';

const Logo = () => {
  return (
    <LogoNav to="/">
      <LogoImg src={logo} alt="logo" />
    </LogoNav>
  );
};

export default Logo;
