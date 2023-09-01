import React,{useState} from 'react';
import "./SignUpScreen.css";
import {auth} from './firebase.js'
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {  
  // const emailRef =useRef(null)
  // const passwordRef =useRef(null)
  
  // const register=(e)=>{
  //   e.preventDefault()

  //   auth.createUserWithEmailAndPassword(
  //     emailRef.current.value,
  //     passwordRef.current.value
  //   )
  //   .then((authUser) =>{
  //     console.log(Object)
  //   })
  //   .catch((error)=>{
  //     alert(error.message)
  //   })

  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/')
    })
    .catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth)
      if(auth){
        navigate('/')
      }
    }).catch(error=>alert(error.message))
  };

  return (
    <div className='SignUpScreen'>
        <form>
            <h2>Sign In</h2>
            <input
             value={email} 
             type='text' 
             onChange={(e) => setEmail(e.target.value)}
             placeholder='Email or phone number'
             />
            <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='SignUp_now'>New to Netflix? </span>
                <span className='SignUp_link' onClick={register}>Sign Up now</span>
            </h4>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
        </form>

    </div>
  )
}

export default SignUpScreen