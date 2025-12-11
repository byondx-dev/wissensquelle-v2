import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fatawaIndex, setFatawaIndex] = useState(0);
  const location = useLocation();
  const closeButtonRef = useRef(null);

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Fatāwā', href: '/fatawa' },
    { name: 'Dār al-Iftā’', href: '/dar-al-ifta' },
    { name: 'Gelehrte', href: '/scholars' },
    { name: 'Über uns', href: '/about' },
  ];

  const fatawaSlides = [
    {
      id: 1,
      title: 'Ist Bitcoin im Islam erlaubt?',
      category: 'Wirtschaft & Finanzen',
      summary: 'Kryptowährungen im Lichte moderner Finanzinstrumente und islamischer Prinzipien.',
    },
    {
      id: 2,
      title: 'Gebet auf der Arbeit verrichten',
      category: 'Glaube & Gottesdienste',
      summary: 'Wie sich Salah und Berufsalltag vereinbaren lassen – praktische Erleichterungen.',
    },
    {
      id: 3,
      title: 'Heiraten ohne Wali?',
      category: 'Ehe & Familie',
      summary: 'Voraussetzungen einer gültigen Ehe und die Rolle des Vormunds im Detail.',
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const interval = setInterval(() => {
      setFatawaIndex((prev) => (prev + 1) % fatawaSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isMenuOpen]);

  const siteTitle =
    document?.title && document.title !== 'Vite + React'
      ? document.title
      : 'Wissensquelle';
  const userInitial = siteTitle?.charAt(0)?.toUpperCase() || 'W';

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="top-shell">
      <div className="header-surface">
        <button
          className={`burger anchor ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="brand-area">
          <Link to="/" className="brand-link" aria-label={`${siteTitle} Start`}>
            <div className="logo-badge">
              <img src={logoImg} alt={`${siteTitle} Logo`} />
            </div>
            <div className="brand-copy">
              <span className="brand-title">{siteTitle}</span>
              <span className="brand-sub">Manba&apos; al-&apos;Ilm</span>
            </div>
          </Link>
        </div>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="action-area">
          <button className="icon-btn" type="button" aria-label="Suche öffnen">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6" strokeWidth="1.8" />
              <line x1="16" y1="16" x2="21" y2="21" strokeWidth="1.8" />
            </svg>
          </button>
          <Link className="icon-btn" to="/login" aria-label="Zum Login">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4.2" strokeWidth="1.8" fill="none" />
              <path
                d="M5.5 19.5c1.5-3 4-4.5 6.5-4.5s5 1.5 6.5 4.5"
                strokeWidth="1.8"
                fill="none"
              />
            </svg>
          </Link>
          <div className="avatar-shell" role="img" aria-label="Nutzerprofil">
            <span className="avatar-initial">{userInitial}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              className="mobile-drawer"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              aria-label="Mobiles Menü"
            >
              <div className="drawer-top">
                <div className="drawer-brand">
                  <div className="logo-badge small">
                    <img src={logoImg} alt={`${siteTitle} Logo`} />
                  </div>
                  <span className="brand-title">{siteTitle}</span>
                </div>
                <button
                  className="close-btn"
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Mobiles Menü schließen"
                  ref={closeButtonRef}
                >
                  <span />
                  <span />
                </button>
              </div>

              <nav className="mobile-nav" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={({ isActive }) =>
                      isActive ? 'mobile-link active' : 'mobile-link'
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="drawer-slider" aria-label="Aktuelle Fatāwā">
                <div className="slider-head">
                  <span className="slider-label">Neueste Fatāwā</span>
                </div>
                <div className="slider-window">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={fatawaIndex}
                      className="slider-card"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                      <span className="slider-category">{fatawaSlides[fatawaIndex].category}</span>
                      <h4 className="slider-title">{fatawaSlides[fatawaIndex].title}</h4>
                      <p className="slider-summary">{fatawaSlides[fatawaIndex].summary}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="slider-dots" role="tablist" aria-label="Fatāwā wechseln">
                  {fatawaSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`dot ${idx === fatawaIndex ? 'active' : ''}`}
                      onClick={() => setFatawaIndex(idx)}
                      aria-label={`Fatāwā ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <p className="drawer-footnote">Wissen mit Klarheit und Ruhe.</p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .top-shell {
          position: fixed;
          inset: 0 0 auto 0;
          padding: 10px 18px 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          pointer-events: auto;
          background: transparent;
        }

        .header-surface {
          width: min(96vw, 1260px);
          height: 70px;
          background: rgba(255, 255, 255, 0.86);
          border-radius: 18px 18px 16px 16px;
          box-shadow: 0 12px 32px rgba(20, 46, 75, 0.12), inset 0 -1px 0 rgba(15, 92, 110, 0.04);
          border: 1px solid rgba(9, 59, 82, 0.07);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: 0 18px;
          gap: 16px;
          pointer-events: auto;
          position: relative;
          overflow: hidden;
        }

        .header-surface::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(14, 116, 144, 0.05), rgba(255, 255, 255, 0)),
                      linear-gradient(90deg, rgba(196, 155, 44, 0.07), rgba(255, 255, 255, 0));
          opacity: 0.95;
          pointer-events: none;
        }

        .brand-area {
          display: flex;
          align-items: center;
        }

        .brand-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #0b3141;
        }

        .logo-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: transparent;
          border: none;
          box-shadow: none;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .logo-badge img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .logo-badge.small {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          gap: 2px;
        }

        .brand-title {
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
          color: #0a2d3c;
        }

        .brand-sub {
          font-size: 0.75rem;
          color: #4f6b7a;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          justify-content: center;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .nav-link {
          position: relative;
          color: #50616d;
          font-weight: 600;
          letter-spacing: 0.04em;
          font-size: 0.97rem;
          padding: 0.35rem 0.45rem;
          transition: color 0.22s ease;
        }

        .nav-link:hover {
          color: #0d6a7d;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -10px;
          width: 0;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0f8199 0%, #c6a043 100%);
          transition: width 0.22s ease;
        }

        .nav-link.active {
          color: #0a4f60;
          font-weight: 700;
        }

        .nav-link.active::after {
          width: 72%;
        }

        .nav-link.active::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          bottom: -16px;
          width: 10px;
          height: 10px;
          background: #0f8199;
          opacity: 0.9;
          border-radius: 2px;
        }

        .action-area {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(8, 70, 92, 0.12);
          background: linear-gradient(145deg, #f8fbfc, #eef3f7);
          color: #0c3c4e;
          display: grid;
          place-items: center;
          transition: all 0.22s ease;
          box-shadow: 0 4px 12px rgba(12, 60, 78, 0.14);
        }

        .icon-btn:hover {
          transform: translateY(-1px) scale(1.02);
          color: #0f8199;
          box-shadow: 0 10px 20px rgba(12, 80, 110, 0.16);
        }

        .icon-btn svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          fill: none;
        }

        .avatar-shell {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f8199, #0a4f60);
          display: grid;
          place-items: center;
          color: #fff;
          font-weight: 800;
          letter-spacing: 0.05em;
          box-shadow: 0 8px 20px rgba(10, 79, 96, 0.28);
        }

        .burger {
          display: none;
          width: 42px;
          height: 42px;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          gap: 5px;
          align-items: center;
          justify-content: center;
        }

        .burger.anchor {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          pointer-events: auto;
        }

        .burger span {
          display: block;
          width: 18px;
          height: 2.5px;
          background: linear-gradient(90deg, #0f8199, #0a4f60);
          border-radius: 12px;
          transition: transform 0.22s ease, opacity 0.22s ease;
        }

        .burger.is-open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .burger.is-open span:nth-child(2) {
          opacity: 0;
        }

        .burger.is-open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 24, 36, 0.45);
          backdrop-filter: blur(4px);
          z-index: 1300;
          pointer-events: auto;
        }

        .mobile-drawer {
          position: fixed;
          inset: 0 auto 0 0;
          width: 78vw;
          max-width: 360px;
          background: linear-gradient(180deg, #ffffff 0%, #f3f9fb 50%, #e9f4f6 100%);
          box-shadow: 10px 0 30px rgba(8, 24, 36, 0.14);
          border-right: 1px solid rgba(12, 60, 78, 0.08);
          padding: 20px 18px 24px;
          z-index: 1400;
          display: flex;
          flex-direction: column;
          gap: 16px;
          pointer-events: auto;
        }

        .mobile-drawer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 12% 20%, rgba(15, 129, 153, 0.12), transparent 28%),
                            radial-gradient(circle at 90% 14%, rgba(196, 160, 67, 0.18), transparent 24%);
          pointer-events: none;
        }

        .drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .drawer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #0a2d3c;
          font-weight: 800;
        }

        .close-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(145deg, #eef3f7, #ffffff);
          border: 1px solid rgba(12, 60, 78, 0.12);
          display: grid;
          place-items: center;
          position: relative;
        }

        .close-btn span {
          position: absolute;
          width: 18px;
          height: 2px;
          background: #0a4f60;
          border-radius: 999px;
        }

        .close-btn span:nth-child(1) {
          transform: rotate(45deg);
        }

        .close-btn span:nth-child(2) {
          transform: rotate(-45deg);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .mobile-link {
          padding: 14px 14px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(12, 60, 78, 0.08);
          color: #0b3141;
          font-weight: 700;
          letter-spacing: 0.02em;
          box-shadow: 0 8px 16px rgba(8, 24, 36, 0.08);
          transition: all 0.22s ease;
          position: relative;
        }

        .mobile-link:hover {
          transform: translateX(4px);
          border-color: #0f8199;
          color: #0f8199;
        }

        .mobile-link.active {
          border-color: #0f8199;
          background: linear-gradient(90deg, rgba(15, 129, 153, 0.08), rgba(196, 160, 67, 0.08));
          color: #0a4f60;
          box-shadow: 0 10px 22px rgba(12, 80, 110, 0.12);
        }

        .mobile-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 70%;
          border-radius: 0 4px 4px 0;
          background: linear-gradient(180deg, #0f8199, #c6a043);
        }

        .drawer-slider {
          margin-top: 8px;
          padding: 12px 10px 6px;
          background: linear-gradient(145deg, #f8fbfc, #eef4f7);
          border-radius: 14px;
          border: 1px solid rgba(12, 60, 78, 0.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,24,36,0.08);
          position: relative;
          overflow: hidden;
        }

        .slider-head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .slider-label {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #0a2d3c;
        }

        .slider-window {
          min-height: 96px;
          position: relative;
        }

        .slider-card {
          background: #ffffff;
          border: 1px solid rgba(12, 60, 78, 0.08);
          border-radius: 12px;
          padding: 10px 12px;
          box-shadow: 0 8px 18px rgba(8, 24, 36, 0.08);
        }

        .slider-category {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(15, 129, 153, 0.12);
          color: #0a4f60;
          font-weight: 700;
          font-size: 0.78rem;
          margin-bottom: 6px;
        }

        .slider-title {
          font-size: 1rem;
          margin: 0 0 4px;
          color: #0a2d3c;
        }

        .slider-summary {
          font-size: 0.9rem;
          color: #4f6b7a;
          margin: 0;
          line-height: 1.4;
        }

        .slider-dots {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          justify-content: center;
        }

        .slider-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(10, 79, 96, 0.25);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .slider-dots .dot.active {
          width: 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0f8199, #c6a043);
        }

        .drawer-footnote {
          margin-top: auto;
          font-size: 0.85rem;
          color: #4f6b7a;
          padding: 10px 6px 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 980px) {
          .desktop-nav {
            display: none;
          }

          .burger {
            display: grid;
          }

          .header-surface {
            grid-template-columns: auto 1fr;
            gap: 10px;
            justify-content: center;
            width: min(94vw, 640px);
          }

          .action-area {
            margin-left: auto;
          }

          .brand-area {
            justify-content: center;
            width: 100%;
          }

          .brand-copy {
            display: none;
          }

          .logo-badge {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 640px) {
          .top-shell {
            padding: 10px 12px 0;
          }

          .header-surface {
            height: 66px;
            padding: 0 12px;
            width: calc(100% - 32px);
            grid-template-columns: 1fr auto;
            position: relative;
          }

          .burger.anchor {
            left: 12px;
          }

          .action-area {
            gap: 8px;
            justify-content: flex-end;
          }

          .brand-area {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            justify-content: center;
          }

          .brand-link {
            justify-content: center;
          }

          .icon-btn {
            width: 34px;
            height: 34px;
          }

          .avatar-shell {
            display: none;
          }

          .logo-badge {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
