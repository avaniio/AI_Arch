import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'about', title: 'About', path: '/about' },
  { id: 'projects', title: 'Projects', path: '/generate' },
  { id: 'profile', title: 'Profile', path: '/profile' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full"
      style={{ background: 'rgba(5, 5, 5, 0.6)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-16">
        {/* Logo — left side */}
        <Link
          to="/"
          className="text-xl font-black tracking-[0.12em] text-white transition-opacity hover:opacity-80"
          onClick={() => window.scrollTo(0, 0)}
        >
          AI Arch
        </Link>

        {/* Desktop nav — right side */}
        <ul className="hidden list-none items-center gap-10 sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                mobileOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                mobileOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:hidden ${
          mobileOpen ? 'max-h-60' : 'max-h-0'
        }`}
        style={{ background: 'rgba(5, 5, 5, 0.95)' }}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 pt-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`block text-[15px] font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-[#888] hover:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
