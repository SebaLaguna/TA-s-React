import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();

  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '20px',
      borderRadius: '8px',
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
    },
  };

  const textStyle = {
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <div style={themeStyles[theme]}>
      <div style={textStyle}>{children}</div>
    </div>
  );
};

export default ThemeWrapper;
