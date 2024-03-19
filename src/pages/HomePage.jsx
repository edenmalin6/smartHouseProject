import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storageService } from '../services/storageService'


const HomePage = () => {
  const [rooms, setRooms] = useState(storageService.getRooms())
  const navigate = useNavigate()
  
  const updatedPage = () =>{
    setRooms(storageService.getRooms())
  }
  // is there a point using useEffect here?

  // useEffect(()=>{
  //   const fetchedRooms = storageService.getRooms()
  //   setRooms(fetchedRooms)
  // },[])
  const renderRooms = () => {
    return rooms.map((room, index)=>(
      <div key={index} style={{ backgroundColor: room.color }}>
        <h1>{room.name}</h1>
      </div>
    ))   
  }
  return (
    <div className='home-page'>
      <h1>Welcome Back To Your Smart House!</h1>
      <button onClick={()=> navigate("/add-room")}>+</button>
      {renderRooms()}
    </div>
  )
}

export default HomePage