import React from 'react';
import { useUser } from '../context/UserContext';

const UserDisplay = () => {
  const { userName } = useUser();

  return (
    <div>
      <h2>Nombre del Usuario:</h2>
      <p>{userName || 'No hay nombre de usuario definido.'}</p>
    </div>
  );
};

export default UserDisplay;
