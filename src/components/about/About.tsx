import React from 'react';
import image from '../../assets/nat-9.jpg';

function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">self taugth software engineer</h2>
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
          <a className="btn-text" href="#">
            Learn more
          </a>
        </div>
        <div className="col-1-of-2">
          <img
            style={{ backgroundSize: 'cover', width: '500px' }}
            src={image}
            alt="prifle"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
