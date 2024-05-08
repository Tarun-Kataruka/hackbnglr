import React from 'react'
import {Routes , Route} from 'react-router-dom'
import SignUp from './signUp'
import Login from './login'
import HomePg from './home'
import AboutUs from './about'
import ContactUs from './Contact'
const Rout = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePg />}></Route>
            <Route path="/about" element ={<AboutUs />}></Route>
            <Route path= "/contact" element ={<ContactUs />}></Route>
            <Route path ="/signUp" element ={<SignUp />}></Route>
            <Route path ='/login' element ={<Login />}></Route>
        </Routes>
    </>
    
  )
}

export default Rout