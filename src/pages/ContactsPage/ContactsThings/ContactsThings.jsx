import React from 'react';
// import { Link } from 'react-router-dom';
import {
    Container, ContainerDivInfo,
} from './ContactsThings.styled'

const ContactsThings = () => {

    const address = '49.75840709791361, 24.147973117401765';
  return (
    <div style={{ padding: '25px' }}>
        <div style={{ marginBottom: '55px' }}>
            <h1>Наші контакти:</h1>
            <h2>Адреса:</h2>
            <a style={{fontSize: '18px'}} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer"
            title='Open Google Maps for this address'>вулиця Львівська, 2а/9, Давидів, Львівська область, Україна, 81151</a>
        </div>
        <Container>
            <ContainerDivInfo>
                <h1>Телефони</h1>
                <p style={{ fontSize: '18px' }}>Телефон:</p>
                <ul style={{ color: "#9AC43C", marginLeft: '40px', listStyle: 'circle', fontSize: '18px'}}>
                    <li style={{ listStyle: 'circle' }}><a href="tel:+380504301696">+38 (050) 430-16-96</a></li>
                    <li style={{ listStyle: 'circle' }}><a href="tel:+380673231734">+38 (067) 323-17-34</a></li>
                </ul>
                <p style={{ fontSize: '18px' }}>Паперові стакани:</p>
                <ul style={{ color: "#9AC43C", marginLeft: '40px', listStyle: 'circle', fontSize: '18px'}}>
                    <li style={{ listStyle: 'circle' }}><a href="tel:+380673231736">+38 (067) 323-17-36</a></li>
                </ul>
            </ContainerDivInfo>
            <ContainerDivInfo>
                <h1>Пошта:</h1>
                <ul style={{ color: "#9AC43C", marginLeft: '40px', fontSize: '18px'}}>
                    <li style={{ listStyle: 'circle' }}><a href="mailto:lata.net.ua@gmail.com">   lata.net.ua@gmail.com</a></li>
                </ul>
            </ContainerDivInfo>
        </Container>
    </div>
  );
};

export default ContactsThings;