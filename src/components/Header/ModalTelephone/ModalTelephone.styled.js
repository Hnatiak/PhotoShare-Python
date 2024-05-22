import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  gap: 35px 12px;
  max-width: 870px;
`;

export const Menu = styled.div`
  padding: 10px;
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
  margin: 28px 5px 0 0;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #9ac43c;
  border-bottom: 1px dotted #e6e6e6;
  @media screen and (max-width: 780px) {
    margin: 28px 0 10px 0;
  }
  @media screen and (max-width: 480px) {
    margin: 20px 0 10px 0;
  }
`;

export const Ab = styled(NavLink)`
  font-size: 14px;
  font-weight: 700;
  color: #9ac43c;
  @media screen and (max-width: 480px) {
    gap: 15px;
    display: flex;
    padding-bottom: 0px;
  }
`;

export const MenuLinkActive = styled(NavLink)(({ selected }) => ({
  textTransform: 'uppercase',
  fontSize: '14px',
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

export const MenuTelephoneContainer = styled.div`
  display: flex;
`;
