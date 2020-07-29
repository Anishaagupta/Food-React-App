import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='foot'>
      <div className='links'>
        <h3 className='link-h3'>Links</h3>
        <div className='link-div1'>
          <ul>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
          </ul>
        </div>
        <div className='link-div2'>
          <ul>
            <li>
              <Link className='foot-li' to='/'>
                #HOME Delhi
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME Mumbai
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME Theatre
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME Dineout
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME Special
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
          </ul>
        </div>
        <div className='link-div3'>
          <ul>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
            <li>
              <Link className='foot-li' className='foot-li' to='/'>
                #HOME
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='last-div'>
        <p className='copy'> &copy; Copyright - Dineout </p>
        <div className='social-ico'>
          <li className='icon-list listtt'>
            {<FontAwesomeIcon icon={faTwitter} />}
          </li>
          <li className='icon-list listff'>
            {<FontAwesomeIcon icon={faFacebook} />}
          </li>
          <li className='icon-list listii'>
            {<FontAwesomeIcon icon={faInstagram} />}
          </li>
          <li className='icon-list listll'>
            {<FontAwesomeIcon icon={faLinkedin} />}
          </li>
          <li className='icon-list listyy'>
            {<FontAwesomeIcon icon={faYoutube} />}
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
