import React from "react";
import { useDispatch } from "react-redux";
import { popupforlogoutActions } from "../store/store";
import Clocks from "./Clock";
import { Variables } from "./Component_variables";

function PopUpForLogOut() {
  const dispatch = useDispatch();
  const minutes=Variables.TIMER_MINUTES
  const seconds=Variables.TIMER_SECONDS

  const toggle = () => {
    dispatch(popupforlogoutActions.togglePopup(false));
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <Clocks minutes={minutes} seconds={seconds} forward={false} />
        <button onClick={toggle}>ok</button>
      </div>
    </div>
  );
}

export default PopUpForLogOut;
