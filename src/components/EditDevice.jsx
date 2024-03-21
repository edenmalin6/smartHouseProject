import React, { useState } from 'react'
import Select from "react-select";
import { addDevice } from '../services/roomService';



export const EditDevice = ({roomName, setOpenEditDevice}) => {
  // const [devices, setDevices] = useState()
  const [selectedOption, setSelectedOption] = useState("");
  
  const options = [
    { value: "ac", label: "Ac" },
    { value: "water heater", label: "Water Heater" },
    { value: "stereo system", label: "Stereo System" },
    { value: "lamp", label: "Lamp" },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    try {
      addDevice({ deviceType: selectedOption, roomName });
    } catch (e) {
      //id rather throw the error type cuz its less annoying
      throw alert(error.message);
    }

    setOpenEditDevice(false);
  };

  return (
    <form onSubmit={handleSave}>
    <Select
      options={options}
      onChange={handleSelect}
      className="custom-select"
    />
    <button>Save</button>
  </form>
  )
}
