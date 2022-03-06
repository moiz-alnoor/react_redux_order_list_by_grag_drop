import { createSlice } from "@reduxjs/toolkit";

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
    state.group_tasks = action.payload
    return state
  
    },  
    assignTaskForUser: (state, action) => {
      console.log(action.payload)
    return[...state.user_tasks, {...action.payload}]
  
  
    },
    logout: (state) => {
      localStorage.clear();
    },
  },
});

export const { login, addUser,addTask,assignTaskForUser, assignTaskForGroup,  addGroup, logout } = appStore.actions;

export default appStore.reducer;
