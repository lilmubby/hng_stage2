import React, {useEffect, useState} from "react";
import { useParams, useLoaderData } from "react-router-dom";
import "./MovieDetail.css"
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
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDBkMzYxOWYxMzBmMjM2NTgzYmZiYjc0NDZlYzVjZiIsInN1YiI6IjY0ZmVkYzZjZTBjYTdmMDBjYmU5ZTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WAmKdwHOzmYAhlZ_Fe741C2cHvhKfFX0uoYJ3sHxGnM'
            },
          }
        );
        const responseData = await response.json();
        setMovieDetail(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieDetails();
  }, [id]);


  console.log(movieDetail);
  const releaseDate = new Date(movieDetail.release_date);
  const hours = Math.floor(movieDetail.runtime / 60);
  const minutes = movieDetail.runtime % 60;
  // const genreNames = movieDetail?.genres.map((genre) => genre.name);
  // console.log(genreNames)

  return (
    <div className="movie_detail">

      <div className="detail_img">
        <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="" />
        {/* <img src="" alt="" /> */}
      </div>

      <div className="details_container">
        
        <div className="movie_details">
          <div className="title" >
            <span data-testid="movie-title"> {movieDetail.title}</span>
            <span data-testid="movie-release-date">• {releaseDate.getUTCFullYear()}</span>
            <span>• {!movieDetail.adult ? "PG-13" : "R-18"}</span>
            <span data-testid="movie-runtime">• {`${hours} h ${minutes} mins`}</span>
          </div>

          <div className="genre">
            <span className="action">action</span>
            <span className="drama">drama</span>
            {/* {genreNames && genreNames.map((names) => <span key={names} className="drama">{names}</span>)} */}
          </div>
        </div>

        <div className="movie_overview" data-testid="movie-overview">
          {movieDetail.overview}
        </div>
      </div>

      <div className="detail_rating">
        <div className="star">
          <img src={heart} alt="" />
          <img src={share} alt="" />
          <img src={bookmark} alt="" />
          <img src={star} alt="" />
          <p>{`${movieDetail.vote_average} | `} <span>{`${Math.ceil(movieDetail.vote_count / 1000)}k`}</span></p>
        </div>
        <div className="btns">
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
        <p className="director">Director : <span> Joseph Kosinski</span></p>
        <p className="writer">Writers :  <span>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
        <p className="stars">Stars : <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
      </div>

      <div className="extras">
        <div className="top_rated">
          Top Rated #65
        </div>
        <div className="nominations">
          <span className="award_nomini">Awards 9 nominations</span>
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
