import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HeaderWrapper,
  Menu,
  A,
  Ab,
  MenuDiv
} from './ComponentsHeader.styled';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);
  // eslint-disable-next-line
  // const [userData, setUserData] = useState(() => {
  //   const storedUserData = JSON.parse(localStorage.getItem('userData'));
  //   return storedUserData || {
  //     username: user.username,
  //   };
  // });

  const { user } = useAuth();

  // const user = useSelector(state => state.auth.user.username);
  const role = useSelector((state) => state.auth.user.role);

  return (
    <HeaderWrapper>
      <Logo />
        <Menu>
          <MenuDiv>
            <A to="/">Головна</A>
            {!isLoggedInUser &&
            <Ab to="/auth/register">
              {!isLoggedInUser && <FontAwesomeIcon icon={faUser} style={{ width: 20, height: 20, padding: '0px' }} />}
            </Ab> 
            }
            {isLoggedInUser && <A to="/user/updateUser">{user.username}</A>
          }
          {role === 'admin' && (<A style={{ padding: '0px', margin: '0px' }} to="/users/fetchUsers">Адмін панель</A>)}
          </MenuDiv>
        </Menu>
    </HeaderWrapper>
  );
};

export default Header;