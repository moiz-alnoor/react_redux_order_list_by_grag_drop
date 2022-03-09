import React, { FC } from "react";
import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import Header from "../header";
import MenuBar from "../menu_bar";
import Footer from "../footer";
import { AiOutlineUser } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/store";
import { useSelector } from "react-redux";

type Inputs = {
  user_name: string;
};
type MyComponentProps = React.PropsWithChildren<{}>;


export default function ViewTasks() {
 
  const userState = useSelector((state: any) => state.user);
  const tasks = userState.user_tasks;
  console.log(tasks)
  //console.log(items)
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
              <AiOutlineUser size={25} /> Add User
            </div>

            <div className="py-7 px-7  flex justify-start">
              <div className="w-96">
ds
              <Nestable
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
