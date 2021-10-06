import React, { useEffect, useRef } from 'react';
import { Events } from '../../events/events';
import Card from '../card/Card';

function Jobs() {
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener(Events.ScrollToJobs, () => {
      console.log('added event handler');
      if (!jobsRef.current) return;
      window.scrollTo({
        top: jobsRef.current.offsetTop + 40,
        behavior: 'smooth',
      });
    });
    console.log('hereee bros');
    console.log(jobsRef.current?.offsetTop);
  }, []);

  return (
    <section ref={jobsRef} className="section-jobs">
      <div className="u-center-text u-margin-bottom-big">
        <h3 className="heading-secondary">My Work Experience</h3>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <Card
            number={1}
            numberStr="FIRST"
            jobName={process.env.REACT_APP_JOBS_FIRST_HEADING!}
            description={process.env.REACT_APP_JOBS_FIRST_TEXT!}
            url={'https://www.digitalclipboard.com'}
          />
        </div>
        <div className="col-1-of-3">
          <Card
            number={2}
            numberStr="SECOND"
            jobName={process.env.REACT_APP_JOBS_SECOND_HEADING!}
            description={process.env.REACT_APP_JOBS_SECOND_TEXT!}
            url={'https://www.wecraft.ai'}
          />
        </div>
        <div className="col-1-of-3">
          <Card
            number={3}
            numberStr="THIRD"
            jobName={process.env.REACT_APP_JOBS_THIRD_HEADING!}
            description={process.env.REACT_APP_JOBS_THIRD_TEXT!}
            url={'http://despanitech.com/'}
          />
        </div>
      </div>
    </section>
  );
}

export default Jobs;
