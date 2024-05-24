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
import { setName } from '../../redux/users/userSelectors';
import Logo from '../Logo/Logo';

const Header = () => {
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

  const username = useSelector(setName);
  // const user = useSelector(state => state.user.user);
  const user = useSelector(state => state.auth.user);
  // console.log(user)
  // const username = useSelector((state) => state.auth.user.username);
  console.log(username)
  const role = useSelector((state) => state.auth.user.role);

  return (
    <HeaderWrapper>
      <Logo />
        <Menu>
          <MenuDiv>
            {!isLoggedInUser &&
            <Ab to="/auth/register">
              {!isLoggedInUser && <FontAwesomeIcon icon={faUser} style={{ width: 20, height: 20, padding: '0px' }} />}
            </Ab> 
            }
            {isLoggedInUser && <div><A style={{ marginRight: '15px' }} to="/">Головна</A><A to="/user/updateUser">{user.username}</A></div>
          }
          {role === 'admin' && (<A style={{ padding: '0px', margin: '0px' }} to="/users/fetchUsers">Адмін панель</A>)}
          </MenuDiv>
        </Menu>
    </HeaderWrapper>
  );
};

export default Header;