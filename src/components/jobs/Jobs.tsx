import React from 'react';
import Card from '../card/Card';

function Jobs() {
  return (
    <section className="section-jobs">
      <div className="row">
        <div className="col-1-of-3">
          <Card />
        </div>
        <div className="col-1-of-3">
          <Card />
        </div>
        <div className="col-1-of-3">
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Jobs;
