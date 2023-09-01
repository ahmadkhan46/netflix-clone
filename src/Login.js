import React, { useState } from 'react'
import "./Login.css"
import SignUpScreen from './SignUpScreen';
import { Link } from 'react-router-dom';

function Login() {
const [SignIn,setSignIn]=useState(false);

  return (
    <div className='login'>
        <div className='login_header'>
          <Link to={'/'}>
            <img className="login_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=''
            />
            </Link>
            <button className='login_button'
            onClick={()=> setSignIn(true)}
            >Sign In
            </button>
            <div className='login_gradient'/>
        </div>

        <div className='login_body'>
          {SignIn ?(
          <SignUpScreen/>
          ) :
          (
            <>    
              <h1>Unlimited films,TV progammes and more</h1>
              <p>Watch anywhere. Cancel anytime</p>
              <div className='login_input'>
                <h3>Ready to watch? Enter your email to create or restat your membership</h3>
                <form>
                 <input type='email' placeholder='Email Address'
                  />
                  <button
                  onClick={()=>setSignIn(true)}
                  className='login_getStarted'>GET STARTED
                  </button>
                </form>
              </div>
             </>
          )
          }          
        </div>   
    </div>
  )
}

export default Login