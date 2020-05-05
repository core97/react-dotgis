import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { navItems } from './constants';

import linkedinLogo from '../../assets/img/linkedin.png';

import './styles.scss';

const Layout = ({ children }) => {
  const renderNavItem = (route, textContent) => {
    return (
      <li key={uuidv4()}>
        <Link to={route}>{textContent}</Link>
      </li>
    );
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            {navItems.map((item) =>
              renderNavItem(item.route, item.textContent)
            )}
          </ul>
        </nav>
        <a
          href="https://www.linkedin.com/in/juan-cortes-a01043151/?locale=es_ES"
          rel="noopener noreferrer"
          target="_blank"
          className="link-linkedin"
        >
          <img src={linkedinLogo} alt="enlace perfil linkedin" />
        </a>
      </header>
      <article>{children}</article>
      <footer>
        <p>© Copyright Juan Cortés</p>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
