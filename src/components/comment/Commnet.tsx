import React from 'react';

interface Props {
  image: string;
  commentNumber: string;
}

function Comment({ image, commentNumber }: Props) {
  return (
    <div className="row">
      <div className="comment">
        <figure className="comment__shape">
          <img src={image} alt="something" className="comment__img" />
          <figcaption className="comment__caption">
            {process.env[`REACT_APP_REFERRALS_${commentNumber}_AUTHOR`]}
          </figcaption>
        </figure>
        <div className="comment__text">
          <h3 className="heading-tertiary">
            {process.env[`REACT_APP_REFERRALS_${commentNumber}_HEADING`]}
          </h3>
          <p className="paragraph">
            {process.env[`REACT_APP_REFERRALS_${commentNumber}_BODY`]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
