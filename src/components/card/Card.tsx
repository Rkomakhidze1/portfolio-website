import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="card__side card__side--front">card front</div>
      <div className="card__side card__side--back card__side--back-2">
        card back
      </div>
    </div>
  );
}

export default Card;
