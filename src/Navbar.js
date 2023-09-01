import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link , useNavigate } from 'react-router-dom';

function Navbar() {
    const [show,handleShow]=useState(false);
    let navigate=useNavigate()
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll",null);
        };
    },[]);
    
  return (
    <div className={`navbar ${show && "nav_black"}`}>
        <img
        onClick={() => navigate('/')}
        className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"/>
        <img
        onClick={() => navigate('profile')}
        className='nav_profile'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='Netflix Profile'/>
    </div>
  )
}

export default Navbar