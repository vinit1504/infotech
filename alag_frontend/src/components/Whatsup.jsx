/* eslint-disable no-unused-vars */
import React from 'react';
import whatsappLogo from '../assets/technology-icon/download12.jpg'
import './whatsup.css'; // Assuming you have your CSS in this file
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number

  return (
    <Link
      to={`https://wa.me/${8160356835}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappLogo} alt="WhatsApp" />
    </Link>
  );
};

export default WhatsAppButton;
