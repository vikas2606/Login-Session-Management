import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectUser, userActions } from "../store/store";
import { useSelector } from "react-redux";
import "./logout.css";
import Clock from "./Clock";

export const Logout = () => {
  const user = useSelector(selectUser);
  const [isUserInteracting,setIsUserInteracting]=useState(false)

  const dispatch = useDispatch();
  const LogoutHandler = (event) => {
    event.preventDefault();
    dispatch(userActions.logout());
  };
  const InteractionHandler = () => {
    console.log("User is responding")
    setIsUserInteracting(true)
  };
  
  useEffect(()=>{
    let timeout=null
    if(isUserInteracting){
      timeout=setTimeout(()=>setIsUserInteracting(false),2000)
    }
    return ()=>clearTimeout(timeout)
  },[isUserInteracting])
  return (
    <div
      onChange={InteractionHandler}
      onClick={InteractionHandler}
      onMouseMove={InteractionHandler}
    >
      <h1>
        Welcome <span className="user_name">{user.name}</span>
      </h1>
      <h1>
        your mail is <span className="user_name">{user.email}</span>
      </h1>
      <Clock onChange={isUserInteracting} forward={true}/>
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
};

export default Logout;
