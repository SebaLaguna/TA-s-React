import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

const LanguageDisplay = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h2>Idioma Actual: {language}</h2>
    </div>
  );
};

export default LanguageDisplay;
