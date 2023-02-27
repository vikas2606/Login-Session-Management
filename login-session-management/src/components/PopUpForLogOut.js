import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupforlogoutActions, userActions } from "../store/store";
import { useState, useEffect } from "react";
import Clocks from "./Clock";

function PopUpForLogOut() {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(popupforlogoutActions.togglePopup(false));
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <Clocks minutes={0} seconds={10} forward={false} />
        <button onClick={toggle}>ok</button>
      </div>
    </div>
  );
}

export default PopUpForLogOut;
