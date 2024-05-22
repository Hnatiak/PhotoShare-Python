import React from "react";
// import { Link } from 'react-router-dom';
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import TitleSection from "../../components/TitleSection/TitleSection";
import ContactsThings from "./ContactsThings/ContactsThings";

const Contacts = () => {
  return (
    <div>
      <TitleSection title="Контакти" />
      <GoogleMaps />
      <ContactsThings />
      {/* Додайте вміст вашої сторінки Продуктів */}
    </div>
  );
};

export default Contacts;
