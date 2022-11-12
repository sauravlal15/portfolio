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
              I'm in my final year undergrad. pursuing my Bachelor's degree in
              Electronics And Communications Engineering from Jalpaiguri
              Government Engineering College, I'm a technology enthusiast and
              keep my hands dirty on various technologies, aiming at building
              some technological and valuable solutions to improve the quality
              of human life. I'm keen to stay updated with the latest
              technological trends and brush up on my skills accordingly. Apart
              from this, I love to participate in various competitions/
              hackathons, my aim is to help people and encourage them towards
              tech.
            </p>
            <div className="about__buttons">
              <a
                href="#"
                className="button button--flex"
              >
                Open Resume <GetAppIcon className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
