import React from "react";
import { UserProvider } from "../context/UserContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import Card from "../components/Card";
import CardTA2 from "../components/CardTA2";
import Input from "../components/Input";
import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";
import ToggleText from "../components/ToggleText";
import TaskList from "../components/TaskList";
import TaskList2 from "../components/TaskList2";
import TaskList3 from "../components/TaskList3";
import UserList from "../components/UserList";
import Timer from "../components/Timer";
import UserDisplay from "../components/UserDisplay";
import UserInput from "../components/UserInput";
import ThemeToggle from "../components/ThemeToggle";
import ThemeWrapper from "../components/ThemeWrapper";
import LanguageDisplay from "../components/LanguajeDisplay";
import LanguageSelector from "../components/LanguageSelector";
import ThemeDisplay from "../components/ThemeDisplay";

const Home = () => {
  return (
    <>
      <h1>Ejercicio TA 1: Tarjetas</h1>
      <Card
        title="Proyecto 1"
        description="Descripción del proyecto 1"
        assignedTo="Juan Pérez"
        startDate="2024-10-01"
        endDate="2024-10-31"
      />
      <Card
        title="Proyecto 2"
        description="Descripción del proyecto 2"
        assignedTo="Ana Gómez"
        startDate="2024-11-01"
        endDate="2024-11-30"
      />
      <Card
        title="Proyecto 3"
        description="Descripción del proyecto 3"
        assignedTo="Carlos Ruiz"
        startDate="2024-12-01"
        endDate="2024-12-31"
      />

      <h1>Ejercicio TA 2: Tarjetas con children</h1>

      <CardTA2>
        <h2>Proyecto 1</h2>
        <p>Descripción del proyecto 1</p>
        <p>
          <strong>Persona asignada:</strong> Juan Pérez
        </p>
        <p>
          <strong>Fecha de inicio:</strong> 2024-10-01
        </p>
        <p>
          <strong>Fecha de fin:</strong> 2024-10-31
        </p>
      </CardTA2>

      <CardTA2>
        <h2>Proyecto 2</h2>
        <p>Descripción del proyecto 2</p>
        <p>
          <strong>Persona asignada:</strong> Ana Gómez
        </p>
        <p>
          <strong>Fecha de inicio:</strong> 2024-11-01
        </p>
        <p>
          <strong>Fecha de fin:</strong> 2024-11-30
        </p>
      </CardTA2>

      <CardTA2>
        <h2>Proyecto 3</h2>
        <p>Descripción del proyecto 3</p>
        <p>
          <strong>Persona asignada:</strong> Carlos Ruiz
        </p>
        <p>
          <strong>Fecha de inicio:</strong> 2024-12-01
        </p>
        <p>
          <strong>Fecha de fin:</strong> 2024-12-31
        </p>
      </CardTA2>

      <h1>Ejercicio TA 3: Input Controlado</h1>
      <Input />

      <h1>Ejercicio TA 4: Contador con Botones</h1>
      <Counter />

      <h1>Ejercicio TA 5: Mostrar y Ocultar Texto</h1>
      <ToggleText />

      <h1>Ejercicio TA 6: Lista de Tareas</h1>
      <TaskList />

      <h1>Ejercicio TA 7: Lista de Tareas con Eliminación</h1>
      <TaskList2 />

      <h1>Ejercicio TA 8: Lista de Tareas con Edición</h1>
      <TaskList3 />

      <h1>Ejercicio TA 9: Contador con Título Dinámico</h1>
      <Counter2 />

      <h1>Ejercicio TA 10: Lista de Usuarios</h1>
      <UserList />

      <h1>TA 11 - Temporizador Automático</h1>
      <Timer />

      <UserProvider>
        <h1>TA 12 y TA 13- Contexto de Usuario</h1>
        <UserDisplay />
        <UserInput />
      </UserProvider>

      <ThemeProvider>
        <ThemeWrapper>
          <h1 style={{ color: "inherit" }}>TA 14 - Gestión de Tema</h1>
          <ThemeToggle />
        </ThemeWrapper>
      </ThemeProvider>

      <LanguageProvider>
        <ThemeProvider>
          <ThemeWrapper>
            <h1 style={{ color: "inherit" }}>
              {" "}
              TA 15 - Gestión de Idioma y Tema
            </h1>
            <LanguageDisplay />
            <LanguageSelector />
            <ThemeDisplay />
            <ThemeToggle />
          </ThemeWrapper>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
};

export default Home;
