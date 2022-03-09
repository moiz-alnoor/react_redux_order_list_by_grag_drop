import Nestable from 'react-nestable';
import { useState } from "react";
import Header from "../header";
import MenuBar from "../menu_bar";
import Footer from "../footer";
import { AiOutlineUser } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/store";
import { useSelector } from "react-redux";

export default function HandleTasks(){
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
              <AiOutlineUser size={25} /> Add User
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900"> 1 </div>
                              <div className="text-sm text-gray-500">
                        
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {" "}
                                Active{" "}
                              </span>
                            </td>
                          </tr>
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