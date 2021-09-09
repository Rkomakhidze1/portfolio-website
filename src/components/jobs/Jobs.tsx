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
            jobName="Digital Clipboard"
            description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            number={2}
            jobName="WeCraft"
            description="used to demonstrate the visual form of a document or a typeface without"
          />
        </div>
        <div className="col-1-of-3">
          <Card
            number={3}
            jobName="Despani Technologies"
            description="relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
          />
        </div>
      </div>
    </section>
  );
}

export default Jobs;
