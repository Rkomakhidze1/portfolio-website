import React from 'react';
import Comment from '../comment/Commnet';
// @ts-ignore
import mp4 from '../../assets/book.mp4';
// import webm from '../../assets/video.webm';

function Referrals() {
  return (
    <div className="section-referrals">
      <div className="bg-video">
        <video className="bg-video__content" muted loop autoPlay>
          <source src={mp4} type="video/mp4" />
          {/* <source src={webm} type="video/webm" /> */}
          "Your browser is not supported"
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">recomendations</h2>
      </div>
      <Comment />
      <Comment />
    </div>
  );
}

export default Referrals;
