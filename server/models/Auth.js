import {UserModel} from "./Users.js";

export const verifyUserUniqueness = async (email, username) => {
  const verifiedEmail = await UserModel.findOne({ email });
  const verifiedUsername = await UserModel.findOne({ username });
  if (verifiedEmail)
    throw new InvalidUserUnique("There is already an account with that email.");
  if (verifiedUsername) throw new InvalidUserUnique("Username is taken.");
};
export const verifyUserData = async (username, password) => {
  const user = await UserModel.findOne({ username });
  if (!user) throw new InvalidUserData("User not found.");
  if (user.password !== password) throw new InvalidUserData("Incorrect password.");
};
export const verifyUserEmail = async (email) =>{
  const verifiedEmail = await UserModel.findOne({ email });
  if(!verifiedEmail) throw new InvalidUserData("Account not found.")
}

export class InvalidUserData extends Error {}
export class InvalidUserUnique extends Error {}
