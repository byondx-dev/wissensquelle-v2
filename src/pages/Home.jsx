import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import heroBg from '../assets/hero-bg.png';
import heroDarkBg from '../assets/hero-dark-desert.png';
import darLogo from '../assets/daralifta-logo.jpg';
import madrasahLogo from '../assets/madrasah-logo.jpg';


const Home = () => {

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <motion.div
          className="hero-orb orb-one"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.div
          className="hero-orb orb-two"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
        />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Manba&apos; al-&apos;Ilm</span>
            <h1>Authentisches Wissen im Rhythmus Ihrer Zeit.</h1>
            <p className="hero-subtitle">
              Fatāwā, Studiengänge und verlässliche Gelehrte – klar strukturiert, ästhetisch präsentiert
              und mit Liebe zum Detail aufbereitet.
            </p>
            <div className="hero-actions">
              <Link to="/madrasah" className="btn btn-primary">Madrasah starten</Link>
              <Link to="/dar-al-ifta#fatawa" className="btn btn-secondary">Fatwā stellen</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            className="hero-visual"
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="visual-layer ring ring-one"></div>
            <div className="visual-layer ring ring-two"></div>
            <div className="visual-layer ring ring-three"></div>
            <div className="visual-layer pulse-dot"></div>
          </motion.div>
        </div>
      </section>



      {/* Core Areas */}
      {/* 1. Dar al-Ifta Section */}
      <section className="section-ifta" id="departments">
        <div className="section-content">
          <div className="split-layout">
            <div className="text-col">
              <span className="eyebrow-pill">Recht & Beratung</span>
              <h2>Dar al-Ifta</h2>
              <p className="lead">
                Authentische fatwas und islamische Rechtsberatung für Ihr tägliches Leben.
                Basierend auf dem Koran und der Sunnah, kontextbezogen für die heutige Zeit.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="check-icon">✓</span> Qualifizierte Muftis
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> Zeitgemäße Antworten
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span> Vertrauliche Beratung
                </div>
              </div>
              <Link to="/dar-al-ifta" className="btn-modern btn-gold">
                <span>Fatwa anfragen</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="visual-col">
              <div className="visual-card ifta-visual">
                <div className="visual-glow"></div>
                <img src={darLogo} alt="Dar al-Ifta" className="visual-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Madrasah Section */}
      <section className="section-madrasah">
        <div className="section-content">
          <div className="split-layout reverse">
            <div className="text-col">
              <span className="eyebrow-pill">Online Studium</span>
              <h2>Wissensquelle Madrasah</h2>
              <p className="lead">
                Ihr Weg zu fundiertem islamischen Wissen. Strukturierte Online-Kurse von den Grundlagen bis zur Ijazah.
              </p>
              <div className="stats-row">
                <div className="stat-mini">
                  <strong>10+</strong>
                  <span>Fächer</span>
                </div>
                <div className="stat-mini">
                  <strong>Online</strong>
                  <span>Live &amp; Recorded</span>
                </div>
              </div>
              <Link to="/madrasah" className="btn-modern btn-blue">
                <span>Zum Studium</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="visual-col">
              <div className="visual-card madrasah-visual">
                <div className="visual-glow blue-glow"></div>
                <img src={madrasahLogo} alt="Madrasah" className="visual-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. External Courses Section */}
      <section className="section-courses">
        <div className="section-content text-center">
          <span className="eyebrow-pill">Weiterbildung</span>
          <h2>Externe Kurse &amp; Seminare</h2>
          <p className="subtitle-center">
            Flexible Lernangebote unserer Partner und Gastdozenten. <br />Perfekt für die berufliche und persönliche Weiterentwicklung.
          </p>

          <div className="courses-preview-grid">
            <div className="preview-card">
              <div className="card-icon course-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6.253v13m0-13C8.12 4.164 4 4.164 4 4.164M12 6.253c3.88 0 8-2.09 8-2.09M4 4.164c0 7.12 4.764 11.196 8 11.196M16 4.164v10.5M12 17.449c3.236 0 8-4.076 8-11.196M4 22h16" /></svg>
              </div>
              <h4>Themendossiers</h4>
              <p>Vertiefende Einblicke in spezielle Themengebiete.</p>
            </div>
            <div className="preview-card">
              <div className="card-icon course-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h4>Webinare</h4>
              <p>Interaktive Live-Sessions zu aktuellen Fragen.</p>
            </div>
            <div className="preview-card">
              <div className="card-icon course-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h4>Workshops</h4>
              <p>Praxisnahe Übungen und Skill-Building.</p>
            </div>
          </div>

          <Link to="/kurse" className="btn-modern btn-outline">
            <span>Alle Kurse ansehen</span>
          </Link>
        </div>
      </section>

      {/* 4. Scholars Section */}
      <section className="section-scholars">
        <div className="section-content">
          <div className="split-layout with-overlap">
            <div className="text-col">
              <span className="eyebrow-pill">Gemeinschaft</span>
              <h2>Unsere Gelehrten</h2>
              <p className="lead">
                Authentisches Wissen erfordert authentische Lehrer.
                Lernen Sie die Menschen hinter Wissensquelle kennen.
              </p>
              <Link to="/scholars" className="btn-modern btn-dark">
                <span>Zum Team</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="visual-col">
              <div className="scholars-grid-preview">
                <div className="scholar-avatar s1"></div>
                <div className="scholar-avatar s2"></div>
                <div className="scholar-avatar s3"></div>
                <div className="scholar-text">&&<br />Many More</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 140px 0 var(--spacing-lg);
          display: flex;
          align-items: center;
          background: linear-gradient(120deg, rgba(249, 247, 242, 0.95) 0%, rgba(255, 255, 255, 0.92) 50%, rgba(249, 247, 242, 0.92) 100%);
          color: var(--color-text-primary);
        }

        /* REBUILT SECTIONS CSS */
        section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }

        .section-content {
           max-width: 1200px;
           margin: 0 auto;
           padding: 0 24px;
           position: relative;
           z-index: 2;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .split-layout.reverse {
           direction: rtl; /* Trick to swap columns visually */
        }
        
        .split-layout.reverse > * {
           direction: ltr; /* Reset text direction */
        }

        @media (max-width: 900px) {
          .split-layout, .split-layout.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            text-align: center;
            gap: 40px;
          }
        }

        .eyebrow-pill {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: var(--color-gold-end);
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.1);
          margin-bottom: 20px;
          border: 1px solid rgba(212, 175, 55, 0.15);
        }

        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--color-text-primary);
        }
        
        .lead {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 500px;
        }

        @media (max-width: 900px) {
           .lead { margin: 0 auto 32px; }
        }

        /* Buttons */
        .btn-modern {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .btn-modern svg {
           width: 20px;
           height: 20px;
           transition: transform 0.3s ease;
        }
        .btn-modern:hover svg {
           transform: translateX(4px);
        }

        .btn-gold {
          background: linear-gradient(135deg, var(--color-gold-start), var(--color-gold-end));
          color: #fff;
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
        }
        .btn-gold:hover {
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.3);
          transform: translateY(-2px);
        }

        .btn-blue {
          background: linear-gradient(135deg, #0F8199, #085566);
          color: #fff;
          box-shadow: 0 10px 20px rgba(15, 129, 153, 0.2);
        }
        .btn-blue:hover {
           box-shadow: 0 15px 30px rgba(15, 129, 153, 0.3);
           transform: translateY(-2px);
        }
        
        .btn-outline {
           background: transparent;
           border: 2px solid var(--color-border);
           color: var(--color-text-primary);
        }
        .btn-outline:hover {
           border-color: var(--color-gold-start);
           color: var(--color-gold-start);
        }
        
        .btn-dark {
           background: var(--color-text-primary);
           color: var(--color-bg-main);
        }
        .btn-dark:hover {
           background: var(--color-gold-start);
           color: #fff;
           transform: translateY(-2px);
        }

        /* Feature Lists */
        .feature-list {
          margin-bottom: 32px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        
        .check-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(46, 204, 113, 0.15);
          color: #27ae60;
          display: grid;
          place-items: center;
          font-size: 0.8rem;
          font-weight: 800;
        }

        /* Stats */
        .stats-row {
          display: flex;
          gap: 32px;
          margin-bottom: 32px;
        }
        
        @media (max-width: 900px) {
           .stats-row { justify-content: center; }
        }

        .stat-mini strong {
           display: block;
           font-size: 1.8rem;
           font-weight: 800;
           color: var(--color-text-primary);
        }
        .stat-mini span {
           font-size: 0.85rem;
           color: var(--color-text-secondary);
           text-transform: uppercase;
           letter-spacing: 1px;
        }

        /* Visuals */
        .visual-card {
           position: relative;
           background: var(--color-surface);
           border-radius: 30px;
           padding: 60px;
           display: flex;
           justify-content: center;
           align-items: center;
           box-shadow: var(--shadow-xl);
           border: 1px solid var(--color-border);
           height: 400px;
        }
        
        .visual-img {
           max-width: 80%;
           max-height: 80%;
           object-fit: contain;
           z-index: 2;
        }
        
        .visual-glow {
           position: absolute;
           inset: 0;
           background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 70%);
           z-index: 1;
        }
        .visual-glow.blue-glow {
           background: radial-gradient(circle at 50% 50%, rgba(15, 129, 153, 0.15), transparent 70%);
        }



        /* Specific Sections */
        .section-ifta { background: var(--color-bg-main); }
        .section-madrasah { background: var(--color-bg-alt); }
        
        /* Courses Section */
        .section-courses {
           background: var(--color-bg-main);
           text-align: center;
        }
        
        .subtitle-center {
           max-width: 600px;
           margin: 0 auto 60px;
           color: var(--color-text-secondary);
           font-size: 1.1rem;
           line-height: 1.6;
        }
        
        .courses-preview-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 24px;
           margin-bottom: 50px;
           text-align: left;
        }
        
        @media (max-width: 800px) {
           .courses-preview-grid { grid-template-columns: 1fr; }
        }
        
        .preview-card {
           background: var(--color-surface);
           padding: 32px;
           border-radius: 20px;
           border: 1px solid var(--color-border);
           transition: transform 0.3s ease;
        }
        .preview-card:hover { 
           transform: translateY(-5px);
           border-color: var(--color-gold-start);
        }
        
        .card-icon.course-icon {
           width: 50px;
           height: 50px;
           background: rgba(10, 79, 96, 0.1);
           color: #0A4F60;
           border-radius: 12px;
           display: grid;
           place-items: center;
           margin-bottom: 20px;
        }
        
        .preview-card h4 {
           font-size: 1.2rem;
           margin-bottom: 8px;
           color: var(--color-text-primary);
        }
        .preview-card p {
           font-size: 0.95rem;
           color: var(--color-text-secondary);
           line-height: 1.5;
        }

        /* Scholars Section */
        .section-scholars {
           background: var(--color-bg-alt);
        }
        
        .scholars-grid-preview {
           display: grid;
           grid-template-columns: repeat(2, 1fr);
           gap: 16px;
           position: relative;
        }
        
        .scholar-avatar {
           width: 100%;
           aspect-ratio: 1;
           background-color: #ddd;
           border-radius: 20px;
           background-size: cover;
           background-position: center;
        }
        .s1 { background-image: linear-gradient(135deg, #eee, #ccc); } /* Placeholders */
        .s2 { background-image: linear-gradient(135deg, #e0e0e0, #bdbdbd); }
        .s3 { background-image: linear-gradient(135deg, #f5f5f5, #d6d6d6); }
        
        .scholar-text {
           display: flex;
           align-items: center;
           justify-content: center;
           background: var(--color-gold-start);
           color: #fff;
           border-radius: 20px;
           font-weight: 700;
           text-align: center;
           line-height: 1.2;
           font-size: 1.2rem;
        }


        [data-theme="dark"] .hero {
           background: linear-gradient(120deg, #111111 0%, #050709 100%);
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: -20%;
          background: url(${heroBg}) center center / cover no-repeat;
          opacity: 0.6;
          mix-blend-mode: multiply;
          filter: saturate(1.05);
        }

        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        [data-theme="dark"] .hero::before {
          background: url(${heroDarkBg}) center bottom / cover no-repeat;
          opacity: 0.6;
          mix-blend-mode: normal;
          filter: none;
          animation: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 25%, rgba(212, 175, 55, 0.18), transparent 35%),
            radial-gradient(circle at 80% 18%, rgba(44, 36, 27, 0.12), transparent 35%),
            linear-gradient(90deg, rgba(249, 247, 242, 0.88) 0%, rgba(249, 247, 242, 0.38) 45%, rgba(249, 247, 242, 0.9) 100%);
          z-index: 0;
        }

        [data-theme="dark"] .hero::after {
          background:
            radial-gradient(circle at 18% 25%, rgba(212, 175, 55, 0.08), transparent 35%),
            linear-gradient(90deg, rgba(11, 14, 17, 0.95) 0%, rgba(11, 14, 17, 0.6) 45%, rgba(11, 14, 17, 0.95) 100%);
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(14px);
          z-index: 0;
          opacity: 0.7;
        }

        .orb-one {
          width: 420px;
          height: 420px;
          top: 10%;
          right: 4%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.24), transparent 65%);
        }

        .orb-two {
          width: 360px;
          height: 360px;
          bottom: 8%;
          left: 10%;
          background: radial-gradient(circle, rgba(26, 21, 16, 0.15), transparent 70%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: var(--spacing-xl);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-copy {
          max-width: 720px;
          padding: var(--spacing-sm);
          border-radius: 18px;
          position: relative;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-gold-end);
          margin-bottom: var(--spacing-sm);
        }

        .hero h1 {
          font-size: clamp(2.9rem, 5vw, 4.4rem);
          line-height: 1.05;
          margin-bottom: var(--spacing-md);
          letter-spacing: -0.4px;
          color: var(--color-text-primary);
          text-shadow: 0 12px 30px rgba(26, 21, 16, 0.1);
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.7;
          max-width: 90%;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
          margin-bottom: var(--spacing-md);
        }

        .stat {
          background: var(--color-surface);
          padding: var(--spacing-sm);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          backdrop-filter: blur(8px);
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .stat-label {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
        }

        .hero-visual {
          position: relative;
          min-height: 540px;
          display: grid;
          place-items: center;
          isolation: isolate;
        }

        .visual-layer.ring {
          position: absolute;
          border-radius: 50%;
          border: 1.4px solid rgba(26, 21, 16, 0.12);
          filter: drop-shadow(0 10px 40px rgba(0,0,0,0.1));
          animation: pulseRing 10s linear infinite;
          opacity: 0.95;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .ring-one { width: 420px; height: 420px; animation-delay: 0.2s; }
        .ring-two { width: 540px; height: 540px; border-color: rgba(212,175,55,0.35); animation-delay: 0.6s; }
        .ring-three { width: 660px; height: 660px; border-color: rgba(26,21,16,0.08); animation-delay: 1s; }

        .visual-layer.pulse-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--color-gold-gradient);
          border-radius: 50%;
          box-shadow:
            0 0 0 14px rgba(212,175,55,0.14),
            0 0 0 30px rgba(212,175,55,0.08);
          animation: pulseDot 2.8s ease-in-out infinite;
        }

        @keyframes pulseRing {
          0% { transform: translate(-50%, -50%) scale(0.98) rotate(0deg); opacity: 0.75; }
          50% { transform: translate(-50%, -50%) scale(1.02) rotate(2deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.98) rotate(0deg); opacity: 0.75; }
        }

        @keyframes pulseDot {
          0% { transform: scale(1); box-shadow: 0 0 0 12px rgba(212,175,55,0.12), 0 0 0 28px rgba(212,175,55,0.06); }
          50% { transform: scale(1.07); box-shadow: 0 0 0 18px rgba(212,175,55,0.18), 0 0 0 36px rgba(212,175,55,0.09); }
          100% { transform: scale(1); box-shadow: 0 0 0 12px rgba(212,175,55,0.12), 0 0 0 28px rgba(212,175,55,0.06); }
        }

        .hero-chip {
          position: absolute;
          padding: 0.8rem 1rem;
          border-radius: 18px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          backdrop-filter: blur(12px);
          color: var(--color-text-primary);
          min-width: 180px;
          box-shadow: var(--shadow-md);
        }

        .hero-chip strong {
          display: block;
          font-size: 1.05rem;
          margin: 0.1rem 0;
        }

        .hero-chip small {
          color: var(--color-text-secondary);
        }

        .hero-chip .chip-label {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.7rem;
          color: var(--color-text-light);
        }

        .chip-a { top: 18%; right: 6%; }
        .chip-b { bottom: 10%; left: 10%; }

        .glass {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border: 1px solid var(--color-border);
        }

        .hero-card {
          border-radius: 24px;
          padding: calc(var(--spacing-md) + 0.25rem);
          box-shadow: var(--shadow-xl);
          position: relative;
          overflow: hidden;
          color: var(--color-text-primary);
        }

        .card-badge {
          position: absolute;
          top: var(--spacing-sm);
          right: var(--spacing-sm);
          background: var(--color-gold-gradient);
          color: #fff;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-size: 0.8rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-card h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-xs);
        }

        .card-desc {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
          line-height: 1.6;
        }

        .card-meta {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: var(--spacing-sm);
          color: rgba(247,245,238,0.7);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .card-meta span {
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
        }
      `}</style>
    </div>
  );
};

export default Home;
