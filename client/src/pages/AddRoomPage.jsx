import React, { useState } from "react";
import Select from "react-select";
import { addRoom } from "../services/roomService";
import { storageService } from "../services/storageService";
import axios from "axios";

const AddRoomPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomColor, setRoomColor] = useState("#7a7a6e");

  const options = [
    { value: "bedroom", label: "Bedroom" },
    { value: "bathroom", label: "Bathroom" },
    { value: "living-room", label: "Living Room" },
    { value: "kitchen", label: "Kitchen" },
  ];
 
  const handleSelect = (option) => {
    setSelectedOption(option.value);
  };
  
  const handleCreateRoom = async (e) => {
    e.preventDefault();
    let response;
    try{
     response = await axios.post("http://localhost:9000/api/room")
      addRoom({ type: selectedOption, name: roomName, color: roomColor });
    }
    catch(error){
      throw alert(error.message)
    }
    console.log(storageService.getRooms());
    setSelectedOption("");
    setRoomName("");
    setRoomColor("#7a7a6e");
  };

  return (
    <div className="add-room-container">
      <h1>Smart House</h1>
      <form className="create-room" onSubmit={handleCreateRoom}>
        <Select
          options={options}
          onChange={handleSelect}
          className="custom-select"
        />
        <input
          type="name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Write room's name here..."
          required="required"
          minLength={1}
          maxLength={9}
        ></input>
        <input
          required
          type="color"
          value={roomColor}
          onChange={(e) => setRoomColor(e.target.value)}
        ></input>
        <button>Create Room</button>
      </form>
    </div>
  );
};

export default AddRoomPage;
