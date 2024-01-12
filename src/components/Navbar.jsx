import { NavLink } from 'react-router-dom';

import { logo } from '../assets/images';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='object-contain w-18 h-18' />
      </NavLink>
      <nav className='flex text-lg font-medium gap-7'>
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
      </nav>
    </header>
  );
};

export default Navbar;