import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); 
    }, 1000); 

   
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <h1>Temporizador</h1>
      <h2>{seconds} segundos</h2>
    </div>
  );
};

export default Timer;
