import { NavLink } from 'react-router-dom';
import { faInstagram, faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  Container,
  FooterContainer,
  Menu,
  ContactsLi,
  Title,
  Contacts,
  LinkLi,
  A,
  Icon,
  SideContainer,
  SocialMedia,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Menu>
          <Title>Корисні посилання</Title>
          <ul>
            <LinkLi>
              <NavLink to="/company/">Про нас</NavLink>
            </LinkLi>
            <LinkLi>
              <NavLink to="/services/">Наші послуги</NavLink>
            </LinkLi>
            <LinkLi>
              <NavLink to="/contacts/">Контакти</NavLink>
            </LinkLi>
            <LinkLi>
              <NavLink to="/projects/">Каталог продукції</NavLink>
            </LinkLi>
          </ul>
        </Menu>
        <Menu>
          <Title>Наші переваги</Title>
          <ul>
            <li style={{ padding: '2px 0 2px 0' }}>Якісно</li>
            <li style={{ padding: '2px 0 2px 0' }}>Доступно</li>
            <li style={{ padding: '2px 0 2px 0' }}>Вчасно</li>
            <li style={{ padding: '2px 0 2px 0' }}>Зручно</li>
            <li style={{ padding: '2px 0 2px 0' }}>Надійно</li>
          </ul>
        </Menu>
        <Menu>
          <Title>Про нас</Title>
          <p style={{ color: '#bbb' }}>
            Компанія <b>"ЛАТА ПП"</b> засновано на досвіді повсякденного застосування.
          </p>
        </Menu>
        <Contacts>
          <Title>Зв'яжіться з нами</Title>
          <ul>
            <ContactsLi>
              <a href="tel:+380504301696">+38 (050) 430-16-96</a>
            </ContactsLi>
            <ContactsLi>
              <a href="tel:+380673231734">+38 (067) 323-17-34</a>
            </ContactsLi>
            <ContactsLi>
              <a href="tel:+380673231736">+38 (067) 323-17-36</a>
            </ContactsLi>
            <ContactsLi>
              <a href="mailto:lata.net.ua@gmail.com">lata.net.ua@gmail.com</a>
            </ContactsLi>
          </ul>
        </Contacts>
      </Container>
      <div>
        <SideContainer>
          <A href="https://github.com/Hnatiak" target="_blank" rel="noopener noreferrer" title="Розробка сайту Hnatiak Roman">
            © Розробка сайту Hnatiak Roman
          </A>
          <SocialMedia>
            <a href="https://www.instagram.com/goroscop76859/" target="_blank" rel="noopener noreferrer">
              <Icon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/qJL98ThvtJKBzUN" target="_blank" rel="noopener noreferrer">
              <Icon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/@egsfortgg8849" target="_blank" rel="noopener noreferrer">
              <Icon icon={faYoutube} />
            </a>
            <a href="https://www.facebook.com/romanhnatiak" target="_blank" rel="noopener noreferrer">
              <Icon icon={faFacebook} />
            </a>
          </SocialMedia>
        </SideContainer>
      </div>
    </FooterContainer>
  );
};

export default Footer;
