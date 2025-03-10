import { Outlet, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './components/Footer';
import './animations.css';
const Layout = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setCurrentPath(location.pathname);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className='min-h-screen flex flex-col'>
      {/* <Navbar /> */}
      <main
      // className={`flex-grow transition-all duration-500 transform ${
      //   isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      // }`}
      >
        {/* {location.pathname === currentPath && <Outlet />}{' '} */}
        <Outlet />
      </main>
      <Footer />
      {/* <small
        className='fixed bottom-[100px] left-[25px] text-left text-gray-400 rotate-[-90deg] origin-bottom-left font-sans mb-5 tracking-[0.02em] leading-none '
        // style='-webkit-font-smoothing: antialiased;'
      > */}

      {/* <small
        className='fixed bottom-[100px] left-[25px] text-left text-gray-400  origin-bottom-left font-sans mb-5 tracking-[0.02em] leading-none
  opacity-0 animate-fadeIn'
      >
        <span className='inline-block mr-4 h-[1px] w-[25px] bg-gray-400'></span>
        © 2025. Made by Chris Kwanhee Han.
      </small> */}
    </div>
  );
};

export default Layout;
