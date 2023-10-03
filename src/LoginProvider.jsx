import React, { useContext } from "react";
import { useState } from "react";

const LoginContext = React.createContext();
const LoginChangeContext = React.createContext();

export const useLoginContext=()=>{
    return useContext(LoginContext);
}
export const useLoginChangeContext=()=>{
    return useContext(LoginChangeContext);
}

export const LoginProvider = ({children}) => {

   const [user,setUser]=useState({nombre: 'Alka', email: 'alka@hotmail.com'});

  const changeUser = (newUser)=>{
    setUser(newUser);
  }


  return (
    <LoginContext.Provider value={user}>
        <LoginChangeContext.Provider value={changeUser}>
            {children}
        </LoginChangeContext.Provider>
    </LoginContext.Provider>
  )
}

