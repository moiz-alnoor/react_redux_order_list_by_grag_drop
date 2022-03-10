import Nestable from 'react-nestable';
import { useState } from "react";
import Header from "../header";
import MenuBar from "../menu_bar";
import Footer from "../footer";
import { AiOutlineCheck } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleTask } from "../../features/store";
import { useSelector } from "react-redux";

type Inputs = {
  status: boolean
}


export default function HandleTasks(){
  const dispatch = useDispatch();
   

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();



  const userState = useSelector((state: any) => state.user);
  const tasks = userState.user_tasks;
  console.log(tasks)


  const handleStatus = (event:any, index:any) => {
          console.log(event.target.value)
    const data = {index: index, value: event.target.value}
    dispatch(handleTask(data));
  }

    return(
        <>
           <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <MenuBar />
          </div>

          <div className="col-span-8  p-5">
            <div className="py-7 px-7 text-xs font-medium tracking-wider text-left flex items-center">
              <AiOutlineCheck size={25} />  Handle Tasks
            </div>

            <div className="py-7 px-7  flex justify-start">
              <div className="w-96">


           <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Task
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Update Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tasks.map((task:any, index:number) => 
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">      {task.id} </div>
                              <div className="text-sm text-gray-500">
                        
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                               {task.task}
                              </span>
                            </td>
                            <td>


                            <select onChange={(e) => handleStatus(e, task.id)}
            
                      className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      required
                    >
                         <option value="">Select Status</option>
                          <option value="true">complete</option>
                            <option value="false"> in progress</option>
    
                    </select>


                            </td>
                          </tr>
                          )}
                  </tbody>
                </table>    </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}