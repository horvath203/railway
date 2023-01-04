import shoppingCart from '../images/shopping_cart_black_24dp 1.png';
import React, { useState } from 'react';
import Logo from '../images/Logo-header.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const HeaderMainPage = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState(false);
  const showDropdown = () => {
    setstate(true);
  };
  const hideDropdown = () => {
    setstate(false);
  };

  return (
    <header className="App-header">
      <div className="HeaderMainPage">
        <Button onClick={() => navigate('/railway/')}>
          <img className="App-logo" src={Logo} alt="Logo" />
        </Button>

        <div className="MenuBar">
          <ul>
            <li>
              {' '}
              <a href="#">Ticket Purchase ▼</a>
              <div className="SubMenu-1">
                <ul className="MenuList">
                  <li className="Link">
                    <a href="">Purchase of one-way travel ticket</a>
                  </li>
                  <li className="Link">
                    <a href="">Cancellation online</a>
                  </li>
                  <li className="Link">
                    <a href="">Conditions of payments</a>
                  </li>
                  <li className="Link">
                    <a href="">Purchase of season ticket - Tatry</a>
                  </li>
                  <li className="Link">
                    <a href="">Online sale terms and conditions </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>Timetable</li>
            <li>Tickets and Offers </li>
            <li>
              {' '}
              <a href="#">Service ▼</a>
              <div className="SubMenu-1">
                <ul className="MenuList">
                  <li className="Link">
                    <a href="">Purchase of one-way travel ticket</a>
                  </li>
                  <li className="Link">
                    <a href="">Cancellation online</a>
                  </li>
                  <li className="Link">
                    <a href="">Conditions of payments</a>
                  </li>
                  <li className="Link">
                    <a href="">Online sale terms and conditions </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>Career</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="HeaderContainer">
          <span className="LanguageChange"> SK/EN </span>
          <div className="IconLayout">
            <img className="CartIcon" src={shoppingCart} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
