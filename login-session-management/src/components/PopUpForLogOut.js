import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupforlogoutActions, userActions } from "../store/store";
import { useState, useEffect } from "react";

function PopUpForLogOut() {
  const dispatch = useDispatch();
  const minutes = 0;
  const seconds = 10;
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60 + seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((totalSeconds) => totalSeconds - 1);
      if (totalSeconds === 0) {
        console.log("logout triggered");
        dispatch(popupforlogoutActions.togglePopup(false));
        dispatch(userActions.logout());
      }
    }, 1000);

    return () => clearInterval(interval);
  });
  const toggle=()=>{
    dispatch(popupforlogoutActions.togglePopup(false))
  }

  const minutesRemaining = Math.floor(totalSeconds / 60);
  const secondsRemaining = totalSeconds % 60;
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>You will be loggedout in </p>
        <h2>
          {minutesRemaining}m {secondsRemaining}s.
        </h2>
        <button onClick={toggle}>ok</button>
      </div>
    </div>
  );
}

export default PopUpForLogOut;
