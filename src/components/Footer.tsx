import React from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import Logo from '../images/logo.svg';
import AppStore from '../images/app-store.svg';
import AppGallery from '../images/appgallery-logo-sk.svg';
import GooglePlay from '../images/google-play.svg';
import QrCode from '../images/qr-code.svg';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="upper_container">
          <div className="footer-col">
            <img className="img-logo" src={Logo} alt="" />
          </div>
          <div className="footer-col">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">International tickets</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </div>
          <div className="footer-col">
            <li>
              <a href="#">Strategy and vision</a>
            </li>
            <li>
              <a href="#">Integrated Transportation Systems</a>
            </li>
          </div>
          <div className="footer-RSS">
            <li>
              <RssFeedIcon />
              <a href="#">RSS</a>
            </li>
          </div>
        </div>
        <hr className="Line"></hr>
        <div className="lower_container">
          <div className="footer-col">
            <div className="Socialmedia">
              <ul>
                <a>
                  <h4>Social Media:</h4>
                </a>
              </ul>
              <ul>
                <li>
                  <FaFacebook />
                  <a href="#"> Facebook</a>
                </li>
                <li>
                  <FaLinkedin />
                  <a href="#"> Linkedin</a>
                </li>
                <li>
                  <FaTwitter />
                  <a href="#"> Twitter</a>
                </li>
                <li>
                  <FaInstagram />
                  <a href="#"> Instagram</a>
                </li>
                <li>
                  <FaYoutube />
                  <a href="#"> Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <ul>
              <h4>Email:</h4>
              <li className="phone">
                <EmailIcon className="icons" width="19" height="19" />
                <a href="#">Info@slovakrail.sk</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact center</h4>
            <li>
              <a href="#">Slovakia</a>
            </li>
            <div className="phone">
              <LocalPhoneIcon className="icons" width="20" height="20" />
              <a href="#">18 1888</a>
            </div>
            <li>
              <a href="#">From abroad</a>
            </li>
            <div className="phone">
              <PhoneCallbackIcon className="icons" width="20" height="20" />
              <a href="#">+421 24 48 58 188</a>
            </div>
          </div>
          <div className="footer-col">
            <ul>
              <h4>Mobile app</h4>
              <img className="App-mobile" src={QrCode} alt="" />
              <div className="QR-CODES">
                <img src={GooglePlay} alt="" />
                <img src={AppStore} alt="" />
                <img src={AppGallery} alt="" />
              </div>
            </ul>
          </div>
        </div>
        <hr className="Last_line"></hr>
        <div>
          <div className="Authors_info">
            © The Earths webbest developers 2022
            <div className="Up_to_start">
              <a href="#" title="hore">
                Up
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
