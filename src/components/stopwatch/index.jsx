import { useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState(null);

  function handleCounter() {
    setIsStarted(!isStarted);

    if (!isStarted) {
      const newTimer = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      setTimer(newTimer);
    }

    clearInterval(timer);
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleCounter}>{isStarted ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Timer;
