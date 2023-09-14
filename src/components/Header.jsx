import React from 'react'
import Logo from './Headers/Logo'
import SearchField from './Headers/SearchField'
import Navigation from './Headers/Navigation'
import "./Header.css"

const Header = ({movie}) => {
  console.log(movie);
  return (
    <header className='header' style={{height: "80vh"}}>
      <Logo />
      <SearchField />
      <Navigation />
    </header>
  )
}

export default Header