import React from 'react';

const GoogleMaps = () => {
  const mapStyle = {
    border: '1px',
    width: '100%',
    height: '450px',
  };
  

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1134.930530889351!2d24.147777813993013!3d49.75896588931133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDQ1JzMyLjMiTiAyNMKwMDgnNTQuNCJF!5e1!3m2!1suk!2sfr!4v1691687254225!5m2!1suk!2sfr"
      style={mapStyle}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"></iframe>
    </>
  );
};

export default GoogleMaps;