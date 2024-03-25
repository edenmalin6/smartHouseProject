import React, { useEffect, useState } from "react";
import { EditDevice } from "../components/EditDevice";
import { getRoom, toggleDevice, enableDevice } from "../services/roomService";
import { useParams } from "react-router-dom";


const RoomPage = () => {
  const [openEditDevice, setOpenEditDevice] = useState(null);
  const { roomName } = useParams();
  const [devices, setDevices] = useState([]);
  

  useEffect(()=>{
    const fetchedDevices = getRoom(roomName).devices
    setDevices(fetchedDevices)
   
  },[])  

  useEffect(()=>{
    enableDevice({roomName})
  },[])
  
  const editDeviceBtn = (e, roomType) => {
    e.preventDefault();
    setOpenEditDevice(roomType);
  };


  const renderDevices = () => {
    return devices.map((device, index) => {
      const backgroundColor = device.enabled ? "green" : "red"
      const handleToggle = () => {
        toggleDevice({roomName, id: device.id})
       
          setDevices(getRoom(roomName).devices)  
        
      }
      return (
        <div className="render-device" key={index} onClick={handleToggle} style={{backgroundColor}}>
          {device.type}
        </div>
      );
    });
  };
  return (
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
        {openEditDevice && (
          <EditDevice
            roomName={roomName}
            setOpenEditDevice={setOpenEditDevice}
            setDevices={setDevices}
          />
        )}
         {devices && <div className="render-device-container">{renderDevices()}</div>}
      </div>
    </div>
  );
};

export default RoomPage;
