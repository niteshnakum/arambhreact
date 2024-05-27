import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Set an interval to update the timer every second
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime);
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <h1>Time Elapsed: {time} seconds</h1> */}
    </div>
  );
};

export default Timer;
