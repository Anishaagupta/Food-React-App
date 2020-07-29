import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.style.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <nav>
      <ul className='navbar'>
        {/*<li className='nav-item'>
          <NavLink to='/dineout' activeClassName='active'>
            Dineout
          </NavLink>
  </li>*/}
        <li className='nav-item'>
          <NavLink className="nav-link" to='/gourmet' activeClassName='active'>
            Gourmet Passport
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to='/topchef' activeClassName='active'>
            Top HomeChef
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to='/cities' activeClassName='active'>
            Dineout Cities
          </NavLink>
        </li>
      </ul>
      <div className='search'> {<FontAwesomeIcon icon={faSearch} />}</div>
    </nav>
  );
}
