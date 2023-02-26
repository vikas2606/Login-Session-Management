import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userinitialState = { user: null };
const initialTimeState = { time: null };
const initialPopUpState = { showPopUp: false };
const initialPopUpStateForLogout = { showPopUpForLogOut: false };

const userSlice = createSlice({
  name: "user",
  initialState: userinitialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

const timeSlice = createSlice({
  name: "time",
  initialState: initialTimeState,
  reducers: {
    settime: (state, action) => {
      state.time = action.payload;
    },
  },
});

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopUpState,
  reducers: {
    togglePopup: (state, action) => {
      state.showPopUp = action.payload;
    },
  },
});

const popupForLogOutSlice = createSlice({
  name: "popupforlogout",
  initialState: initialPopUpStateForLogout,
  reducers: {
    togglePopup: (state, action) => {
      state.showPopUpForLogOut = action.payload;
    },
  },
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    time: timeSlice.reducer,
    popup: popupSlice.reducer,
    popupforlogout:popupForLogOutSlice.reducer,
  },
});

export const persistor = persistStore(store);

export const userActions = userSlice.actions;
export const timeActions = timeSlice.actions;
export const popupActions = popupSlice.actions;
export const popupforlogoutActions=popupForLogOutSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectTime = (state) => state.time.time;
export const selectPopUp = (state) => state.popup.showPopUp;
export const selectPopUpForLogOut=(state) => state.popupforlogout.showPopUpForLogOut;

export default store;
