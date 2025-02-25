import { useState, useEffect } from 'react';
import { ToggleButton } from '../styles/DarkModeStyles';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <ToggleButton onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </ToggleButton>
  );
};

export default DarkModeToggle;
