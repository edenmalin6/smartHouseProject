import React, { useState } from "react";
import { EditDevice } from "../components/EditDevice";
import { getRoom } from "../services/roomService";
import { useParams } from "react-router-dom";


const RoomPage = () => {
  const [openEditDevice, setOpenEditDevice] = useState(false);
  const { roomName } = useParams();
  getRoom(roomName);

  const editDeviceBtn = (e) => {
    e.preventDefault();
    //get the room type ?
    setOpenEditDevice(true);
  };

  return (openEditDevice ? (
    <div className="edit-device-container">
      <EditDevice roomName={roomName} setOpenEditDevice={setOpenEditDevice} />
    </div>
  ) : (
    <div className="room-page">
      <h1>Smart House</h1>
      <div className="my-room">
        <span>Room Name: {roomName} </span>
        <span>Room Type: {getRoom(roomName).type} </span>
        <button
          className="add-device-btn"
          onClick={(e) => editDeviceBtn(e, getRoom(roomName).type)}
        >
          Add Device
        </button>
      </div>
    </div>
  ));
};

export default RoomPage;
