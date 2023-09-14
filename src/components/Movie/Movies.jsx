import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import "./Movies.css"

const Movies = ({movies}) => {

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