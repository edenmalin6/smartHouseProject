import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storageService } from "../services/storageService";
import { useRooms } from "../context/ContextProvider";

const HomePage = () => { 
  const {rooms, setRooms } = useRooms()
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchedRooms = storageService.getRooms()
    setRooms(fetchedRooms)
  },[])

  const renderRooms = () => {
    return rooms.map((room,index) => (
       <div
         className="render-room"
         key={index}
         style={{ backgroundColor: room.color }}
       ><Link to={`/room/${room.name}`}>
         <h1>{room.name}</h1>
         </Link>
       </div>
     ));
     }
  
  return (
    <div className="home-page">
      <h1>Welcome Back To Your Smart House!</h1>
      <button className="add-room-btn" onClick={() => navigate("/add-room")}>
        +
      </button>
      {/* {rooms && <div>{renderRooms()}</div>} */} 
      <div>{renderRooms()}</div>
    </div>
  );
};

export default HomePage;
