import React, { useState } from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import firebase from './firebase-confi/firebase'
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async(e) =>{
    e.preventDefault();
    try{
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      if(user)
        {
          alert("Account Created successfully")
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
            <input type='text' value={name} placeholder="UserName" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='box'>
            <input type='email' value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='box'>
            <input type='password' value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p>Already Have an Account  <Link to = "/login">Login Now</Link></p>
        <button onClick={submit} >SignUp</button>
    </div>

    </>
  )
}

export default SignUp