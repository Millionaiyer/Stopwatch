import { useState, useEffect } from "react";
import "./Time.css";

const Time = () => {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  // console.log(minutes);
  // console.log(seconds,"sec")

  let interval = false;
  useEffect(() => {
    console.log(start, "start");
    //Implementing the setInterval method
    if (start === true) {
      startCounter();
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(1);
      }
    }
    return () => stopCounter();
  }, [start, seconds]);
  const startCounter = () =>
    (interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000));
  const stopCounter = () => clearInterval(interval);
  return (
    <div className="content">
      <div className="time">
        <h1> {hours}:</h1> <h1>{minutes}:</h1> <h1>{seconds}</h1>
      </div>
      <div className="btn">
        <button
          value={seconds}
          onClick={() => {
            setStart(true);
          }}
        >
          {"start"}
        </button>
        <button
          value={seconds}
          onClick={() => {
            setStart(false);
          }}
        >
          {"stop"}
        </button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export { Time };
