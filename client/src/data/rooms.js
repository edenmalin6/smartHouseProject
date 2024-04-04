//  rooms is used as an example
const rooms = [
  {
    userId: "string",
    type: "bedroom",
    name: "",
    color: "",
    devices: [
      {
        id: "111",
        type: "ac",
        enabled: false,
      },
      { type: "lamp", enabled: false },
      {
        type: "stereo system",
        enabled: false,
      },
       {
         type: "water heater",
        enabled: false,
       },
    ],
  },
  {
    type: "bathroom",
    name: "",
    color: "",
    devices: [
      {
        type: "ac",
        enabled: false,
      },
      { type: "lamp", enabled: false },
      {
        type: "stereo system",
        enabled: false,
      },
      {
        type: "water heater",
        enabled: false,
      },
    ],
  },
  {
    type: "livingRoom",
    name: "",
    color: "",
    devices: [
      {
        type: "ac",
        enabled: false,
      },
      { type: "lamp", enabled: false },
      {
        type: "stereo system",
        enabled: false,
      },
      {
        type: "water heater",
        enabled: false,
      },
    ],
  },
  {
    type: "kitchen",
    name: "",
    color: "",
    devices: [
      {
        type: "ac",
        enabled: false,
      },
      { type: "lamp", enabled: false },
      {
        type: "stereo system",
        enabled: false,
      },
      {
        type: "water heater",
        enabled: false,
      },
    ],
  },
];
export default rooms;

rooms[0].devices[0].enabled;
