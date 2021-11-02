import { Grid, Button } from "@material-ui/core";
import React from "react";

const Card = ({ portfolio }) => {
  return (
    <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src={portfolio.image} alt="" class="news-card__image"/>
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">{portfolio.title}</h2>
      <div class="news-card__post-name">{portfolio.post}</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Go and Check&hellip;</p>
        <a href={portfolio.link} target="_blank" class="news-card__read-more">CheckNow <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
  );
};

export default Card;
