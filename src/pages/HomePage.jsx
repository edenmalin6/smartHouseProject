import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { storageService } from '../services/storageService'
import { UpdateHomePage } from '../components/UpdateHomePage'

const HomePage = () => {
  const navigate = useNavigate()
  
  return (
    <div className='home-page'>
      <h1>Welcome Back To Your Smart House!</h1>
      <button onClick={()=> navigate("/add-room")}>+</button>
      {/* <UpdateHomePage setRooms={setRooms}/> */}
    </div>
  )
}

export default HomePage