import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { navItems } from './constants';

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
            {navItems.map(item => renderNavItem(item.route, item.textContent))}
          </ul>
        </nav>
      </header>
      <article>{children}</article>
      <footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
