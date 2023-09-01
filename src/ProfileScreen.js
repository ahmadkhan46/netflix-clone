import React from 'react'
import './ProfileScreen.css'
import Navbar from './Navbar'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function ProfileScreen() {
  const [{user},dispatch]=useStateValue()
  // useEffect(()=>{
  //  if(user){
  //   db.collection('users')
  //   .doc(user?.uid)
  //  }
  // },[user])
  return (
    <div className='profileScreen'>
        <Navbar/>
        <div className='profile_body'>
            <h1>Edit Profile</h1>
            <div className='profile_info'>
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt=""
                />
                <div className='profile_details'>
                  <h2>{user?.email}</h2>
                  <div className='profile_plans'>
                    <h3>Plans(Current Plan :Premium)</h3>
                    <button
                      className='profile_SignOut'
                      onClick={()=> auth.signOut()}
                    >Sign Out
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen