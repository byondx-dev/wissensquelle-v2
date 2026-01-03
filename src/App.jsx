import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MadrasahPage from './pages/MadrasahPage';
import DarAlIftaPage from './pages/DarAlIftaPage';
import ScholarsPage from './pages/ScholarsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import FAQ from './components/FAQ';
import RegistrationPage from './pages/RegistrationPage';
import FatawaDetailPage from './pages/FatawaDetailPage';
import CoursesPage from './pages/CoursesPage';
import MadrasahAsSunnahPage from './pages/MadrasahAsSunnahPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 240);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <ScrollToTop />
      {!isLogin && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fatawa" element={<DarAlIftaPage />} />
          <Route path="/fatawa/:id" element={<FatawaDetailPage />} />
          <Route path="/madrasah" element={<MadrasahPage />} />
          <Route path="/madrasah-as-sunnah" element={<MadrasahAsSunnahPage />} />
          <Route path="/kurse" element={<CoursesPage />} />
          <Route path="/dar-al-ifta" element={<DarAlIftaPage />} />
          <Route path="/scholars" element={<ScholarsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </main>

      {!isLogin && <FAQ />}

      {!isLogin && showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          aria-label="Nach oben scrollen"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}

      {!isLogin && (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-col">
                <h3 className="footer-title">Manba' al-'Ilm</h3>
                <p>Authentisches islamisches Wissen für die deutschsprachige Gesellschaft.</p>
              </div>
              <div className="footer-col">
                <h4 className="footer-heading">Links</h4>
                <ul className="footer-links">
                  <li><a href="/">Startseite</a></li>
                  <li><a href="/kurse">Kurse</a></li>
                  <li><a href="/madrasah">Madrasah</a></li>
                  <li><a href="/madrasah-as-sunnah">Madrasah As-Sunnah</a></li>
                  <li><a href="/contact">Kontakt</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4 className="footer-heading">Rechtliches</h4>
                <ul className="footer-links">
                  <li><a href="#">Impressum</a></li>
                  <li><a href="#">Datenschutz</a></li>
                  <li><a href="#">AGB</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Manba' al-'Ilm - Wissensquelle. Alle Rechte vorbehalten.</p>
            </div>
          </div>
          <style>{`
            .back-to-top {
              position: fixed;
              right: 22px;
              bottom: 22px;
              width: 48px;
              height: 48px;
              border-radius: 14px;
              border: 1px solid rgba(12,60,78,0.12);
              background: linear-gradient(145deg, #ffffff, #eef3f7);
              box-shadow: 0 10px 24px rgba(8,24,36,0.15);
              color: #0a4f60;
              font-weight: 800;
              font-size: 1.1rem;
              cursor: pointer;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
              z-index: 1100;
            }

            .back-to-top:hover {
              transform: translateY(-2px);
              box-shadow: 0 14px 28px rgba(8,24,36,0.18);
            }

            .footer {
              background-color: var(--color-text-primary);
              color: #FFFFFF;
              padding: var(--spacing-lg) 0 var(--spacing-md);
              margin-top: var(--spacing-xl);
            }
            
            .footer-content {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: var(--spacing-lg);
              margin-bottom: var(--spacing-lg);
            }
            
            .footer-title {
              font-family: 'Amiri', serif;
              font-size: 1.5rem;
              margin-bottom: var(--spacing-sm);
              color: var(--color-gold-start);
            }
            
            .footer-heading {
              font-size: 1.1rem;
              margin-bottom: var(--spacing-sm);
              color: var(--color-gold-start);
            }
            
            .footer-links {
              list-style: none;
            }
            
            .footer-links li {
              margin-bottom: var(--spacing-xs);
            }
            
            .footer-links a {
              color: #E5E0D8;
              font-size: 0.9rem;
            }
            
            .footer-links a:hover {
              color: var(--color-gold-start);
            }
            
            .footer-bottom {
              text-align: center;
              padding-top: var(--spacing-md);
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              font-size: 0.85rem;
              color: #999;
            }
          `}</style>
        </footer>
      )}
    </div>
  );
}

export default App;
