import React, { useState } from "react";
import Select from "react-select";
import { addDevice, getRoom } from "../services/roomService";

export const EditDevice = ({ roomName, setOpenEditDevice, setDevices }) => {
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
      addDevice({ roomName, deviceType: selectedOption }); 
    } catch (error) {
      alert(error.message);
    }
    setDevices(getRoom(roomName).devices)
    handleCancel();
  };
  const handleCancel = () => {
    setOpenEditDevice(null);
  };

  return (
    <div className="edit-device-container">
      <form onSubmit={handleSave}>
        <Select
          options={options}
          onChange={handleSelect}
          className="custom-select"
        />
        <button className="edit-btn">Save</button>
        <button className="edit-btn" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};
