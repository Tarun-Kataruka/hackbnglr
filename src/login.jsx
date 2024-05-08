import React, { useState } from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import firebase from './firebase-confi/firebase'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async(e) =>{
    e.preventDefault();
    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      if(user)
        {
          alert("Login successfully")
        }
    
    }
    catch(error){
      alert(error);
    }
  }

  return (
    <>
    <div className='main-container-signup'>
        <div className='header'>
            <h2>signup</h2>
        </div>
        <div className='box'>
            <input type='email' value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
            <input type='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p>Don't Have an Account  <Link to = "/signUp">Create Account</Link></p>
        <button onClick={submit} >Login</button>
    </div>

    </>
  )
}

export default Login