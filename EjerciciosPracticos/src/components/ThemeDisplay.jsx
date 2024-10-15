import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const ThemeDisplay = () => {
  const { theme } = useTheme();

  return (
    <div>
      <h2>Tema Actual: {theme}</h2>
    </div>
  );
};

export default ThemeDisplay;
