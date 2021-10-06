import React from 'react';

interface Props {
  number: number;
  jobName: string;
  description: string;
  numberStr: string;
  url: string;
}

function Card({ number, jobName, description, numberStr, url }: Props) {
  const list = process.env[`REACT_APP_JOBS_${numberStr}_LIST`]!.split('*');
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={'card__picture card__picture--' + number}></div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {jobName}
          </span>
        </h4>
        <div
          className="card__description-container"
          style={{ padding: '1rem 2rem 0' }}
        >
          <p className="paragraph" style={{ marginBottom: '-1rem' }}>
            {description}
          </p>
          <div className="card__details">
            <ul>
              {list.map((str) => (
                <li>{str}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          'card__side card__side--back u-center-text card__side--back-' + number
        }
      >
        <button
          className="btn btn--white"
          onClick={() => window.open(url, '_blank')}
        >
          Visit website
        </button>
      </div>
    </div>
  );
}

export default Card;
