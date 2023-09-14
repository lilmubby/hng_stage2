import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className='socials'>
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
      <div className="terms">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className='copyright'>
        © 2021 MovieBox by Adriana Eka Prayudha  
      </p>
    </footer>
  )
}

export default Footer