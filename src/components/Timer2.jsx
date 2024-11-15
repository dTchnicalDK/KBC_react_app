import React, { useEffect, useState } from "react";

function Timer2({ setGameLoose, questionNumber }) {
  const [timer, setTimer] = useState(30);
  const [timeup, setTimeup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 0.5);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setGameLoose(true);
      console.log(timer);
    }
  }, [timer]);

  useEffect(() => {
    setTimer(31);
  }, [questionNumber]);

  return timer;
}

export default Timer2;
