import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import "./Movies.css"

const Movies = ({movies, searchState}) => {

  const content = "content"
  console.log(searchState.loading && content);
  const searchResult = movies.filter((movie) => movie.title.toLowerCase().includes(searchState.value))
  console.log(searchResult);
  if (searchState.active) {
    return searchResult.map((movie) => (
      <MovieCard movies={movie} key={movie.id} />
    ))
  }
  return (
    <>
      <h2>Featured Movies</h2>
      <div className='movies'>
        {movies.map((movie) => (
          <MovieCard movies={movie} key={movie.id} />
        ))}
      </div>
    </>
  )
}

export default Movies