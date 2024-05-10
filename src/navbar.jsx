import React, { useState } from 'react'
import './index.css'
import './navbar.css'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm); // handle search query here
  };

  return (

    <nav className='navbar'>
      <div className="navbar-brand">
        <img src="fin.jpg" alt="Product Logo" />
      </div>

        <h1 className='app-name'>
            Product Hunt 
        </h1>
        <form className="search-form">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
        
        <div className='nav-list'>
            <div className='tabs'><a href="/">Home</a></div>
            <div className='tabs' ><a href="/about">About Us</a></div>
            <div className='tabs' ><a href="/contact">Contact Us</a></div>
            <div className='tabs' ><a href="/signUp">Sign In</a></div>
        </div>
        <div className='social-media'>
            <a
              href="https://www.instagram.com/hemamalini_srinivas/"
              target="_blank"
            >
              <img className='media-img'
                src="https://imgs.search.brave.com/y0wg4Bs-IQbhxEnVpX1JdoMX15czTZTBB-fPROkOhCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODg2NGVjNmQyNzgy/OWRiOWNmNmRhNTgu/cG5n"
                alt="instagramlink"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hemamalini-srinivas-191a96256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img className='media-img'
                src="https://imgs.search.brave.com/zwJFq8HZCfdNxCitURQ0hprWpjaaiQs7EpDv7WPysSo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNDkvNDkwNjgu/cG5n"
                alt="linkedinlink"
              />
            </a>
          </div>   
         
    
    </nav>
    
  )
}
export default Navbar