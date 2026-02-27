import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './Home';
import Portfolio from './Portfolio';
import Specter from './Specter';
import Swiggy from './Swiggy';
import Dunzo from './Dunzo';
import Homehunter from './Homehunter';
import Jupiter from './Jupiter';
import Mymind from './Mymind';
import SemanticSearch from './SemanticSearch';
import Bookshelf from './Bookshelf';
import Principles from './Principles';
import Photography from './Photography';
import './index.css';

// Sleek SVG Icons
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

function MainLayout({ theme, toggleTheme, isPhotography }) {
  return (
    <>
      <div className="page-top-border"></div>
      <header>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Index</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
          <NavLink to="/bookshelf" className={({ isActive }) => isActive ? "active" : ""}>Bookshelf</NavLink>
          <NavLink to="/principles" className={({ isActive }) => isActive ? "active" : ""}>Principles</NavLink>
          <NavLink to="/photography" className={({ isActive }) => isActive ? "active" : ""}>Photography</NavLink>
        </nav>
        
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          disabled={isPhotography}
          title={isPhotography ? "Photography is always viewed in the dark room." : "Toggle Theme"}
        >
          {theme === 'dark' || isPhotography ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>
      
      <Outlet />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  
  const isPhotography = location.pathname === '/photography';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (isPhotography || theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme, isPhotography]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} isPhotography={isPhotography} />}>
        <Route element={
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ flexGrow: 1 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/photography" element={<Photography />} />
        </Route>
      </Route>

      <Route path="/portfolio/specter" element={<Specter />} />
      <Route path="/portfolio/swiggy" element={<Swiggy />} />
      <Route path="/portfolio/dunzo" element={<Dunzo />} />
      <Route path="/portfolio/homehunter" element={<Homehunter />} />
      <Route path="/portfolio/jupiter" element={<Jupiter />} />
      <Route path="/portfolio/mymind" element={<Mymind />} />
      <Route path="/portfolio/semanticrentalsearch" element={<SemanticSearch />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}