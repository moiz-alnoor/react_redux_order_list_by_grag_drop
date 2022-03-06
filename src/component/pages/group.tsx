import { useState } from "react";
import Header from "../header";
import MenuBar from "../menu_bar";
import Footer from "../footer";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addGroup } from "../../features/store";
import { useSelector } from "react-redux";

type Inputs = {
  group_name: string;
};

export default function Group() {
  const groupState = useSelector((state: any) => state);
  const group = groupState.user.group
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const group_name = data.group_name;
    dispatch(addGroup(group_name));
  };

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
              <AiOutlineUsergroupAdd size={25} /> Add Group
            </div>

            <div className="py-7 px-7  flex justify-start">
              <div className="w-96">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      {...register("group_name")}
                      type="text"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      task name
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Group Name
                  </button>
                </form>
              </div>
            </div>
            <div className="py-7 px-7  flex space-x-2 justify-start">
              {group.map((group: any) => (
                <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                  {group}
                </span>
              ))}
            </div>
   
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
