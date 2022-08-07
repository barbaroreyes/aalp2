import React from 'react';
import Navigation from './Navigation';
import Profile from './Profile';

const Header = () => {
  return (
    <div className="header-container">
       <Profile/>
      <Navigation/>
     
    </div>
  );
}

export default Header;
