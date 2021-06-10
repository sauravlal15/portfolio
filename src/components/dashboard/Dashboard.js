import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import MouseIcon from "@material-ui/icons/Mouse";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { CardMedia } from "@material-ui/core";
import Blogging from "../../assets/blogging.png";

const Dashboard = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/saurav-lal-621113174/"
                target="_blank"
                className="home__social-icon"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/saurav-skl"
                target="_blank"
                className="home__social-icon"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://twitter.com/SauravLal9"
                target="_blank"
                className="home__social-icon"
              >
                <TwitterIcon />
              </a>
            </div>
            <div className="home__img">
              <CardMedia
                image={Blogging}
                title="project__image"
                className="home__img"
              />
            </div>
            <div className="home__data">
              <h1 className="home__title">Hi, I'm Saurav Lal</h1>
              <h3 className="home__subtitle">Developer | Sports Programmer</h3>
              <p className="home__descriptions">
                ECE'22 | FullStack-Developer | Competetive Coder
              </p>
              <a
                href="mailto:sauravkumarlal7060@gmail.com?subject=Hey Saurav"
                target="_blank"
                className="button button--flex"
              >
                Contacts me
                <SendIcon className="button__icon" fontSize="small" />
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <MouseIcon className="home__scroll-mouse" />
              <span className="home__scroll-name">Scroll Down</span>
              <ArrowDownwardIcon
                className="home__scroll-arrow"
                fontSize="small"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
