import React, { useState, useEffect } from "react";
import "./Clock.css";
import { useDispatch } from "react-redux";
import {
  popupActions,
  timeActions,
  popupforlogoutActions,
  userActions,
} from "../store/store";
import { Variables } from "./Component_variables";

function Clock(props) {
  let forward = props.forward;
  const dispatch = useDispatch();
  const minutes = forward ? 0 : props.minutes;
  const seconds = forward ? 0 : props.seconds;
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60 + seconds);
  const minutesRemaining = Math.floor(totalSeconds / 60);
  const secondsRemaining = totalSeconds % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!props.onChange) {
        if (forward) {
          setTotalSeconds((totalSeconds) => totalSeconds + 1);

          if (totalSeconds === Variables.TIME_FOR_IDLE_POPUP) {
            dispatch(
              timeActions.settime({
                minutes: minutesRemaining,
                seconds: secondsRemaining,
              })
            );
            dispatch(popupActions.togglePopup(true));
          }

          if (totalSeconds === Variables.TIME_FOR_IDLE_LOGOUT_POPUP) {
            dispatch(popupActions.togglePopup(false));
            dispatch(popupforlogoutActions.togglePopup(true));
          }

        } else {
            setTotalSeconds((totalSeconds) => totalSeconds - 1);

          if (totalSeconds === 0) {
            console.log("logout triggered");
            dispatch(popupforlogoutActions.togglePopup(false));
            dispatch(userActions.logout());
          }
        }
      } else {
        setTotalSeconds(0);
        console.log("timer resets")
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return forward ? null : (
    <div>
      <p>If you didn't respond You will be LoggedOut in</p>
      <h1>
        {minutesRemaining}m {secondsRemaining}s
      </h1>
    </div>
  );
}

export default Clock;
