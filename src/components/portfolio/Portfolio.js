import { CardMedia, Container, Grid } from "@material-ui/core";
import React from "react";
import portfolioDetails from "./portfolioDetails";
import Card from "./Card";

import CallMadeIcon from "@material-ui/icons/CallMade";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent Works</span>
        <div className="portfolio__container ">
          <Container >
            <div className="cardGrp__class">
              {portfolioDetails.map((portfolio, index) => {
                return <Card portfolio={portfolio} key={`port-${index}`} />;
              })}
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

