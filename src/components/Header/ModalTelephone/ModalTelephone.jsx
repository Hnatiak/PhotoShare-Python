import React, { useEffect, useState } from 'react';
import { MenuItem, Ul, MenuLinkActive, Menu, Ab, MenuTelephoneContainer } from './ModalTelephone.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import { setName } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';
import { faUser, faCircleXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalTelephone = ({ closeModalTelephone }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('/');
  const location = useLocation();
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  // const username = useSelector(setName);

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log('Logout failed:', error);
    }
  };

  const handleMenuItemClick = () => {
    closeModalTelephone();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'white',
      }}
    >
      <Menu>
        <div style={{ display: 'flex', gap: '15px', color: '#9AC43C', justifyContent: 'space-between', margin: '30px 0px 40px 0px' }}>
          <MenuTelephoneContainer>
          {!isLoggedInUser && (
            <Ab to="/auth/register" onClick={handleMenuItemClick}>
              <FontAwesomeIcon icon={faUser} style={{ width: 20, height: 20 }} />
            </Ab>
          )}
          {isLoggedInUser && (
            <>
              <FontAwesomeIcon icon={faUser} style={{ width: 20, height: 20, marginRight: '15px' }} />
              {/* {isLoggedInUser && <p style={{ marginBottom: 0 }}>{username}</p>} */}
            </>
          )}
          </MenuTelephoneContainer>
          <div style={{ display: 'flex', gap: '25px' }}>
          {isLoggedInUser && (
            <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={() => {handleLogout(); handleMenuItemClick();}} style={{ width: 20, height: 20 }} />
          )}
          <FontAwesomeIcon icon={faCircleXmark} style={{ width: 20, height: 20 }} onClick={closeModalTelephone} />
        </div>
        </div>
          <Ul>
            <MenuItem>
              <MenuLinkActive to="/" selected={selectedMenu === '/'} onClick={handleMenuItemClick}>
                Головна
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/projects" selected={selectedMenu === '/projects'} onClick={handleMenuItemClick}>
                Продукція
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/services" selected={selectedMenu === '/services'} onClick={handleMenuItemClick}>
                Послуги
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/obl" selected={selectedMenu === '/obl'} onClick={handleMenuItemClick}>
                Продаж обладнання
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/company" selected={selectedMenu === '/company'} onClick={handleMenuItemClick}>
                Про нас
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/reviews" selected={selectedMenu === '/reviews'} onClick={handleMenuItemClick}>
                Відгуки
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/news" selected={selectedMenu === '/news'} onClick={handleMenuItemClick}>
                Новини
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/articles" selected={selectedMenu === '/articles'} onClick={handleMenuItemClick}>
                Статті
              </MenuLinkActive>
            </MenuItem>
            <MenuItem>
              <MenuLinkActive to="/contacts" selected={selectedMenu === '/contacts'} onClick={handleMenuItemClick}>
                Контакти
              </MenuLinkActive>
            </MenuItem>
          </Ul>
      </Menu>
    </div>
  );
};

export default ModalTelephone;
