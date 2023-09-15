import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import star from "../../assets/star.png";
import bookmark from "../../assets/bookmark.png";
import share from "../../assets/share.png";
import heart from "../../assets/heart.png";
import tickets from "../../assets/tickets.png";
import list from "../../assets/list.png";
import arrow from "../../assets/arrow.png";
import randoms from "../../assets/randoms.png";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDBkMzYxOWYxMzBmMjM2NTgzYmZiYjc0NDZlYzVjZiIsInN1YiI6IjY0ZmVkYzZjZTBjYTdmMDBjYmU5ZTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WAmKdwHOzmYAhlZ_Fe741C2cHvhKfFX0uoYJ3sHxGnM'
        }
      };
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const responseData = await response.json()
        // const resultDisplay = responseData.results.slice(0,10);
        // const movie = resultDisplay.find((result) => result.id === id);
        const test = responseData.results.map((i) => i.id)
        console.log(test[0] === id);
        // setMovieDetail(movie)
      } catch (error) {
        error => console.error(error);
      }
    }
    fetchData()
  }, []);
  // console.log(movieDetail);

  return (
    <div className="movie_detail">

      <div className="detail_img">
        <img src="" alt="" />
        {/* <img src="" alt="" /> */}
      </div>

      <div className="details_container">
        <div className="movie_details">
          <div className="title">
            <span> Top Gun Maverick</span>
            <span>• 2022</span>
            <span>• PG-13</span>
            <span>• 2h 13 mins</span>
          </div>
          <div className="genre">
            <span className="action">action</span>
            <span className="drama">drama</span>
          </div>
        </div>
        <div className="movie_overview">
          After thirty years, Maverick is still pushing the envelope as a top
          naval aviator, but must confront ghosts of his past when he leads TOP
          GUN's elite graduates on a mission that demands the ultimate sacrifice
          from those chosen to fly it.
        </div>
      </div>

      <div className="detial_rating">
        <div className="star">
          <img src={heart} alt="" />
          <img src={share} alt="" />
          <img src={bookmark} alt="" />
          <img src={star} alt="" />
          <span>8.5 | 350k</span>
        </div>
        <div>
          <button className="showtimes">
            <img src={tickets} alt="" />
            See Showtimes
          </button>
          <button className="options">
            <img src={list} alt="" />
            More watch options
          </button>
        </div>
      </div>

      <div className="crew">
        <span className="director">Directors: </span>
        <span className="writer">Writer: </span>
        <span className="stars">Stars: </span>
      </div>

      <div className="extras">
        <div className="top_rated">
          Top Rated #65
        </div>
        <div className="nominations">
          <span className="award_nomini"></span>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="randoms">
        <img src={randoms} alt="" />
      </div>

    </div>
  );
};

export default MovieDetail;
