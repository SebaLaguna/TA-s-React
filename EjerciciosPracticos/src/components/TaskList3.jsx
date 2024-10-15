import React, { useState } from 'react';

const TaskList3 = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(''); 
  const [isEditing, setIsEditing] = useState(null); 
  const [editingText, setEditingText] = useState('');


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


  const handleEditTask = (index) => {
    setIsEditing(index);
    setEditingText(tasks[index]); 
  };


  const handleSaveTask = (index) => {
    const newTasks = tasks.map((t, i) => (i === index ? editingText : t));
    setTasks(newTasks);
    setIsEditing(null); 
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
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleSaveTask(index)}>Guardar</button>
              </>
            ) : (
              <>
                {t}
                <button onClick={() => handleEditTask(index)}>Editar</button>
                <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList3;
