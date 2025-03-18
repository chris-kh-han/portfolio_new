import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import Header from './components/Header';

import './App.css';

const App = () => {
  const currentTheme = useSelector((state) => state.theme.value);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className=''>
      {/* <Navbar /> */}
      <Home />
    </div>
  );
};

export default App;
