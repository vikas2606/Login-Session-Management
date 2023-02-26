import React, { useState, useEffect, useRef } from "react";
import "./Clock.css";
import { useDispatch } from "react-redux";
import {
  popupActions,
  timeActions,
  popupforlogoutActions,
} from "../store/store";
function Clock(props) {
  const dispatch = useDispatch();
  const time = 0;
  const [hours, setHours] = useState(time);
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(1);
  const count = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!props.onChange) {
        setSeconds((prevSeconds) => {
          let newSeconds = prevSeconds + 1;
          let newMinutes = minutes;
          let newHours = hours;
          if (newSeconds === 60) {
            newSeconds = 0;
            newMinutes++;
          }
          if (newMinutes === 60) {
            newMinutes = 0;
            newHours++;
          }
          if (newHours === 24) {
            newHours = 0;
          }
          setMinutes(newMinutes);
          setHours(newHours);
          return newSeconds;
        });
        if (seconds === 20) {
          console.log("working");
          dispatch(popupActions.togglePopup(false));
          dispatch(popupforlogoutActions.togglePopup(true));
        }

        if (seconds === 10) {
          dispatch(
            timeActions.settime({
              hours: hours,
              minutes: minutes,
              seconds: seconds,
            })
          );

          dispatch(popupActions.togglePopup(true));
        }
      } else {
        setHours(0);
        setMinutes(0);
        setSeconds(1);
        count.current = 0;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, props.onChange]);

  return null;
  /*(
    <div className="clock">
      <h1>Real-Time Clock</h1>
      <p>
        {hours < 10 ? "0" : ""}
        {hours}:{minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </p>
    </div>
  );*/
}
export default Clock;
