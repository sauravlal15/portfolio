import { CardMedia } from "@material-ui/core";
import React from "react";
import Robo__img from "../../assets/robo__game.png";
import Face__img from "../../assets/face__marker.png";
import Receipe__img from "../../assets/receipeatdoor.png";
import Prime__img from "../../assets/prime__trailor.png";
import Path__img from "../../assets/path__expert.png";

import CallMadeIcon from "@material-ui/icons/CallMade";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent Works</span>
        <div className="portfolio__container container">
          <div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Receipe__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Apna Dhaba</h3>
                <p className="portfolio__description">
                  A website for buying Foods, Used Paytm Payment gateway to
                  simplify payment and implement full Admin functionality.
                  Building Restful CRUD APIs with Node.js, Express.js and
                  MongoDB for creating, editing, and deleting products.
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" className="button__icon" />
                </a>
              </div>
            </div>

            <div className="portfolio__content grid">
              <CardMedia
                image={Prime__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Prime Movie Trailor</h3>
                <p className="portfolio__description">
                  These is a movie trailor applications fetches data from
                  moviedb API, try to give good interface and design, it shows
                  trailor of every movies.
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Face__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">FaceMarker</h3>
                <p className="portfolio__description">
                  These is Face-Marker Application, full-stack application which
                  detects face of human in any image, and gives score to user.
                  User have to Signin/Register, and gives proper image link. It
                  uses Clarifai API for detecting human face image
                </p>
                <a
                  href="https://face-marker.herokuapp.com/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Path__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Pathfinder</h3>
                <p className="portfolio__description">
                  Web applications for visualizing the shortest path between two
                  points. Used Breadth-first-search & Depth-first-search
                  algorithms for finding path.
                </p>
                <a
                  href="https://pathexpert.netlify.app/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo
                  <CallMadeIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="portfolio__content grid">
              <CardMedia
                image={Robo__img}
                title="project__image"
                className="portfolio__image"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Robo Game</h3>
                <p className="portfolio__description">
                  This is Allien Game which takes random allien image with api,
                  frontend applicatons. Everytime it gives new image and we can
                  search it by name. Learned indepth knowledge of API using
                  Axios, package for fetching API.
                </p>
                <a
                  href="#"
                  target="_blank"
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
