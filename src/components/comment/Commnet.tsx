import React from 'react';

interface Props {
  image: string;
  username: string;
}

function Comment({ image, username }: Props) {
  return (
    <div className="row">
      <div className="comment">
        <figure className="comment__shape">
          <img src={image} alt="something" className="comment__img" />
          <figcaption className="comment__caption">{username}</figcaption>
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
