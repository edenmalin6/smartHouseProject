import UserModel, { RoomModel } from "./Users.js";

//create room
const addRoom = async ({ type, name, color, userId }) => {
  const newRoom = {
    type,
    name,
    color,
    // devices: [],
  };
  //matchingRoomNames
  const userRooms = await RoomModel.find({ userId });
  const isRoomNameUnique = !userRooms.includes((room) => room.name === name);
  if (!isRoomNameUnique) {
    throw Error("Room name not unique");
  }
  await RoomModel.create({ type, name, color, userId });
};
//update room
//render rooms
//update device?
