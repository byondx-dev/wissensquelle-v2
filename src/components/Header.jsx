import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Dār al-Iftā’', href: '/dar-al-ifta' },
    { name: 'Madrasah', href: '/madrasah', highlight: true },
    { name: 'As-Sunnah', href: '/madrasah-as-sunnah' },
    { name: 'Kurse', href: '/kurse' },
    { name: 'Gelehrte', href: '/scholars' },
    { name: 'Kontakt', href: '/contact' },
    { name: 'Über uns', href: '/about' },
  ];

  const isTransparent = !isScrolled && !isHovered && !isMenuOpen && location.pathname === '/';

  return (
    <motion.header
      className={`header ${isTransparent ? 'header-transparent' : 'header-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-fluid">
        <div className="header-content">

          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="logo-wrapper">
            <Link to="/" className="logo-link">
              <img src={logoImg} alt="Wissensquelle Logo" className="logo-image" />
            </Link>
          </div>

          <div className="header-actions">
            <Link to="/contact" className="action-link">
              Frage stellen
            </Link>
            <Link to="/madrasah" className="btn btn-primary btn-sm">
              Anmeldung Madrasah
            </Link>
            <Link to="/login" className="action-link login-link">
              Login
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="mobile-nav-link"
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="mobile-divider" />
              <Link to="/login" className="mobile-nav-link">Schüler Login</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 1.25rem 0;
          border-bottom: 1px solid transparent;
        }

        .container-fluid {
          width: 100%;
          padding: 0; 
          max-width: 100%;
        }

        .header-transparent {
          background-color: transparent;
          color: var(--color-text-primary);
        }

        .header-white {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          color: var(--color-text-primary);
          padding: 0.75rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
          border-bottom: 1px solid var(--color-border-light);
        }

        .header-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: 100%;
        }

        .desktop-nav {
          justify-self: start;
          padding-left: 5%; 
        }

        .nav-list {
          display: flex;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: inherit;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
          white-space: nowrap;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-gold-gradient);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .nav-link:hover {
          color: var(--color-text-primary);
        }

        .logo-wrapper {
          justify-self: center;
          text-align: center;
        }

        .logo-link {
          display: block;
          line-height: 0;
        }

        .logo-image {
          height: 80px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        
        .header-white .logo-image {
          height: 70px;
        }

        .header-actions {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-right: 5%; 
        }

        .action-link {
          text-decoration: none;
          color: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.3s;
          white-space: nowrap;
        }
        
        .action-link:hover {
          color: var(--color-gold-end);
        }
        
        .btn-sm {
          padding: 0.6rem 1.5rem;
          font-size: 0.85rem;
        }
        
        .login-link {
            opacity: 0.7;
            font-size: 0.85rem;
        }
        
        .login-link:hover {
          opacity: 1;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          color: inherit;
          margin-left: 10px;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background-color: currentColor;
          position: relative;
          transition: background-color 0.3s;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          left: 0;
          transition: transform 0.3s;
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { bottom: -8px; }

        .hamburger.open { background-color: transparent; }
        .hamburger.open::before { transform: rotate(45deg); top: 0; }
        .hamburger.open::after { transform: rotate(-45deg); bottom: 0; }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background-color: #FFFFFF;
          padding: var(--spacing-lg) var(--spacing-md);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-top: 1px solid var(--color-border);
          overflow: hidden;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          text-align: center;
        }

        .mobile-nav-link {
          font-size: 1.25rem;
          font-family: 'Amiri', serif;
          color: var(--color-text-primary);
          text-decoration: none;
          padding: 5px;
        }
        
        .mobile-nav-link.highlight {
            color: var(--color-gold-end);
            font-weight: bold;
        }
        
        .mobile-divider {
            border: 0;
            border-top: 1px solid var(--color-border);
            margin: var(--spacing-sm) 0;
        }

        @media (max-width: 1200px) {
           .nav-list { gap: 1.5rem; }
        }

        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
          
          .header-content {
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
          }
          
          .logo-wrapper {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          
          .header-actions {
            padding-right: 0;
          }
          
          .action-link, .btn { display: none; }
          .mobile-menu-btn { display: block; }
          
          .logo-image { height: 60px; } 
          .header-white .logo-image { height: 55px; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
