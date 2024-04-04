import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import nodemailer from "nodemailer"
import cors from "cors";
import { RoomModel, UserModel } from "./models/Users.js";
import {
  verifyUserData,
  verifyUserUniqueness,
  //   verifyUserEmail,
  InvalidUserData,
  InvalidUserUnique,
} from "./models/Auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI);

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    await verifyUserData(username, password);
  } catch (error) {
    console.error("Error logging in:", error.message);
    if (error instanceof InvalidUserData) {
      return res.status(400).send(error.message);
    }
    return res.status(500).send();
  }
  let user;
  try {
    user = await UserModel.findOne({ username });
  } catch (error) {
    return res.status(500).send();
  }
  return res.send(user);
});

// app.post("/api/forgotPassword", async(req, res)=>{
//     const {email} = req.body
//     let user;
//     try {
//        await verifyUserEmail(email)

//     } catch (error) {
//        console.error("Error sending email:", error.message);
//     if (error instanceof InvalidUserData) {
//       return res.status(400).send({ error: error.message });
//     }
//     return res.status(500);
//     }

//     try {
//          user = await UserModel.findOne({email})

//          var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               user: 'youremail@gmail.com',
//               pass: 'yourpassword'
//             }
//           });

//           var mailOptions = {
//             from: 'youremail@gmail.com',
//             to: 'myfriend@yahoo.com',
//             subject: 'Reset Password',
//             text: 'That was easy!'
//           };

//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//     } catch (error) {
//         console.log(error);
//     }
// })

app.post("/api/register", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    await verifyUserUniqueness(email, username);
  } catch (error) {
    console.error("Error creating new user:", error.message);
    if (error instanceof InvalidUserUnique) {
      return res.status(400).send(error.message);
    }
    return res.status(500);
  }
  let newUser;
  try {
    newUser = await UserModel.create({ email, username, password });
  } catch (error) {
    return res.status(500).send();
  }
  return res.send(newUser);
});
//add room 
app.post("/api/room", async (req, res) => {
  const { type, name, color } = req.body;

  const response = await RoomModel.create({ type, name, color, devices: [] });

  return res.send(response.id);
});
//render all rooms in home page
app.get("/api/room", async (req, res) => {
  const rooms = await RoomModel.find();
  return res.send(rooms);
});
//get room by Id 
app.get("/api/room/:id", async (req, res) => {
  const id = req.params.id;
  const room = await RoomModel.findById(id);
  return res.send(room);
});
//update room when adding a device / turning on/off the device
app.put("/api/room/:id", async (req, res) => {
    const { type, name, color } = req.body;
    const id = req.params.id;
    await RoomModel.findByIdAndUpdate(id, { type, name, color });
    return res.send();
  });
app.delete("/api/room/:id", async (req, res) => {
  const id = req.params.id;
  await RoomModel.findByIdAndDelete(id);
  return res.send();
});
//adding device to the room
app.post("/api/room/:roomId/device", async (req, res) => {
  const { type, name, color } = req.body;
  const response = await RoomModel.create({ type, name, color });
  return res.send(response.id);
});
app.get("/api/room/:roomId/device/deviceId", async (req, res) => {
  const { type, name, color } = req.body;
  const response = await RoomModel.create({ type, name, color });
  return res.send(response.id);
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port http://localhost:9000`);
});
