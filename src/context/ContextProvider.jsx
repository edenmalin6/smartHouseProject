import React, { createContext, useContext, useState, useEffect } from "react";
import { storageService } from "../services/storageService";


// useless component. might delete later 
const AuthContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState(storageService.getRooms());


  const value = {rooms, setRooms}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useRooms = () => useContext(AuthContext)