import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <React.Fragment>
  <header className="Navigation">
    <NavLink to="/" className="link">Gallery</NavLink>
  </header>
  <div>
  <NavLink to="/upload" className="links custom-btn">
    <button className="ico-btn">Upload</button>
  </NavLink>
  </div>
  
</React.Fragment>
);

export default Header;
