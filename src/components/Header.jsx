import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import logoImg from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fatawaIndex, setFatawaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchBoxRef = useRef(null);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const closeButtonRef = useRef(null);

  const navLinks = useMemo(() => [
    { name: 'Startseite', href: '/' },
    { name: 'Dār al-Iftā’', href: '/dar-al-ifta' },
    { name: 'Madrasah', href: '/madrasah' },
    { name: 'Kurse', href: '/kurse' },
    { name: 'Gelehrte', href: '/scholars' },
    { name: 'Artikel', href: '/articles' },
  ], []);

  const searchIndex = useMemo(() => {
    const madrasahCourses = [
      { id: 'vorklasse', title: 'Vorklasse', desc: 'Grundlagen, Adab, Aqīdah, Fiqh, Tajwīd, Sīrah', path: '/madrasah#vorklasse' },
      { id: 'imam-kurs', title: 'Imam-Kurs', desc: 'Unterrichten, Arabisch, Fiqh, Aqīdah, Führung', path: '/madrasah#imam-kurs' },
      { id: 'komparative-religionen', title: 'Komparative Religionen', desc: 'Vergleichende Analyse, Ideologien, Daʿwah', path: '/madrasah#komparative-religionen' },
      { id: 'dawah-kurs', title: 'Daʿwah-Kurs', desc: 'Ausbildung zum Dāʿī, Umgang mit Altersgruppen', path: '/madrasah#dawah-kurs' },
      { id: 'alim-kurs', title: 'ʿĀlim-Kurs', desc: 'Intensive islamische Wissenschaften, Weg zum Gelehrtentum', path: '/madrasah#alim-kurs' },
    ];

    const externalCourses = [
      { title: "Qur'an Rezitation Essentials", desc: 'Tajwīd Basics, Aussprache-Coaching', path: '/kurse#courses' },
      { title: 'Tafsir Journey', desc: 'Ausgewählte Suren, Reflektionen & Anwendungen', path: '/kurse#courses' },
      { title: 'Aqida Foundations', desc: 'Grundlagen der Glaubenslehre', path: '/kurse#courses' },
    ];

    const fatawaItems = [
      { title: 'Ist Bitcoin im Islam erlaubt?', path: '/dar-al-ifta#fatawa', section: 'Fatāwā', desc: 'Kryptowährungen und Finanzinstrumente' },
      { title: 'Gebet auf der Arbeit verrichten', path: '/dar-al-ifta#fatawa', section: 'Fatāwā', desc: 'Salah im Berufsalltag' },
      { title: 'Heiraten ohne Wali?', path: '/dar-al-ifta#fatawa', section: 'Fatāwā', desc: 'Rolle des Vormunds in der Ehe' },
    ];

    const enrollmentSteps = [
      { title: 'Anmeldung Madrasah', path: '/madrasah#enrollment', desc: 'Kurs wählen und registrieren' },
      { title: 'Benachrichtigung', path: '/madrasah#enrollment', desc: 'Termin für Vorstellungsgespräch erhalten' },
      { title: 'Vorstellungsgespräch', path: '/madrasah#enrollment', desc: 'Abläufe, Erwartungen, Eignung' },
      { title: 'Start', path: '/madrasah#enrollment', desc: 'Zuteilung zur Klasse und Zeiten abstimmen' },
    ];

    const base = [
      {
        id: 'login',
        title: 'Login',
        sectionTitle: 'Zugang',
        path: '/login',
        description: 'Melde dich an, um auf dein Profil zuzugreifen.',
        tags: ['login', 'anmeldung', 'zugang', 'auth'],
        keywords: ['login', 'anmelden', 'zugang', 'auth'],
      },
      {
        id: 'madrasah',
        title: 'Madrasah',
        sectionTitle: 'Studienpfad',
        path: '/madrasah#madrasah',
        description: 'Strukturierter Weg zu islamischem Wissen.',
        tags: ['madrasah', 'studium', 'kurse'],
        keywords: ['madrasah', 'kurse', 'studium'],
      },
      {
        id: 'dar',
        title: 'Dār al-Iftā’',
        sectionTitle: 'Gremium',
        path: '/dar-al-ifta#dar-al-ifta',
        description: 'Gremium und Mandat kennenlernen.',
        tags: ['gremium', 'iftā'],
        keywords: ['iftā', 'gremium'],
      },
      {
        id: 'scholars',
        title: 'Gelehrte',
        sectionTitle: 'Team',
        path: '/scholars#scholars',
        description: 'Team und Profile der Gelehrten.',
        tags: ['team', 'gelehrte'],
        keywords: ['gelehrte', 'team'],
      },
      {
        id: 'about',
        title: 'Über uns',
        sectionTitle: 'Info',
        path: '/about',
        description: 'Mehr über das Projekt.',
        tags: ['about', 'info'],
        keywords: ['about', 'info'],
      },
      {
        id: 'contact',
        title: 'Kontakt',
        sectionTitle: 'Kontakt',
        path: '/contact',
        description: 'Nimm Kontakt auf und stelle deine Anfrage.',
        tags: ['kontakt', 'frage'],
        keywords: ['kontakt', 'anfrage'],
      },
      {
        id: 'register',
        title: 'Registrierung',
        sectionTitle: 'Formular',
        path: '/register',
        description: 'Anmeldeformular für Schüler/innen.',
        tags: ['registrierung', 'anmeldung'],
        keywords: ['registrierung', 'anmeldung', 'formular'],
      },
    ];

    const courseEntries = madrasahCourses.map((c) => ({
      id: c.id,
      title: c.title,
      sectionTitle: 'Madrasah Kurse',
      path: c.path,
      description: c.desc,
      tags: ['kurs', 'kurse', 'madrasah'],
      keywords: [c.title, 'kurs', 'kurse', 'madrasah'],
    }));

    const extCourseEntries = externalCourses.map((c, idx) => ({
      id: `ext-${idx}`,
      title: c.title,
      sectionTitle: 'Externe Kurse',
      path: c.path,
      description: c.desc,
      tags: ['externe kurse', 'kurs', 'kurse'],
      keywords: [c.title, 'kurs', 'kurse'],
    }));

    const fatawaEntries = fatawaItems.map((f) => ({
      id: f.title,
      title: f.title,
      sectionTitle: f.section,
      path: f.path,
      description: f.desc,
      tags: ['fatwa', 'frage', 'antwort'],
      keywords: [f.title, 'fatwa', 'frage'],
    }));

    const enrollmentEntries = enrollmentSteps.map((s, idx) => ({
      id: `enroll-${idx}`,
      title: s.title,
      sectionTitle: 'Madrasah Anmeldung',
      path: s.path,
      description: s.desc,
      tags: ['anmeldung', 'madrasah', 'schritt'],
      keywords: [s.title, 'anmeldung', 'schritt'],
    }));

    return [...base, ...courseEntries, ...extCourseEntries, ...fatawaEntries, ...enrollmentEntries];
  }, []);

  const isSolidHeader = useMemo(() => {
    const solidPaths = ['/dar-al-ifta', '/madrasah', '/kurse', '/scholars'];
    return solidPaths.some((path) => location.pathname.startsWith(path));
  }, [location.pathname]);

  const fatawaSlides = [
    {
      id: 'bitcoin',
      title: 'Ist Bitcoin im Islam erlaubt?',
      category: 'Wirtschaft & Finanzen',
      summary: 'Kryptowährungen im Lichte moderner Finanzinstrumente und islamischer Prinzipien.',
    },
    {
      id: 'arbeit-gebet',
      title: 'Gebet auf der Arbeit verrichten',
      category: 'Glaube & Gottesdienste',
      summary: 'Wie sich Salah und Berufsalltag vereinbaren lassen – praktische Erleichterungen.',
    },
    {
      id: 'wali',
      title: 'Heiraten ohne Wali?',
      category: 'Ehe & Familie',
      summary: 'Voraussetzungen einer gültigen Ehe und die Rolle des Vormunds im Detail.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isMenuOpen && !isSearchOpen) return;
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;
    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    setTimeout(scrollToHash, 60);
  }, [location]);
  /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */

  useEffect(() => {
    if (isMenuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(0);
    const tickMs = 80;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += tickMs;
      const pct = Math.min((elapsed / 3500) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        elapsed = 0;
        setProgress(0);
        setFatawaIndex((prev) => (prev + 1) % fatawaSlides.length);
      }
    }, tickMs);
    return () => clearInterval(interval);
  }, [isMenuOpen, fatawaSlides.length]);

  const siteTitle =
    document?.title && document.title !== 'Vite + React'
      ? document.title
      : 'Wissensquelle';

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setQuery('');
    setHighlightIndex(0);
  };

  useEffect(() => {
    if (isSearchOpen && searchBoxRef.current) {
      const input = searchBoxRef.current.querySelector('input');
      input?.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setQuery('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (isSearchOpen && searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [isSearchOpen]);

  const searchItems = (items, rawQuery) => {
    const normalize = (str = '') => str.toLowerCase().trim();
    const expandToken = (token) => {
      const t = normalize(token);
      const stem = t.replace(/(en|er|e|s)$/u, '');
      const extra = [];
      if (stem && stem !== t) extra.push(stem);
      return [t, ...extra];
    };

    const q = normalize(rawQuery);
    if (!q) return items.slice(0, 8);
    const tokens = q
      .split(/\s+/u)
      .filter(Boolean)
      .flatMap(expandToken);

    const scoreItem = (item) => {
      let score = 0;
      const { title = '', sectionTitle = '', description = '', tags = [], keywords = [] } = item;
      const hay = {
        title: normalize(title),
        sectionTitle: normalize(sectionTitle),
        description: normalize(description),
        tags: tags.map(normalize),
        keywords: keywords.map(normalize),
      };

      tokens.forEach((tk) => {
        if (!tk) return;
        const pref = (str) => str.startsWith(tk) || tk.startsWith(str);
        const cont = (str) => str.includes(tk) || tk.includes(str);

        if (pref(hay.title)) score += 8;
        else if (cont(hay.title)) score += 5;

        if (hay.tags.some(pref)) score += 6;
        else if (hay.tags.some(cont)) score += 4;

        if (hay.keywords.some(pref)) score += 6;
        else if (hay.keywords.some(cont)) score += 4;

        if (pref(hay.sectionTitle)) score += 3;
        else if (cont(hay.sectionTitle)) score += 2;

        if (cont(hay.description)) score += 1;
      });

      return score;
    };

    return items
      .map((item) => ({ item, score: scoreItem(item) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((x) => x.item);
  };

  useEffect(() => {
    const handle = setTimeout(() => {
      setSearchResults(searchItems(searchIndex, query));
      setHighlightIndex(0);
    }, 180);
    return () => clearTimeout(handle);
  }, [query, searchIndex]);

  const handleSelect = (item) => {
    if (!item) return;
    const [path, hash] = item.path.split('#');
    const targetPath = path || '/';
    navigate(hash ? `${targetPath}#${hash}` : targetPath);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
    setIsSearchOpen(false);
    setQuery('');
  };

  const handleKeyNav = (e) => {
    if (!isSearchOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((prev) => Math.min(prev + 1, Math.max(searchResults.length - 1, 0)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = searchResults[highlightIndex];
      if (item) handleSelect(item);
    }
  };

  return (
    <header className={`top-shell ${isScrolled || isSolidHeader ? 'scrolled' : ''}`}>
      <div className="header-surface">
        <button
          className="burger icon-btn"
          type="button"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
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
          <div className="search-wrap" ref={searchBoxRef}>
            <button
              className="icon-btn"
              type="button"
              aria-label="Suche öffnen"
              aria-expanded={isSearchOpen}
              onClick={toggleSearch}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6" strokeWidth="1.8" />
                <line x1="16" y1="16" x2="21" y2="21" strokeWidth="1.8" />
              </svg>
            </button>
            <AnimatePresence>
              {isSearchOpen && (
                <>
                  <motion.div
                    className="search-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsSearchOpen(false)}
                  />
                  <motion.div
                    className="search-dropdown"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <input
                      type="text"
                      placeholder="Suchen..."
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setHighlightIndex(0);
                      }}
                      onKeyDown={(e) => handleKeyNav(e)}
                    />
                    <div className="search-results">
                      {searchResults.length === 0 && (
                        <div className="search-empty">Keine Treffer</div>
                      )}
                      {searchResults.map((item, idx) => (
                        <button
                          key={item.id}
                          type="button"
                          className={`search-row ${idx === highlightIndex ? 'active' : ''}`}
                          onMouseEnter={() => setHighlightIndex(idx)}
                          onClick={() => handleSelect(item)}
                        >
                          <div className="row-title">{item.title}</div>
                          <div className="row-section">{item.sectionTitle}</div>
                          <div className="row-desc">{item.description}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <button
            className="icon-btn theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Design wechseln"
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
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
                <div style={{ height: '8px' }} />
                <Link
                  to="/register"
                  className="mobile-register-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Madrasah Anmeldung
                </Link>
              </nav>

              <div className="drawer-slider" aria-label="Aktuelle Fatāwā">
                <div className="slider-head">
                  <span className="slider-label">Neueste Fatāwā</span>
                </div>
                <div className="slider-window">
                  <AnimatePresence mode="wait">
                    <Link
                      to="/dar-al-ifta#fatawa"
                      className="slider-card-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
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
                    </Link>
                  </AnimatePresence>
                  <div className="slider-progress" role="presentation">
                    <div className="slider-progress-bar" style={{ width: `${progress}%` }} />
                  </div>
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
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background 0.3s ease, box-shadow 0.3s ease;
          background: transparent;
        }

        .top-shell.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        [data-theme="dark"] .top-shell.scrolled {
          background: rgba(11, 14, 17, 0.95);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }

        .header-surface {
          max-width: 1400px;
          margin: 0 auto;
          height: 80px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          padding: 0 24px;
          gap: 24px;
        }

        /* Adjust colors based on scroll state if needed, 
           currently keeping dark text everywhere per design implication 
           or user might want white text on transparent. 
           Assuming dark text is fine as heroes are dark but header is on top. 
           actually heroes are dark, so transparent header needs white text?
           User said "transparent then white". Usually implies white text on transparent, dark on white.
           However, user didn't explicitly ask for text color change.
           For now, I will keep text dark as per previous design, 
           BUT if hero is dark (which it is), dark text on transparent is invisible.
           I will implement text color switching logic in CSS.
        */

        .brand-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #0b3141;
          transition: color 0.3s ease;
        }

        [data-theme="dark"] .brand-link {
          color: #fff;
        }

        .top-shell.scrolled .brand-link {
          color: #0b3141;
        }

        [data-theme="dark"] .top-shell.scrolled .brand-link {
          color: #ededed;
        }

        .brand-title {
          font-weight: 800;
          font-size: 1.2rem;
          color: inherit;
        }

        .brand-sub {
          font-size: 0.75rem;
          color: #4f6b7a;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        [data-theme="dark"] .brand-sub {
          color: rgba(255,255,255,0.8);
        }

        .top-shell.scrolled .brand-sub {
          color: #4f6b7a;
        }

        [data-theme="dark"] .top-shell.scrolled .brand-sub {
          color: #a0a0a0;
        }

        .nav-link {
          position: relative;
          color: #50616d;
          font-weight: 600;
          letter-spacing: 0.04em;
          font-size: 0.97rem;
          padding: 0.35rem 0.45rem;
          transition: color 0.3s ease;
        }

        [data-theme="dark"] .nav-link {
          color: rgba(255,255,255,0.85);
        }

        .top-shell.scrolled .nav-link {
          color: #50616d;
        }

        [data-theme="dark"] .top-shell.scrolled .nav-link {
          color: #a0a0a0;
        }

        .nav-link:hover, .nav-link.active {
          color: #0d6a7d;
        }

        [data-theme="dark"] .nav-link:hover, 
        [data-theme="dark"] .nav-link.active {
          color: #fff;
        }
        
        .top-shell.scrolled .nav-link:hover, 
        .top-shell.scrolled .nav-link.active {
          color: #0d6a7d;
        }

        [data-theme="dark"] .top-shell.scrolled .nav-link:hover, 
        [data-theme="dark"] .top-shell.scrolled .nav-link.active {
          color: #fff;
        }
        
        .icon-btn {
          color: #50616d;
          transition: all 0.22s ease;
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid transparent;
          background: transparent;
        }

        .icon-btn:hover {
          color: #0d6a7d;
          background: rgba(15, 129, 153, 0.08);
          transform: translateY(-1px);
        }

        [data-theme="dark"] .icon-btn {
          color: rgba(255,255,255,0.85);
        }

        [data-theme="dark"] .icon-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
        }

        .icon-btn svg {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          fill: none;
        }

        .top-shell.scrolled .icon-btn {
          color: #50616d;
        }
        
        .top-shell.scrolled .icon-btn:hover {
           background: rgba(11, 49, 65, 0.08);
           color: #0f8199;
        }

        [data-theme="dark"] .top-shell.scrolled .icon-btn {
          color: #a0a0a0;
        }

        [data-theme="dark"] .top-shell.scrolled .icon-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Hide "old" burger styles */
        .burger {
          display: none;
        }
        @media (max-width: 960px) {
          .burger {
            display: grid;
            padding: 0;
            background: transparent;
            border: none;
            width: 40px;
            height: 40px;
            place-items: center;
            color: #0b3141;
          }
           [data-theme="dark"] .burger {
             color: #fff;
           }
          .top-shell.scrolled .burger {
            color: #0b3141;
          }
          [data-theme="dark"] .top-shell.scrolled .burger {
            color: #ededed;
          }
        }


        .brand-area {
          display: flex;
          align-items: center;
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



        .desktop-nav {
          display: flex;
          justify-content: center;
        }

        .nav-list {
          list-style: none;
          display: flex;
          gap: 14px;
          align-items: center;
          white-space: nowrap;
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
          position: relative;
          z-index: 2;
        }

        .search-wrap {
          position: relative;
        }

        .search-dropdown {
          position: fixed;
          top: 92px;
          left: 50%;
          transform: translateX(-50%);
          width: min(96vw, 1260px);
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 18px 40px rgba(12, 60, 78, 0.18);
          border: 1px solid rgba(12, 60, 78, 0.08);
          padding: 14px;
          z-index: 2000;
          overflow: hidden;
        }

        .search-dropdown input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #d9e2e8;
          background: #f5f7fb;
          font-size: 0.95rem;
        }

        .search-dropdown input:focus {
          outline: none;
          border-color: #0f8199;
          box-shadow: 0 0 0 3px rgba(15, 129, 153, 0.14);
        }

        .search-results {
          margin-top: 8px;
          max-height: 320px;
          overflow-y: auto;
          display: grid;
          gap: 6px;
        }

        .search-row {
          text-align: left;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: #fff;
          cursor: pointer;
        }

        .search-row:hover,
        .search-row.active {
          border-color: #d9e2e8;
          background: #f6fafc;
        }

        .row-title {
          font-weight: 700;
          color: #0a2533;
        }

        .row-section {
          font-size: 0.9rem;
          color: #4f6b7a;
        }

        .row-desc {
          font-size: 0.88rem;
          color: #6b7380;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .search-empty {
          padding: 10px;
          color: #6b7380;
          font-size: 0.95rem;
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
          margin: 2px 0;
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

        [data-theme="dark"] .mobile-drawer {
          background: linear-gradient(180deg, #151A20 0%, #0B0E11 100%);
          box-shadow: 10px 0 30px rgba(0, 0, 0, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
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

        [data-theme="dark"] .drawer-brand {
          color: #ededed;
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

        [data-theme="dark"] .mobile-link {
          background: #1F252D;
          border-color: rgba(255, 255, 255, 0.08);
          color: #ededed;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

        .mobile-register-btn {
          display: block;
          text-align: center;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0f8199 0%, #0a4f60 100%);
          color: #ffffff;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-decoration: none;
          box-shadow: 0 8px 16px rgba(15, 129, 153, 0.2);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .mobile-register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(15, 129, 153, 0.3);
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

        [data-theme="dark"] .slider-card {
          background: #1F252D;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
        }

        .slider-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
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

        [data-theme="dark"] .slider-title {
          color: #ededed;
        }

        .slider-summary {
          font-size: 0.9rem;
          color: #4f6b7a;
          margin: 0;
          line-height: 1.4;
        }

        .slider-progress {
          height: 6px;
          border-radius: 999px;
          background: rgba(12, 60, 78, 0.12);
          overflow: hidden;
          margin-top: 10px;
        }

        .slider-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #0f8199, #c6a043);
          border-radius: 999px;
          transition: width 0.12s linear;
        }

        .drawer-footnote {
          margin-top: auto;
          font-size: 0.85rem;
          color: #4f6b7a;
          padding: 10px 6px 0;
          position: relative;
          z-index: 1;
        }

        [data-theme="dark"] .drawer-footnote {
          color: #888888;
        }

        @media (max-width: 1100px) {
          .desktop-nav {
            display: none;
          }

          .burger {
            display: grid;
            position: relative;
            z-index: 20;
            cursor: pointer;
            pointer-events: auto;
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

          .search-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(8, 24, 36, 0.6);
            backdrop-filter: blur(4px);
            z-index: 1050;
          }

          .search-dropdown {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) !important; 
            width: calc(100% - 40px);
            max-width: 400px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            margin: 0;
            z-index: 2000;
          }

          .search-dropdown input {
            padding: 14px 16px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 960px) {
          .header-surface {
             padding: 0 16px;
             height: 70px;
          }
           .nav-list { display: none; } /* Mobile drawer handles this */
        }
      `}</style>
    </header >
  );
};

export default Header;
