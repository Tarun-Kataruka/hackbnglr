import React from 'react'
import './index.css'

const Navbar = () => {
  return (

    <nav className='navbar'>
        <h1 className='app-name'>
            WEB APP NAME
        </h1>
        <ul className='nav-list'>
            <li className='tabs'><a href="/">Home</a></li>
            <li className='tabs' ><a href="/about">About Us</a></li>
            <li className='tabs' ><a href="/contact">Contact Us</a></li>
            <li className='tabs' ><a href="/signUp">Sign In</a></li>
        </ul>
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