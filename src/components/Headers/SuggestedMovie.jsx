import React from 'react'
import Play from "../../assets/Play.png"
import imdb from "../../assets/imdb.png"
import rotten from "../../assets/rotten.png"
import "./SuggestedMovie.css"

const SuggestedMovie = ({}) => {

  return (
    <div className="suggested">
      <h2 className="suggested_title">John Wick 3 : Parabellum</h2>
      <div className="suggested_rating">
        <div className="suggested_imdb_rating">
          <img src={imdb} alt="" />
          <span>86.0 / 100</span>
        </div>
        <div className="suggested_rotten_tomatoes">
          <span>97%</span>
          <img src={rotten} alt="" />
        </div>
      </div>
      <p className="suggested_overview">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <button className="suggested_play_btn">
        <img src={Play} alt="" />
        WATCH TRAILER
      </button>
    </div>
  );
}

export default SuggestedMovie