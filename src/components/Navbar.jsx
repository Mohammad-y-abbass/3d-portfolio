import { NavLink } from 'react-router-dom';

import { github, linkedin } from '../assets/icons';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='flex text-lg font-medium gap-7 justify-between w-full'>
        <NavLink
          to='/'
          className='text-black text-xl no-underline bg-gradient-to-r from-blue-300 to-blue-600 p-1 rounded font-semibold sm:block hidden'
        >
          MA
        </NavLink>
        <div className='flex gap-4'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-black'
            }
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-black'
            }
          >
            Projects
          </NavLink>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <a href='https://www.linkedin.com/in/mohammad-abbass/'>
            <img src={linkedin} alt='linkedin' className='w-6 h-6' />
          </a>
          <a href='https://github.com/Mohammad-y-abbass'>
            <img src={github} alt='linkedin' className='w-6 h-6' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
