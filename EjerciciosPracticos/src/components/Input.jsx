import React, { useState } from 'react';

const Input = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Ingrese su texto:</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Escribe algo..." 
      />
      <p>Usted escribió: {text}</p>
    </div>
  );
};

export default Input;
