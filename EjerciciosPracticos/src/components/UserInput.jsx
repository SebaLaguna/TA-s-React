import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const UserInput = () => {
  const { setUserName } = useUser();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputValue); 
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <button type="submit">Actualizar Nombre</button>
    </form>
  );
};

export default UserInput;
