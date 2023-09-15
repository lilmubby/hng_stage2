import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Movies from './components/Movie/Movies'
import Header from './components/Header'

function App() {
  const [movies, setMovies] = useState([])
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
        const resultDisplay = responseData.results.slice(0,10);
        setMovies(resultDisplay)
      } catch (error) {
        error => console.error(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header  />
      <Movies movies={movies} />
      <Footer />
    </>
  )
}

export default App
