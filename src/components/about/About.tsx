import React, { useEffect, useRef } from 'react';
import image from '../../assets/nat-9.jpg';
import { Events } from '../../events/events';
import { ScrollToJobs } from '../../events/scrollToJobs';

function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener(Events.ScrollToAbout, () => {
      if (!aboutRef.current) return;
      window.scrollTo({
        top: aboutRef.current.offsetTop - 40,
        behavior: 'smooth',
      });
    });
  }, []);

  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" ref={aboutRef}>
          {process.env.REACT_APP_ABOUT_HEADING}
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">About me</h3>
          <p className="paragraph">{process.env.REACT_APP_ABOUT_ABOUTME}</p>
          <ul style={{ margin: '-2rem 0 2rem' }}>
            <li className="paragraph" style={{ margin: 0 }}>
              GITHUB:
              <a
                href="https://github.com/Rkomakhidze1?tab=repositories"
                style={{ marginLeft: '21px' }}
              >
                www.github.com/Rkomakhidze1
              </a>
            </li>
            <li className="paragraph" style={{ margin: 0 }}>
              EMAIL:
              <span style={{ marginLeft: '33px' }}>
                rezokomakhidze1@gmail.com
              </span>
            </li>
            <li className="paragraph" style={{ margin: 0 }}>
              LINKEDIN:
              <a
                href="https://www.linkedin.com/in/rezo-komakhidze-9a9962208/"
                style={{ marginLeft: '7px' }}
              >
                www.linkedin.com/rezo-komakhidze
              </a>
            </li>
            <li className="paragraph" style={{ marginBottom: '2rem' }}>
              PHONE: <span style={{ marginLeft: '21px' }}>+995 599441919</span>
            </li>
          </ul>
        </div>
        <div className="col-1-of-2">
          <img
            style={{
              backgroundSize: 'cover',
              maxWidth: '83%',
              marginTop: '5px',
              borderRadius: '3px',
            }}
            src={image}
            alt="prifle"
          />
        </div>
      </div>

      <div style={{ maxWidth: '114rem', margin: '-8rem auto 0' }}>
        <h3 className="heading-tertiary u-margin-bottom-small">Experience</h3>
        <p className="paragraph" style={{ marginBottom: '1rem' }}>
          {process.env.REACT_APP_ABOUT_EXPERIENCE}
        </p>
        <p className="paragraph">
          currently preferred tech stack: nodejs + typescript, react +
          typescript + redux, graphql, postgresql.
        </p>
        <button
          className="btn-text"
          onClick={() => document.dispatchEvent(new ScrollToJobs())}
        >
          Learn more
        </button>
      </div>
    </section>
  );
}

export default About;
