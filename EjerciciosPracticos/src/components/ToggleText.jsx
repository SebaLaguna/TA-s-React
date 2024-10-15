import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && <p>Este es el texto que se puede mostrar u ocultar.</p>}
    </div>
  );
};

export default ToggleText;
