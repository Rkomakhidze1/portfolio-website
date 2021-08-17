import React from 'react';
import logo from '../../assets/logo-white.png';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="/#" className="btn btn--white">
            discover our tours
          </a>
        </div>
        <div style={{ width: 200 }} className="test"></div>
      </header>
    </>
  );
}

export default Header;
