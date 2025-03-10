import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';

import './App.css';

const App = () => {
  const currentTheme = useSelector((state) => state.theme.value);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className='p-4'>
      {/* <Navbar /> */}
      <Home />
    </div>
  );
};

export default App;
