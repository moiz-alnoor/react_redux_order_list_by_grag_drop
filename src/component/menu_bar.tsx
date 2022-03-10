import { AiOutlineUsergroupAdd, AiOutlineUser, AiOutlineUnorderedList, AiOutlineLogout,AiOutlineNodeCollapse,AiOutlineCheck,AiOutlineRedo,AiOutlineRollback} from "react-icons/ai"
import { Link } from "react-router-dom"
import {
  useNavigate,
} from "react-router-dom";
export default function MenuBar() {
  const navigate = useNavigate();
   
   const isUser = localStorage.getItem('isUser')
   const isAdmin = localStorage.getItem('isAdmin')
   console.log(isUser)
   console.log(isAdmin )
   const sinOut = () => {
    localStorage.clear()
    navigate("/");
  } 
  return (
    <>
      <div className="border-r-2 border-white p-5 h-screen  flex justify-center">
      {isAdmin?
      <ul>  
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineUser size={25} /><Link to="/user"> User</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineUsergroupAdd size={25} /><Link to="/group"> Group</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineNodeCollapse size={25} /><Link to="/task"> Tasks</Link></li>
        {/* <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineReconciliation size={25} /><Link to="/assign_task_group"> Assign Tasks to Group</Link></li> */}
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineRollback size={25} /><Link to="/assign_task_user"> Assign Tasks to User</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineRedo size={25} /><Link to="/order_task"> Order Tasks</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineUnorderedList size={25} /><Link to="/view_task"> View Tasks</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 mt-96"> <AiOutlineLogout size={25} /> <p onClick={sinOut} className="hover:cursor-pointer"> Log Out </p>  </li>
        </ul>
          :false}
              {isUser?
      <ul>  
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineCheck size={25} /><Link to="/handle_task">  Handle Tasks</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 "> <AiOutlineUnorderedList size={25} /><Link to="/view_task"> View Tasks</Link></li>
        <li className="flex items-center  text-sm font-medium tracking-wider  p-1 mt-96"> <AiOutlineLogout size={25} /> <p onClick={sinOut} className="hover:cursor-pointer"> Log Out </p>  </li>
        </ul>
          :false}
      </div>
    </>
  )
}