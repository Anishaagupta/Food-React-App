import React from 'react';
import Logo from '../Logo/Index';
import './style.scss';
import '../../FontAwesomeIcons/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='first-div'>
        <div className='logo'>
          <Logo image='../../assets/dineoutImages/g.png' />
        </div>
        <div className='social-icons'>
          <ul className='icon-ul'>
            <li className='icon-li'> {<FontAwesomeIcon icon='facebook' />}</li>
            <li className='icon-li'>{<FontAwesomeIcon icon='instagram' />}</li>
            <li className='icon-li'>{<FontAwesomeIcon icon='linkedin' />}</li>
            <li className='icon-li'>{<FontAwesomeIcon icon='youtube' />}</li>
          </ul>
        </div>
      </div>
      <div className='second-div'>
        <div className='pages-name'></div>
        <div className='search-icon'></div>
      </div>
    </div>
  );
};

export default Navbar;
