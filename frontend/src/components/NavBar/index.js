import React from 'react';
import './index.css';
import { Navbar } from 'react-bootstrap';
import logo from './assets/circle.svg';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="displayNav" href="#home">
          <img
            alt=""
            src={logo}
            width="100"
            height="60"
            className="d-inline-block align-top"
          />
          <div className="textNav">
            JSON
            <span className="text2">2</span>
            CSV
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
