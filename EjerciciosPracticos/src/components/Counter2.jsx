import React, { useState, useEffect } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0); 

  
  useEffect(() => {
    document.title = `Contador: ${count}`; 


    return () => {
      document.title = 'React App'; 
    };
  }, [count]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
};

export default Counter2;
