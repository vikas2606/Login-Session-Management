import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTime } from "../store/store";
import { popupActions} from "../store/store";
import "./PopUp.css";

function PopUp() {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(popupActions.togglePopup(false));
  };
  return (
    <div className="popup-overlay" onClick={toggle}>
      <div className="popup">
        <p>
          You've become idle for too long..
        </p>
        <button onClick={toggle}>ok</button>
      </div>
    </div>
  );
}
export default PopUp;
