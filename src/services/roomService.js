import { storageService } from "./storageService";
import { v4 as uuidv4 } from "uuid";

export const getRoom = (roomName) => {
  const roomsList = storageService.getRooms();
  return roomsList.find((room) => room.name === roomName);
};

// export const setRoom = (roomName) => {
//   const room = getRoom(roomName);
//   const roomsList = storageService.getRooms();
//   const roomIndex = roomsList.findIndex(
//     (findRoom) => findRoom.name === roomName
//   );
//    roomsList[roomIndex] = room

//   storageService.setRooms(roomsList);
// }

export const addRoom = ({ type, name, color }) => {
  const newRoom = {
    type,
    name,
    color,
    devices: [],
  };

  const matchingRoomNames = getRoom(name);

  if (matchingRoomNames)
    throw Error(
      "A room with that name already exists.Please choose another name."
    );
  if (!newRoom.name.trim()) throw Error("Please insert valid characters.");
  const roomsList = storageService.getRooms();
  storageService.setRooms([...roomsList, newRoom]);
};

export const addDevice = ({ roomName, deviceType }) => {
  const room = getRoom(roomName);
  console.log(deviceType);
  console.log(room.devices.find((device) => device.type === deviceType));

  //check if stereo system already exist in the room
  if (
    deviceType === "stereo system" &&
    room.devices.find((device) => device.type === deviceType)
  )
    throw Error("There can be only one stereo system in a room. ");

  //allow water heater only in bathroom
  if (deviceType === "water heater" && room.type !== "bathroom")
    throw Error("You can place a water heater inside a bathroom only.");

  //check devices length in each room, make sure its smaller than 5
  if (room.devices.length === 5)
    throw Error("You can place only 5 devices in each room.");

  const newDevice = {
    type: deviceType,
    enabled: false,
    id: uuidv4(),
  };

  room.devices.push(newDevice);

  // setRoom({roomName})
  const roomsList = storageService.getRooms();
  const roomIndex = roomsList.findIndex(
    (findRoom) => findRoom.name === roomName
  );
  roomsList[roomIndex] = room;

  storageService.setRooms(roomsList);
};
export const toggleDevice = ({ roomName, id }) => {
  const room = getRoom(roomName);
  const deviceIndex = room.devices.findIndex((deviceId) => deviceId.id === id);
  // console.log(deviceIndex);
  room.devices[deviceIndex].enabled = !room.devices[deviceIndex].enabled;

  const roomsList = storageService.getRooms();
  const roomIndex = roomsList.findIndex(
    (findRoom) => findRoom.name === roomName
  );
  roomsList[roomIndex] = room;

  storageService.setRooms(roomsList);
};
export const enableDevice = ({ roomName }) => {
  const room = getRoom(roomName);
  room.devices.forEach((device) => device.enabled = false);

  const roomsList = storageService.getRooms();
  const roomIndex = roomsList.findIndex(
    (findRoom) => findRoom.name === roomName
  );
  roomsList[roomIndex] = room;

  storageService.setRooms(roomsList);
};
