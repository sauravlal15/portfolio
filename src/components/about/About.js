import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import { CardMedia } from "@material-ui/core";
import Portfolio from "../../assets/myprofile.png";

const About = () => {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introductions</span>
        <div className="about__container container grid">
          <CardMedia
            image={Portfolio}
            title="Portfolio"
            className="about__img"
          />
          <div className="about__data">
            <p className="about__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">08+</span>
                <span className="about__info-name">
                  Years <br /> experiences
                </span>
              </div>
              <div>
                <span className="about__info-title">20+</span>
                <span className="about__info-name">
                  Completed <br /> projects
                </span>
              </div>
              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>
            <div className="about__buttons">
              <a
                download=""
                href="../../assets/pdf/SauravLal_SDE_22.pdf"
                className="button button--flex"
              >
                DOWNLOAD CV <GetAppIcon className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
