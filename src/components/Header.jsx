import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav id="navbar" className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          Home
        </Link>
        <Link id="header" className="about item" to="/About">
          About
        </Link>
        </div>
    </nav>
  )
}

export default Header