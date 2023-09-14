import React from 'react'
import logo from "../../assets/tv.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div className='logo_container'>
      <img src={logo} alt="" />
      <p>MovieBox</p>
    </div>
  )
}

export default Logo