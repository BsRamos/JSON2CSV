import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import './index.css';

function Header({ message, callbackParent }) {
  return (
    <>
      <button type="button" className="btnBack" onClick={callbackParent}>
        <FiArrowLeft size={60} />
      </button>
      <p className="textTable">{message}</p>
    </>
  );
}

export default Header;
