import { storageService } from "./storageService";

const getRoom = (roomName) => {
  const roomsList = storageService.getRooms();
  return roomsList.find((room) => room.name === roomName);
};

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

  //check if stereo system already exist in the room
  if (
    deviceType === "stereo system" &&
    room.find((device) => device.type === deviceType)
  )
    throw Error("There can be only one stereo system at room. ");

  //allow water heater only in bathroom
  if (deviceType === "water heater" && room.type !== "bathroom")
    throw Error("You can place a water heater inside bathroom only.");

  //check devices length in each room, make sure its smaller than 5
  if (room.devices.length === 5)
    throw Error("You can place only 5 devices in each room.");

  const newDevice = {
    deviceType,
    enabled: false,
  };

  room.devices.push(newDevice);
  roomsList = storageService.getRooms();
  const roomIndex = roomsList.findIndex(
    (findRoom) => findRoom.name === roomName
  );
  roomsList[roomIndex] = room;

  storageService.setRooms(roomsList);
};

