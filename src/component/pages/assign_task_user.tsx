import { useState } from "react";
import Header from "../header";
import MenuBar from "../menu_bar";
import Footer from "../footer";
import { AiOutlineNodeCollapse } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { assignTaskForUser } from "../../features/store";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  user: string;
  tasks: [];
  group: string;
};

export default function AssignTaskUser() {
  const taskState = useSelector((state: any) => state);
  const task = taskState.user.task;
  const groupState = useSelector((state: any) => state);
  const group = groupState.user.group;
  const userState = useSelector((state: any) => state);
  const user = userState.user.user;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    dispatch(assignTaskForUser(data));
    if(data.group !== ''){
      toast.success("tasks has beed assigned to the user")
    }
  };

  return (
    <>
         <ToastContainer />
      <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <MenuBar />
          </div>

          <div className="col-span-8  p-5">
            <div className="py-7 px-7 text-xs font-medium tracking-wider text-left flex items-center">
              <AiOutlineNodeCollapse size={25} /> Assign Task for Group
            </div>

            <div className="py-7 px-7  flex justify-start">
              <div className="w-96">
                <form onSubmit={handleSubmit(onSubmit)}>
                <p>Chose User</p>
                  <div className="mb-3 xl:w-96">
                    <select
                      {...register("user")}
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
                    >
                      {user.map((user: string, index: number) => (
                        <>
                          <option value={user}>{user}</option>
                        </>
                      ))}
                    </select>
                  </div>
                  <p>Select Group</p>
                  <div className="mb-3 xl:w-96">
                    <select
                      {...register("group")}
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
                    >
                      {group.map((group: string, index: number) => (
                        <>
                          <option value={group}>{group}</option>
                        </>
                      ))}
                    </select>
                  </div>
                  <p> Chose Tasks </p>
                  {task.map((task: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs inline-block mb-3 py-1.5 m-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded"
                    >
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-radio"
                          {...register("tasks")}
                          value={task}
                        />
                        <span className="ml-2"> {task} </span>
                      </label>
                    </span>
                  ))}

       
<div>                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Assign Task for Group
                  </button>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
