import React from 'react'
import Logo from './Headers/Logo'
import SearchField from './Headers/SearchField'
import Navigation from './Headers/Navigation'
import "./Header.css"
import SuggestedMovie from './Headers/SuggestedMovie'
import Poster from "../assets/poster.png"

const Header = ({setSearchState}) => {
  return (
    <header className='header' style={{height: "100vh", backgroundImage: `url(${Poster})`}}>
      <div className='pry_header'>
        <Logo />
        <SearchField setSearchState={setSearchState} />
        <Navigation />
      </div>
      <SuggestedMovie />
    </header>
  )
}

export default Header