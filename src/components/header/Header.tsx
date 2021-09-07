import React from 'react';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Im Revaz</span>
            <span className="heading-primary--sub">fullstack developer</span>
          </h1>
          <a href="/#" className="btn btn--white btn--animated">
            discover more
          </a>
        </div>
        <div style={{ width: 200 }} className="test"></div>
      </header>
    </>
  );
}

export default Header;
