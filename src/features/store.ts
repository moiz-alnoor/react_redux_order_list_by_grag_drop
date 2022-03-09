import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type logInInputs_ = {
  email: string;
  password: string;
};

const initialState: any = {
  isAdmin: false,
  isUser: false,
  name: "",
  user: [],
  group: [],
  task: [],
  group_tasks: [],
  user_tasks: [],
};

const AdminLogInInputs: logInInputs_ = { email: "a@a.com", password: "123" };
const UserLogInInputs: logInInputs_ = { email: "u@u.com", password: "123" };

export const appStore = createSlice({
  name: "appStore",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      if ( action.payload.email == AdminLogInInputs.email && action.payload.password == AdminLogInInputs.password ) {
        state.isAdmin = true;
        localStorage.setItem("isLog", "true");
        localStorage.setItem("isAdmin", "true");
        window.location.replace("/view_task");
      } else if ( action.payload.email == UserLogInInputs.email && action.payload.password == UserLogInInputs.password ){
        state.isUser = true;
        localStorage.setItem("isLog", "true");
        localStorage.setItem("isUser", "true");
        window.location.replace("/view_task");
      } else{
        toast.error("password or email not correct");
      }
    },

    addUser: (state, action) => {
      state.user.push(action.payload);
      return state;
    },
    addGroup: (state, action) => {
      state.group.push(action.payload);
      return state;
    },
    addTask: (state, action) => {
      state.task.push(action.payload);
      return state;
    },
    assignTaskForGroup: (state, action) => {
      console.log(action.payload);
      state.group_tasks.push(action.payload);
      return state;
    },
    assignTaskForUser: (state, action) => {
      action.payload.tasks.forEach((element: any) => {
        state.user_tasks.push({
          status: false,
          task: element,
          id: Math.floor(Math.random() * 100),
        });
      });

      toast.success("tasks has beed assigned to the user");

      return state;
    },
    handleTask: (state, action) => {
      console.log(action.payload.index);

      state.user_tasks.forEach(function (obj: any) {
        if (obj.id === action.payload.index) {
          obj.status = action.payload.value;
        }
      });
    },
    logout: (state) => {
      localStorage.clear()
      window.location.replace("/");
    },
  },
});

export const {
  login,
  addUser,
  handleTask,
  addTask,
  assignTaskForUser,
  assignTaskForGroup,
  addGroup,
  logout,
} = appStore.actions;

export default appStore.reducer;
