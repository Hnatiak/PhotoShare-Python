import { useEffect, useState } from 'react';
import { faCircleQuestion, faAngleDown, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalQuestion from './Modal/ModalQuestion';
import ModalTelephone from './ModalTelephone/ModalTelephone';
import {
  HeaderWrapper,
  // Nav,
  MenuItem,
  Ul,
  MenuLinkActive,
  Menu,
  A,
  AboutUl,
  AboutA,
  Ab,
  MenuDiv
} from './ComponentsHeader.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// selectCurrentUser,
import { setName } from '../../redux/users/userSelectors';
import Logo from '../Logo/Logo';
// import { toast } from 'react-toastify';

const Header = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('/');
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // eslint-disable-next-line
  const [isMouseInMenu, setIsMouseInMenu] = useState(false);
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalTelephoneOpen, setIsModalTelephoneOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsMouseInMenu(false);
  };

  const handleMenuOptionClick = () => {
    setIsDropdownOpen(false);
  };

  const openModal = event => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const openModalTelephone = () => {
    setIsModalTelephoneOpen(true);
  };

  const closeModalTelephone = () => {
    setIsModalTelephoneOpen(false);
  };

  const username = useSelector(setName);

  // const username = useSelector(selectCurrentUser);
  // const access_token = useSelector(setAccessToken);
  // const email = useSelector(setEmail);
  // const role = useSelector(setRole);
  // const refresh_token = useSelector(setRefreshToken);
  // const password = useSelector(setPassword);

  // const handleLogout = () => {
  //   try {
  //     dispatch(logout());
  //     navigate('/');
  //     toast.success('Ви успішно розлогінились');
  //   } catch (error) {
  //     console.log('Сталася помилка під час виходу:', error);
  //     toast.error('Під час розлогінення сталася помилка');
  //   }
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderWrapper>
      <Logo />
      {windowWidth < 781 ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <A href="" title="Є запитання?" onClick={openModal}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              style={{
                height: '35px',
                position: 'relative',
                marginRight: 15,
                borderBottom: 'none',
              }}
            />
          </A>
          <FontAwesomeIcon icon={faBars} onClick={openModalTelephone} style={{ width: '25px', height: '25px' }} />
        </div>
      ) : (
        <Menu>
          <MenuDiv>
            {/* <A href="" title="Є запитання?" onClick={openModal}> */}
              {/* <FontAwesomeIcon
                icon={faCircleQuestion}
                style={{
                  height: '25px',
                  position: 'relative',
                  top: '3px',
                  marginRight: 5,
                }}
              />
              Задати питання
            </A> */}
            {/* {isLoggedInUser && <p style={{ padding: '0px', margin: '0px' }}>{username}</p>} */}
            {!isLoggedInUser &&
            <Ab to="/auth/register">
              {!isLoggedInUser && <FontAwesomeIcon icon={faUser} style={{ width: 20, height: 20, padding: '0px' }} />}
            </Ab> 
            }
            {isLoggedInUser && <A style={{ padding: '0px', margin: '0px' }} to="/profile">{username}</A>}
          </MenuDiv>
            <Ul>
              <MenuItem>
                <MenuLinkActive to="/" selected={selectedMenu === '/'}>Головна</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/projects" selected={selectedMenu === '/projects'}>Продукція</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/services" selected={selectedMenu === '/services'}>Послуги</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/obl" selected={selectedMenu === '/obl'}>Продаж обладнання</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/company" onMouseEnter={handleDropdownToggle} onClick={handleMenuOptionClick} onMouseLeave={handleDropdownClose} selected={selectedMenu === '/company'}>
                  Про нас<FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }} />
                </MenuLinkActive>
                {isDropdownOpen && (
                  <AboutUl onMouseEnter={() => setIsMouseInMenu(true)} onMouseLeave={() => setIsMouseInMenu(false)}>
                    <AboutA to="/company/questions" onClick={handleMenuOptionClick}>Часті питання</AboutA>
                    <AboutA to="/company/vacancies" onClick={handleMenuOptionClick}>Вакансії</AboutA>
                  </AboutUl>
                )}
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/reviews" selected={selectedMenu === '/reviews'}>Відгуки</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/news" selected={selectedMenu === '/news'}>Новини</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/articles" selected={selectedMenu === '/articles'}>Статті</MenuLinkActive>
              </MenuItem>
              <MenuItem>
                <MenuLinkActive to="/contacts" selected={selectedMenu === '/contacts'}>Контакти</MenuLinkActive>
              </MenuItem>
            </Ul>
        </Menu>
      )}
      {isModalOpen && <ModalQuestion closeModal={closeModal} />}
      {isModalTelephoneOpen && <ModalTelephone closeModalTelephone={closeModalTelephone} />}
    </HeaderWrapper>
  );
};

export default Header;
