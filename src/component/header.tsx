import playtomic_ from "../file/playtomic_.png"
import { AiOutlineUser } from "react-icons/ai"
import { useSelector } from "react-redux"


export default function Header() {
  // get the user name from the redux store 
   const user = useSelector((state:any) => state.user.name)
   console.log(user)
  
  return (
    <>
      <div className=" bg-white border-b-2 border-yellow-300 p-5">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center">
              <img src={playtomic_} width="30" height="30" alt="PLAYTOMIC" />
              <p>PLAYTOMIC</p>
            </div>
          </div>
          <div className="col-span-6  flex justify-end">
            
             <span className="m-1 text-sm font-medium tracking-wider"> <AiOutlineUser /> </span>{user}
         
          </div>
        </div>
      </div>
    </>
  )
}
