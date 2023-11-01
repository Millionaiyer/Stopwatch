import { useState, useEffect } from "react";
import "./Time.css";

const Time = () => {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(0);

  // console.log(minutes);
  // console.log(seconds,"sec")

  let interval = false;
  useEffect(() => {
    console.log(start, "start");
    //Implementing the setInterval method
    if (start === true) {
      startCounter();
      if (seconds === 60) {
        setSeconds(0);
        setMinutes(prevMinutes => prevMinutes + 1);
      }
    }
    return () => stopCounter();
  }, [start, seconds]);


  const startCounter = () =>
    (interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 50));
  const stopCounter = () => clearInterval(interval);

  const resetHandler = () =>{
    setStart(false)
    setSeconds(0);
    setMinutes(0);
  }

  return (
    <div className="content">
      <div className="time">
        <h1>{minutes}:</h1> <h1>{seconds}</h1>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          {"start"}
        </button>
        <button
          onClick={() => {
            setStart(false);
          }}
        >
          {"stop"}
        </button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export { Time };
