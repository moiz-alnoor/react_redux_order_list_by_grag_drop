import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import jwt_decode from "jwt-decode";
import AuthLogo from "../../file/auth_logo.png";
import { useDispatch } from "react-redux";
import { login } from "../../features/store";


// firebase login and then rediredct to the dashboard
type logInInputs_ = {
  email: string;
  password: string;
};

export default function LogIn() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<logInInputs_>();
  const onSubmit: SubmitHandler<logInInputs_> = (data) => {
    console.log(data);
    dispatch(login(data));
  };


  return (
    <>
      <div className="flex justify-center mt-24">
        <img src={AuthLogo} width="400" alt="log logo" height="300" />
      </div>

      <div className=" w-2/6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              {...register("email")}
              type="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              {...register("password")}
              type="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log-in
          </button>
        </form>
      </div>
    </>
  );
}
