import React from 'react';
import { ScrollToAbout } from '../../events/scrollToAbout';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Im Rezo</span>
            <span className="heading-primary--sub">fullstack developer</span>
          </h1>
          <a
            href="/#"
            className="btn btn--white btn--animated"
            onClick={() => document.dispatchEvent(new ScrollToAbout())}
          >
            discover more
          </a>
        </div>
        <div style={{ width: 200 }} className="test"></div>
      </header>
    </>
  );
}

export default Header;
