import { CardMedia } from "@material-ui/core";
import React from "react";
import Portfolio__img from "../../assets/mynewprofile.jpg";
import CallMadeIcon from "@material-ui/icons/CallMade";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio section">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent Works</span>
        <div className="portfolio__container container">
          <div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Portfolio__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Website Design</h3>
                <p className="portfolio__description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" className="button__icon" />
                </a>
              </div>
            </div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Portfolio__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Website Design</h3>
                <p className="portfolio__description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Portfolio__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Website Design</h3>
                <p className="portfolio__description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
