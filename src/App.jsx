import React from 'react'
import firebase from 'firebase/compat/app'
import {BrowserRouter} from 'react-router-dom'
import Rout from './rout'
import Navbar from './navbar'
import './index.css'
import ProductCard from './productcard'

const App = () => {
  
      return(
        <>
        
        <BrowserRouter>
        
        <Navbar />
        
        
        <Rout />
        </BrowserRouter>
        
        </>
      )
  }
  
export default App