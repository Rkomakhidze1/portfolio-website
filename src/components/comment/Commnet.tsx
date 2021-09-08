import React from 'react';
import image from '../../assets/nat-9.jpg';

function Comment() {
  return (
    <div className="row">
      <div className="comment">
        <figure className="comment__shape">
          <img src={image} alt="something" className="comment__img" />
          <figcaption className="comment__caption">
            otari farcxaladze
          </figcaption>
        </figure>
        <div className="comment__text">
          <h3 className="heading-tertiary">recomendation heading</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            distinctio ipsum dolor dicta debitis culpa, consequatur deleniti
            reprehenderit impedit libero quo fugit iure, quisquam quae
            recusandae animi corporis vel. Maxime!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
