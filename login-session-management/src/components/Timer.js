import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { popupActions, timeActions } from "../store/store";

function Timer(props) {
  const dispatch = useDispatch();
  const minutes = 10;
  const seconds = 0;
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60 + seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((totalSeconds) => totalSeconds - 1);

      dispatch(popupActions.togglePopup());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutesRemaining = Math.floor(totalSeconds / 60);
  const secondsRemaining = totalSeconds % 60;

  return (
    <div>
      <h2>
        {minutesRemaining}m {secondsRemaining}s
      </h2>
    </div>
  );
}

export default Timer;
