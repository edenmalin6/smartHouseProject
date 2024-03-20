import React from "react";
import { getRoom } from "../services/roomService";
import { useParams } from "react-router-dom";
import { storageService } from "../services/storageService";

const RoomPage = () => {
  const { roomName } = useParams();
  getRoom(roomName);
  console.log(getRoom(roomName));
  return (
    <div className="room-page">
      <h1>Smart House</h1>
      <div className="my-room">
      <span>Room Name: {roomName} </span>
      <span>Room Type: {getRoom(roomName).type} </span>
      <button className="add-product"></button>
      </div>
    </div>
  );
};

export default RoomPage;
