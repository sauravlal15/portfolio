import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import DateRangeIcon from "@material-ui/icons/DateRange";

const Education = () => {
  return (
    <div>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
          <div className="qualification__button button--flex">
            <div className="qualification__icon">
              <SchoolIcon />
            </div>
            Education
          </div>

          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Electronics And Communication Engineering
                  </h3>
                  <span className="qualification__subtitle">
                    Jalpaiguri Government Engineering College
                    <div className="qualification__calender button--flex">
                      <div className="qualification__icon">
                        <DateRangeIcon />
                      </div>
                      2018-2022
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Higher Secondary</h3>
                  <span className="qualification__subtitle">
                    D.A.V. Public School, E.C.L. Pandaveswar
                    <div className="qualification__calender button--flex">
                      <div className="qualification__icon">
                        <DateRangeIcon />
                      </div>
                      2016-2018
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="qualification__button button--flex">
            <WorkIcon className="qualification__icon" />
            Work
          </div>
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Frontend Developer Intern
                </h3>
                <span className="qualification__subtitle ">
                  Airprobe
                  <div className="qualification__calender button--flex">
                    <div className="qualification__icon">
                      <DateRangeIcon />
                    </div>
                    2021'Jan-2021'May
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
