import React from "react";
import "./MovieCard.css"
import imdb from "../../assets/imdb.png"
import rotten from "../../assets/rotten.png"

const MovieCard = ({movies}) => {


  return (
    <>
      <div className="movie_card" data-testid="movie-card">
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" data-testid= "movie-poster"/>
          <div className="ratings">
            <p>{movies.media_type}</p>
            <div className="favourites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g filter="url(#filter0_b_22570_79)">
                  <ellipse
                    cx="15"
                    cy="15.1842"
                    rx="15"
                    ry="14.6053"
                    fill="#F3F4F6"
                    fillOpacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_22570_79"
                    x="-2"
                    y="-1.42105"
                    width="34"
                    height="33.2105"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_22570_79"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_22570_79"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                  fill="#D1D5DB"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="text">
          <span className="current" data-testid="movie-release-date">{movies.release_date}</span>
          <h2 data-testid="movie-title">{movies.title || movies.name}</h2>
          <div className="imdb_rating_container">
            <div className="imdb_rating">
              <img src={imdb} alt="" />
              <span>{movies.vote_average * 10} / 100</span>
            </div>
            <div className="rotten_tomatoes">
              <span>07%</span>
              <img src={rotten} alt="" />
            </div>
          </div>
          <span className="genre">Action, Adventure, Horror</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
