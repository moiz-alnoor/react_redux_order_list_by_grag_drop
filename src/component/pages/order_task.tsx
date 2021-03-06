import React, { FC } from "react";
import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import Header from "../header";
import MenuBar from "../menu_bar";
import Footer from "../footer";
import { AiOutlineRedo } from "react-icons/ai";
import { useSelector } from "react-redux";


export default function ViewTasks() {
 
  const userState = useSelector((state: any) => state.user);
  const tasks = userState.user_tasks;
  console.log(tasks)
  const renderItem = ({item}:any) => item.task;

  
  

  return (
    <>
      <Header />
      <div className="bg-yellow-200 h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-2 ">
            <MenuBar />
          </div>

          <div className="col-span-8  p-5">
            <div className="py-7 px-7 text-xs font-medium tracking-wider text-left flex items-center">
              <AiOutlineRedo size={25} /> Order Tasks
            </div>

            <div className="py-7 px-7  flex justify-start">
              <div className="w-96">
              <Nestable className=" border-1 bg-white p-3 border-gray-300 text-gray-500 "
    items={tasks}
    renderItem={renderItem} />
    

               </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
