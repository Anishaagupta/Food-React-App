import React from 'react';
import Logo from '../Logo/Index';
import './style.scss';
import Header from '../Header/Index';
import logo from '../../assets/dineoutImages/g.png'; //to import an image
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='first-div'>
        <div className='logo'>
          <Logo image={logo} />
        </div>
        <div className='social-icons'>
          <li className='icon-li listt'>
            {<FontAwesomeIcon icon={faTwitter} />}
          </li>
          <li className='icon-li listf'>
            {<FontAwesomeIcon icon={faFacebook} />}
          </li>
          <li className='icon-li listi'>
            {<FontAwesomeIcon icon={faInstagram} />}
          </li>
          <li className='icon-li listl'>
            {<FontAwesomeIcon icon={faLinkedin} />}
          </li>
          <li className='icon-li listy'>
            {<FontAwesomeIcon icon={faYoutube} />}
          </li>
        </div>
      </div>
      <hr className='head-hr' />
      <div className='second-div'>
        <Header />
      </div>
    </div>
  );
};

export default Navbar;
