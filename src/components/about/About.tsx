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
          self taugth software engineer
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">About me</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            enim ab exercitationem, eos sequi mollitia eius iste nihil voluptate
            deleniti temporibus maxime cupiditate velit tempore. Iure itaque
            laboriosam illum fugit.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Experince</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores ullam sint possimus maxime eveniet quos quod, cumque
            iste! Iste alias debitis dolor sequi perferendis deleniti iure ad
            soluta adipisci.
          </p>
          <button
            // href="/#"
            className="btn-text"
            onClick={() => document.dispatchEvent(new ScrollToJobs())}
          >
            Learn more
          </button>
        </div>
        <div className="col-1-of-2">
          <img
            style={{
              backgroundSize: 'cover',
              maxWidth: '100%',
              marginTop: '-3rem',
              borderRadius: '3px',
            }}
            src={image}
            alt="prifle"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
