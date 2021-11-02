import { Button } from "@material-ui/core";
import React from "react";

const Card = ({ portfolio }) => {
  return (
    <div className="news-card">
      <a href={portfolio.link} target="_blank" className="news-card__card-link"></a>
      <img src={portfolio.image} alt="" className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">{portfolio.title}</h2>
        <div className="news-card__post-name">{portfolio.post}</div>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">Go and Check&hellip;</p>
          <a
            href={portfolio.link}
            target="_blank"
            className="news-card__read-more"
          >
            CheckNow <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
