import React from 'react';
import Comment from '../comment/Commnet';
// @ts-ignore
import mp4 from '../../assets/book.mp4';
import image1 from '../../assets/nat-9.jpg';

function Referrals() {
  return (
    <div className="section-referrals">
      <div className="bg-video">
        <video className="bg-video__content" muted loop autoPlay>
          <source src={mp4} type="video/mp4" />
          "Your browser is not supported"
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          {process.env.REACT_APP_REFERRALS_HEADING}
        </h2>
      </div>
      <Comment image={image1} commentNumber="FIRST" />
      <Comment image={image1} commentNumber="SECOND" />
    </div>
  );
}

export default Referrals;
