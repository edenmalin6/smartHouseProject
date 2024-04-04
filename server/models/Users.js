import mongoose, { Schema } from "mongoose";

const DevicesSchema = new mongoose.Schema({
  type: String,
  enabled: Boolean,
});

const RoomsSchema = new mongoose.Schema({
  type: String,
  name: String,
  color: String,
  devices: [{ type: Schema.Types.ObjectId, ref: "device" }],
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  rooms: [{ type: Schema.Types.ObjectId, ref: "room" }],
});

export const UserModel = mongoose.model("user", UserSchema);
export const RoomModel = mongoose.model("room", RoomsSchema);
export const DeviceModel = mongoose.model("device", DevicesSchema);



// const story = { author: 123123, fans: [1, 2, 3], title: "Asdasd" };
