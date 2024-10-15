import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div>
      <h3>Cambiar Idioma:</h3>
      <button onClick={() => changeLanguage('en')}>Inglés</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSelector;
