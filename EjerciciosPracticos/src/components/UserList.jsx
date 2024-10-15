import React, { useEffect, useState } from 'react';
import "../styles/UserList.css"

const UserList = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar usuarios
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Actualiza el estado con los usuarios
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false); // Cambia el estado de carga a falso en caso de error
      });
  }, []); // Dependencias vacías para ejecutar solo una vez al montar

  if (loading) {
    return <h2>Cargando usuarios...</h2>; // Mensaje de carga
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Nombre:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
