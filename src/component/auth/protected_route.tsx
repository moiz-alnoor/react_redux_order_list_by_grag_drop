import {Outlet } from "react-router-dom"
import Login from "./log_in"

const isLog = localStorage.getItem('isLog')

// get isLog value as boolean 
const getIsLog = (isLog:any) => {
  return typeof isLog == 'string' ? JSON.parse(isLog) : isLog
}

//check if the user is authenticated
 export const ProtectedRoute = () => getIsLog(isLog)? <Outlet/> : <Login/>
 export default  ProtectedRoute 


