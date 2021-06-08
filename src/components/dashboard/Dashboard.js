import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import MouseIcon from "@material-ui/icons/Mouse";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { CardMedia } from "@material-ui/core";
import Portfolio from "../../assets/mynewprofile.jpg";

const Dashboard = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a href="/" target="_blank" className="home__social-icon">
                <LinkedInIcon />
              </a>
              <a href="/" target="_blank" className="home__social-icon">
                <GitHubIcon />
              </a>
              <a href="/" target="_blank" className="home__social-icon">
                <TwitterIcon />
              </a>
            </div>
            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />

                  <image
                    className="home__blob-img"
                    x="12"
                    y="18"
                    src={Portfolio}
                  />
                </g>
              </svg>
            </div>
            <div className="home__data">
              <h1 className="home__title">Hi, I'm Saurav Lal</h1>
              <h3 className="home__subtitle">Developer | Sports Programmer</h3>
              <p className="home__descriptions">
                Developer | Engineer | Coder | Developer | Engineer | Coder |
                Developer | Engineer | Coder
              </p>
              <a href="#contact" className="button button--flex">
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
