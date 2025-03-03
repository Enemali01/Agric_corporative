import React, { useContext, createContext, useState } from 'react'

const userContext = createContext()
export function authContext({children}) {
const [username, setUsername] = useState({})

const login = (username) => {
  setUsername(username)
 }
 const logout =()=>{
  setUsername(null)
   localStorage.removeItem('token')
 }
  return (
    <userContext.Provider value={{username,login,logout}}>
      {children}
    </userContext.Provider>
  )
}
export const useAuth = () => useContext(userContext)
export default authContext;

