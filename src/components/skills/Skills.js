import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container">
          <div className="skills__content">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">C++/C</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__c"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills_number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Python</h3>
                <span className="skills_number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__python"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">ReactJs</h3>
                <span className="skills_number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Node.js</h3>
                <span className="skills_number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__node"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Express.js</h3>
                <span className="skills_number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__express"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Html/Css</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">MongoDb</h3>
                <span className="skills_number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__mongo"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Firebase</h3>
                <span className="skills_number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__firebase"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">MySql</h3>
                <span className="skills_number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__mysql"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

/*

<div>
            <div className="skills__content">
              <div className="skills__header">
                <CodeIcon className="skills__icon" />
                <div>
                  <h1 className="skills__title">Frontend Developer</h1>
                  <span className="skills__subtitle">
                    1+ years of experiences
                  </span>
                </div>
                <ExpandMoreIcon className="skills__arrow" />
              </div>
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__content">
              <div className="skills__header">
                <CodeIcon className="skills__icon" />
                <div>
                  <h1 className="skills__title">Backend Developer</h1>
                  <span className="skills__subtitle">
                    1+ years of experiences
                  </span>
                </div>
                <ExpandMoreIcon className="skills__arrow" />
              </div>
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills_number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

*/
