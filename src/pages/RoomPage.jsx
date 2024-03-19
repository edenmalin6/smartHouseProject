import React from "react";
import { useSearchParams } from "react-router-dom";
import rooms from "../data/rooms";

const RoomPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ name: " " });
  const name = searchParams.get("")
  return (
    <div className="room-page">
      <h1></h1>
      <input
        type="name"
        value={name}
        onChange={(e) => setSearchParams({ name: e.target.value })}
      ></input>
    </div>
  );
};

export default RoomPage;
