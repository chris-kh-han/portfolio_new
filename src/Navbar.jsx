// import { Sun, Moon } from 'lucide-react';
import ThemeController from './components/ThemeController';
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-primary-content text-primary'>
        <div className='flex-1'>
          {/* <a className='btn btn-ghost text-xl'>Chris </a> */}
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/work'>Work</Link>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <ThemeController />
            {/* <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' /> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
