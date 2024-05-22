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

export const Ul = styled.ul`
  margin: 0 20px 25px 0;
  padding: 0;
  display: flex;
  gap: 14px;
  max-width: 870px;
  flex-wrap: wrap;
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

export const MenuLinkActive = styled(Link)(({ selected }) => ({
  textTransform: 'uppercase',
  fontSize: '13px',
  fontWeight: selected ? '700' : '400',
  color: selected ? '#9AC43C' : '#111',
  textDecoration: 'none',
  '&:hover': {
    color: '#9AC43C',
  },
}));

export const AboutUl = styled.ul`
  position: absolute;
  z-index: 3;
  display: block;
  color: white;
  min-width: 180px;
  padding: 0;
  margin-top: 2px;
  background: #222;
  border: none;
  opacity: inherit;
  @media screen and (max-width: 780px) {
    right: 0;
    left: auto;
    margin-right: 10px;
  }
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
