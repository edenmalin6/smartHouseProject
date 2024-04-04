import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storageService } from "../services/storageService";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // const {id} = useParams()
  const [user, setUser] = useState(null)
  const[error, setError] = useState(null)
  const navigate = useNavigate();
 

  // useEffect(() => {
  //   axios.get(`http://localhost:9000/home/:${id}`)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // }, []);

  const logout = () => {
    storageService.clearAll()
    setUser(null)
    navigate("/login")
  }
 


  const value = { error, setError, user, setUser, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext)