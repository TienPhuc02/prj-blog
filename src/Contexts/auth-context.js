import { useState } from "react";

const { useContext } = require("react");
const { createContext } = require("react");
const authContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  return <authContext.Provider value={value} {...props}></authContext.Provider>;
}
function useAuth() {
  const context = useContext();
  if (typeof context === "undefined")
    throw new Error("useAuth must be used  within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
