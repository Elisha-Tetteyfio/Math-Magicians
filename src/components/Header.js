import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <div className="heading">
      <div className="title"> Math magicians </div>
      <ul className="links">
        <li>
          <NavLink to="/" exact className="linkItem" activeClassName="orange">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator" className="linkItem" activeClassName="orange">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote" className="linkItem" activeClassName="orange">Quote</NavLink>
        </li>
      </ul>
    </div>
  </>
);

export default Header;
