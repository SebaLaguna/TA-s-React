import React, { useState } from 'react';

const TaskList2 = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault(); 
    if (task.trim() !== '') {
      setTasks([...tasks, task]); 
      setTask(''); 
    }
  };


  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ingrese una tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList2;
