import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type logInInputs_ = {
  email: string;
  password: string;
};

const initialState: any = { name: '', user: [], group:[], task:[], group_tasks:[], user_tasks:[] };

const logInInputs: logInInputs_ = {
  email: "mmoiz.aalnoor@gmail.com",
  password: "123",
};

export const appStore = createSlice({
  name: "appStore",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      if (
        action.payload.email == logInInputs.email &&
        action.payload.password == logInInputs.password
      ) {
        state.name = logInInputs.email
        localStorage.setItem("isLog", "true");
        window.location.replace("/user")
      } else{
        toast.error("password or email not correct")
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
      console.log(action.payload)
    state.group_tasks.push(action.payload)
    return state
  
    },  
    assignTaskForUser: (state, action) => {
      console.log(action.payload)
      state.user_tasks.push(action.payload)
      return state
  
  
    },
    logout: (state) => {
      window.location.replace("/")
    },
  },
});

export const { login, addUser,addTask,assignTaskForUser, assignTaskForGroup,  addGroup, logout } = appStore.actions;

export default appStore.reducer;
