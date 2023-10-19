import React ,{useContext}from 'react'
import UserContext from '../contex/userContex'

function Profile() {

  const {user} = useContext(UserContext)
  if(!user)return  <div>please login</div>
   
  return <div className="">Welcome {user.username}</div>
}

export default Profile
