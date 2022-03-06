import { Route, Routes } from 'react-router-dom'
import LogIn from './component/auth/log_in'
import Group from './component/pages/group'
import User from './component/pages/user'
import Task from './component/pages/task'
import AssignTaskGroup from './component/pages/assign_task_group'
import AssignTaskUser from './component/pages/assign_task_user'
import ProtectedRoute from './component/auth/protected_route'

function App() {
  return (
    <>
   <Routes>
        <Route    path="/" element={<LogIn/>} />
        <Route    path="*" element={<LogIn/>} />
        <Route      element={<ProtectedRoute/>} >
          <Route    path="/user" element={<User/>} />
          <Route    path="/group" element={<Group/>} />
          <Route    path="/task" element={<Task/>} />
          <Route    path="/assign_task_group" element={<AssignTaskGroup/>} /> 
             <Route    path="/assign_task_user" element={<AssignTaskUser/>} />
        </Route>  
  </Routes>
    </>
  );
}
export default App