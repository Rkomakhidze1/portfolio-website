import React from 'react';
import { ScrollToAbout } from '../../events/scrollToAbout';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              {process.env.REACT_APP_HEADER_MAIN}
            </span>
            <span className="heading-primary--sub">
              {process.env.REACT_APP_HEADER_SECONDARY}
            </span>
          </h1>
          <button
            className="btn btn--white btn--animated"
            onClick={() => document.dispatchEvent(new ScrollToAbout())}
          >
            {process.env.REACT_APP_HEADER_BUTTON}
          </button>
        </div>
        <div style={{ width: 200 }} className="test"></div>
      </header>
    </>
  );
}

export default Header;
