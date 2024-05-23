import { useEffect, useState } from 'react';
import { faCircleQuestion, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalQuestion from './Modal/ModalQuestion';
import ModalTelephone from './ModalTelephone/ModalTelephone';
import {
  HeaderWrapper,
  Menu,
  A,
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
  // eslint-disable-next-line
  const [selectedMenu, setSelectedMenu] = useState('/');
  const location = useLocation();
  // eslint-disable-next-line
  const [isMouseInMenu, setIsMouseInMenu] = useState(false);
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalTelephoneOpen, setIsModalTelephoneOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSelectedMenu(location.pathname);
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            {isLoggedInUser && <A style={{ padding: '0px', margin: '0px' }} to="/user/updateUser">{username}</A>}
          </MenuDiv>
        </Menu>
      )}
      {isModalOpen && <ModalQuestion closeModal={closeModal} />}
      {isModalTelephoneOpen && <ModalTelephone closeModalTelephone={closeModalTelephone} />}
    </HeaderWrapper>
  );
};

export default Header;