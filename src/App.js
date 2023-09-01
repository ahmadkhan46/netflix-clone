import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login'
import { useEffect,ReactDOM, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import ProfileScreen from './ProfileScreen';
import firebase from 'firebase/compat/app';

function App() {
  const [{},dispatch]=useStateValue()
  var user = firebase.auth().currentUser;

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
        dispatch({
          type:'SET_USER',
          user:userAuth,
        })
      }else{
        dispatch({
          type:'LOGOUT',
          user:null,
        })
      }
    })
    return unsubscribe
  },[dispatch])
 
  return (
      <div className="App">
      <Router>
          {!user ?(
            <Login/>
            
          ):(
            <Routes>

              <Route
              exact path='/'
              element={<HomeScreen/>}
              />
              <Route
              path='profile'
              element={<ProfileScreen/>}
              />
           </Routes>
          )}
      </Router>
    </div>
    
  );
}

export default App