import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {EditRoom} from "../components/EditRoom"


const HomePage = () => {
  const [rooms, setRooms] = useState(null)
  const navigate = useNavigate()

  
  return (
    <div className='home-page'>
      <h1>Welcome Back To Your Smart House!</h1>
      <button onClick={()=> navigate("/add-room")}>+</button>
      <EditRoom />
    </div>
  )
}

export default HomePage