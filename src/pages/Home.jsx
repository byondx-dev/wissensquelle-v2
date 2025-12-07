import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import darLogo from '../assets/daralifta-logo.jpg';
import madrasahLogo from '../assets/madrasah-logo.jpg';
import aboutVisual from '../assets/about-visual.png';

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
              <Link to="/fatawa" className="btn btn-secondary">Fatwā stellen</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Fatāwā beantwortet</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Studienstufen</span>
              </div>
              <div className="stat">
                <span className="stat-number">12+</span>
                <span className="stat-label">Gelehrte & Dozenten</span>
              </div>
            </div>
            <div className="hero-trust">
              <span className="pill trust-pill">Kuratiert von Gelehrten</span>
              <span className="pill trust-pill">Klare Prozesse</span>
              <span className="pill trust-pill">Transparente Quellen</span>
            </div>
            <div className="scroll-cue">
              <span className="cue-line" />
              <span className="cue-text">Scroll</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            className="hero-visual"
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="visual-layer ring ring-one"></div>
            <div className="visual-layer ring ring-two"></div>
            <div className="visual-layer ring ring-three"></div>
            <div className="visual-layer pulse-dot"></div>

            <div className="hero-chip chip-a">
              <span className="chip-label">Signal</span>
              <strong>Fatwā live</strong>
              <small>Neue Anfrage eingetroffen</small>
            </div>
            <div className="hero-chip chip-b">
              <span className="chip-label">Status</span>
              <strong>Online</strong>
              <small>Gremium antwortet</small>
            </div>

            <div className="hero-card glass">
              <div className="card-badge">Aktuell</div>
              <h3>Fatwā des Tages</h3>
              <p className="card-desc">
                Wie lässt sich das Gebet am Arbeitsplatz pflichtgemäß verrichten, wenn kein Gebetsraum vorhanden ist?
              </p>
              <div className="card-meta">
                <span>48h Antwort</span>
                <span>Vertraulich</span>
                <span>Begründet</span>
              </div>
              <Link to="/fatawa" className="card-link">Antwort lesen →</Link>
              <div className="card-footer">Praxisnah, klar begründet, vertrauenswürdig.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Departments */}
      <section className="about" id="about">
        <div className="container about-shell">
          <div className="about-intro">
            <span className="about-pill">Über uns</span>
            <h2>Authentisches Wissen, kuratiert und begleitet.</h2>
            <p className="about-desc">
              Manba&apos; al-&apos;Ilm vereint Fatwā-Expertise und strukturiertes Studium. Unser Team arbeitet
              kuratiert, transparent und digital geführt – damit Erkenntnis zur gelebten Praxis wird.
            </p>
            <div className="about-tags">
              <span>Fatwā-Gremium</span>
              <span>Studienpfad</span>
              <span>Mentoring</span>
            </div>
            <div className="about-chip-row">
              <div className="about-chip">
                <span className="chip-kicker">Antwortzeit</span>
                <strong>Ø 48h</strong>
                <small>Fatwā-Bearbeitung</small>
              </div>
              <div className="about-chip">
                <span className="chip-kicker">Curriculum</span>
                <strong>4 Stufen</strong>
                <small>bis Ijazah</small>
              </div>
              <div className="about-chip">
                <span className="chip-kicker">Community</span>
                <strong>1000+</strong>
                <small>Lernende & Fragesteller</small>
              </div>
            </div>
            <div className="about-actions">
              <Link to="/dar-al-ifta" className="text-link">Zu Dār al-Iftā’ →</Link>
              <Link to="/madrasah" className="btn btn-primary btn-sm">Madrasah starten</Link>
            </div>
          </div>

          <div className="about-visual-stack">
            <div className="about-plate">
              <div className="plate-gradient"></div>
              <div className="plate-frame">
                <img src={aboutVisual} alt="Studierende und Gelehrte" />
              </div>
              <div className="plate-badge">Manba&apos; al-&apos;Ilm</div>
            </div>
            <div className="floating-grid">
              <div className="float-card gold">
                <span className="chip-kicker">Fatwā</span>
                <strong>Verlässlich</strong>
                <small>Transparente Quellen</small>
              </div>
              <div className="float-card light">
                <span className="chip-kicker">Madrasah</span>
                <strong>Live & Prüfungen</strong>
                <small>Digitale Lernplattform</small>
              </div>
              <div className="float-card outline">
                <span className="chip-kicker">Begleitung</span>
                <strong>Mentoren</strong>
                <small>Persönliche Betreuung</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments" id="departments">
        <div className="container dept-shell">
          <div className="dept-header">
            <span className="about-pill">Bereiche</span>
            <h2>Zwei Abteilungen, ein Weg: Orientierung & Bildung.</h2>
            <p className="about-desc">
              Dār al-Iftā’ liefert geprüfte Antworten, die Madrasah As-Sunnah baut Ihr Wissen systematisch auf.
              Beide greifen ineinander, damit Sie glauben, verstehen und handeln können.
            </p>
          </div>
          <div className="dept-lane">
            <div className="dept-card">
              <div className="dept-logo">
                <img src={darLogo} alt="Logo Dar al-Iftā’" />
              </div>
              <div className="dept-meta">
                <div className="kicker">Fatwā-Gremium</div>
                <h3>Dār al-Iftā’ Deutschland</h3>
                <p>Verlässliche Rechtsgutachten mit klaren Quellen und praxisnahen Empfehlungen.</p>
                <ul className="dept-list">
                  <li>Digitale Anfrage & vertrauliche Begleitung</li>
                  <li>Fiqh al-Aqalliyāt als Schwerpunkt</li>
                  <li>Transparente Quellenangaben</li>
                </ul>
                <Link to="/dar-al-ifta" className="pill-link">Mehr erfahren →</Link>
              </div>
            </div>

            <div className="dept-connector">
              <span className="dot"></span>
              <span className="line"></span>
              <span className="dot"></span>
            </div>

            <div className="dept-card alt">
              <div className="dept-logo">
                <img src={madrasahLogo} alt="Logo Madrasah As-Sunnah" />
              </div>
              <div className="dept-meta">
                <div className="kicker">Online-Studium</div>
                <h3>Madrasah As-Sunnah</h3>
                <p>Stufenweiser Lehrplan von den Grundlagen bis zur Ijazah – begleitet und geprüft.</p>
                <ul className="dept-list">
                  <li>Vier Lernstufen mit Outcomes</li>
                  <li>Live-Unterricht & Lernplattform</li>
                  <li>Prüfungen, Zertifikat, Ijazah</li>
                </ul>
                <Link to="/madrasah" className="pill-link">Studium ansehen →</Link>
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

        .hero::before {
          content: '';
          position: absolute;
          inset: -10%;
          background: url(${heroBg}) center center / cover no-repeat;
          opacity: 0.5;
          mix-blend-mode: multiply;
          filter: saturate(1.05);
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 25%, rgba(212, 175, 55, 0.18), transparent 35%),
            radial-gradient(circle at 80% 18%, rgba(44, 36, 27, 0.12), transparent 35%),
            linear-gradient(90deg, rgba(249, 247, 242, 0.92) 0%, rgba(249, 247, 242, 0.46) 45%, rgba(249, 247, 242, 0.92) 100%);
          z-index: 0;
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

        .hero-trust {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: var(--spacing-sm);
        }

        .pill.trust-pill {
          background: rgba(26, 21, 16, 0.06);
          color: var(--color-text-primary);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          font-weight: 600;
          font-size: 0.95rem;
          backdrop-filter: blur(8px);
          box-shadow: var(--shadow-sm);
        }

        .scroll-cue {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: var(--spacing-sm);
          color: var(--color-text-soft);
          font-weight: 600;
        }

        .cue-line {
          width: 28px;
          height: 2px;
          background: var(--color-gold-end);
          display: block;
        }

        .cue-text {
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: var(--spacing-sm);
          margin: var(--spacing-sm) 0 var(--spacing-md);
        }

        .stat {
          background: rgba(255,255,255,0.9);
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
          border: 1px solid rgba(26, 21, 16, 0.1);
          filter: drop-shadow(0 10px 40px rgba(0,0,0,0.1));
          animation: pulseRing 10s linear infinite;
          opacity: 0.9;
        }

        .ring-one { width: 360px; height: 360px; animation-delay: 0.2s; }
        .ring-two { width: 460px; height: 460px; border-color: rgba(212,175,55,0.35); animation-delay: 0.6s; }
        .ring-three { width: 560px; height: 560px; border-color: rgba(26,21,16,0.08); animation-delay: 1s; }

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
          0% { transform: scale(0.98) rotate(0deg); opacity: 0.75; }
          50% { transform: scale(1.02) rotate(2deg); opacity: 1; }
          100% { transform: scale(0.98) rotate(0deg); opacity: 0.75; }
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
          background: rgba(255,255,255,0.9);
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

        .card-link {
          color: var(--color-gold-end);
          font-weight: 700;
        }

        .card-footer {
          margin-top: var(--spacing-md);
          padding-top: var(--spacing-sm);
          border-top: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        /* About */
        .about {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f9f7f2 0%, #ffffff 100%);
          color: var(--color-text-primary);
        }

        .about::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 20%, rgba(212, 175, 55, 0.12), transparent 38%),
            radial-gradient(circle at 82% 70%, rgba(26, 21, 16, 0.08), transparent 50%);
          opacity: 0.9;
        }

        .about-shell {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: var(--spacing-xl);
          align-items: center;
          position: relative;
          z-index: 1;
          padding: var(--spacing-xl) 0;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-sm);
        }

        .about-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          min-height: 320px;
          box-shadow: var(--shadow-lg);
        }

        .card-fatwa {
          background: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.35)), url(${heroBg}) center/cover no-repeat;
        }

        .card-madrasah {
          background: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.32)), url(${aboutVisual}) center/cover no-repeat;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--spacing-md);
          color: #fff;
          background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%);
        }

        .card-kicker {
          font-family: 'Amiri', serif;
          letter-spacing: 0.5px;
          font-size: 1rem;
          opacity: 0.85;
        }

        .card-overlay h3 {
          font-size: 1.6rem;
          margin: 0.2rem 0;
        }

        .card-sub {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
          margin-bottom: var(--spacing-xs);
        }

        .card-learn {
          font-weight: 700;
          color: #fff;
          font-size: 0.95rem;
        }

        .about-info {
          background: linear-gradient(140deg, rgba(255, 255, 255, 0.96) 0%, rgba(249, 247, 242, 0.9) 100%);
          border: 1px solid var(--color-border);
          border-radius: 28px;
          padding: calc(var(--spacing-lg) / 1.25);
          box-shadow: var(--shadow-xl);
          backdrop-filter: blur(var(--glass-blur));
          position: relative;
          overflow: hidden;
        }

        .about-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(26, 21, 16, 0.05);
          border: 1px solid var(--color-border);
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: var(--spacing-sm);
        }

        .about-info h2 {
          font-size: clamp(2.2rem, 4vw, 2.8rem);
          line-height: 1.1;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-primary);
        }

        .about-desc {
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin-bottom: var(--spacing-md);
          max-width: 90%;
        }

        .about-tags {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: var(--spacing-sm);
        }

        .about-tags span {
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background: rgba(255,255,255,0.85);
          font-weight: 600;
          color: var(--color-text-primary);
          box-shadow: var(--shadow-sm);
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: var(--spacing-sm);
          margin: var(--spacing-sm) 0;
        }

        .about-stats .stat-number {
          font-size: 2.2rem;
        }

        .about-actions {
          display: flex;
          gap: var(--spacing-sm);
          align-items: center;
          flex-wrap: wrap;
          margin-top: var(--spacing-sm);
        }

        .text-link {
          color: var(--color-gold-end);
          font-weight: 700;
        }

        .about-chip-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: var(--spacing-sm);
          margin: var(--spacing-md) 0;
        }

        .about-chip {
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: var(--spacing-sm);
          box-shadow: var(--shadow-sm);
        }

        .chip-kicker {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--color-text-light);
          margin-bottom: 0.2rem;
        }

        .about-chip strong {
          display: block;
          font-size: 1.2rem;
          color: var(--color-text-primary);
        }

        .about-chip small {
          color: var(--color-text-secondary);
        }

        .about-visual-stack {
          position: relative;
          display: grid;
          gap: var(--spacing-md);
          justify-items: end;
        }

        .about-plate {
          position: relative;
          width: min(520px, 100%);
          aspect-ratio: 4 / 3;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .plate-gradient {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(circle at 30% 30%, rgba(212,175,55,0.22), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(26,21,16,0.12), transparent 40%),
            linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,247,242,0.9) 100%);
          z-index: 0;
        }

        .plate-frame {
          position: absolute;
          inset: 10%;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          transform: rotate(-2deg);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          z-index: 1;
        }

        .plate-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-plate:hover .plate-frame {
          transform: rotate(-0.5deg) scale(1.02);
          box-shadow: var(--shadow-hover);
        }

        .plate-badge {
          position: absolute;
          bottom: 10%;
          left: 6%;
          background: var(--color-gold-gradient);
          color: #fff;
          padding: 0.55rem 1.1rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          letter-spacing: 0.8px;
          box-shadow: var(--shadow-md);
          z-index: 2;
        }

        .floating-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: var(--spacing-sm);
          width: 100%;
        }

        .float-card {
          background: rgba(255,255,255,0.92);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: var(--spacing-sm);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .float-card.gold {
          border-color: rgba(212,175,55,0.35);
          background: linear-gradient(145deg, rgba(255,255,255,0.96), rgba(249,247,242,0.92));
        }

        .float-card.light {
          background: rgba(255,255,255,0.9);
        }

        .float-card.outline {
          background: rgba(255,255,255,0.85);
        }

        .float-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .departments {
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f9f7f2 100%);
          padding: var(--spacing-xl) 0 var(--spacing-xl);
          color: var(--color-text-primary);
        }

        .dept-shell {
          display: grid;
          gap: var(--spacing-lg);
        }

        .dept-header {
          max-width: 840px;
        }

        .dept-header h2 {
          font-size: clamp(2.2rem, 4vw, 2.9rem);
          margin-bottom: var(--spacing-sm);
        }

        .dept-lane {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: var(--spacing-md);
          align-items: center;
        }

        .dept-card {
          background: rgba(255,255,255,0.92);
          border: 1px solid var(--color-border);
          border-radius: 22px;
          padding: var(--spacing-md);
          box-shadow: var(--shadow-lg);
          display: grid;
          grid-template-columns: auto 1fr;
          gap: var(--spacing-sm);
          align-items: center;
        }

        .dept-card.alt {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(249, 247, 242, 0.92));
          border: 1px solid rgba(212, 175, 55, 0.32);
        }

        .dept-logo,
        .dept-logo-circle {
          width: 78px;
          height: 78px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          display: grid;
          place-items: center;
          padding: 8px;
        }

        .dept-logo img,
        .dept-logo-circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .dept-meta h3 {
          margin: 0 0 var(--spacing-xs) 0;
        }

        .dept-meta p {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .dept-list {
          list-style: none;
          padding: 0;
          margin: 0 0 var(--spacing-sm);
          display: grid;
          gap: 0.35rem;
        }

        .dept-list li {
          position: relative;
          padding-left: 1rem;
          color: var(--color-text-primary);
          font-weight: 600;
        }

        .dept-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--color-gold-end);
        }

        .dept-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }

        .dept-connector .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-gold-end);
        }

        .dept-connector .line {
          width: 2px;
          height: 120px;
          background: linear-gradient(180deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.35) 50%, rgba(212,175,55,0) 100%);
        }

        .tile {
          background: rgba(255, 255, 255, 0.92);
          border-radius: 24px;
          border: 1px solid var(--color-border);
          padding: var(--spacing-md);
          box-shadow: var(--shadow-lg);
          backdrop-filter: blur(var(--glass-blur));
        }

        .tile.primary {
          border: 1px solid rgba(212, 175, 55, 0.35);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(249, 247, 242, 0.92));
        }

        .tile.outline {
          background: rgba(255, 255, 255, 0.88);
        }

        .tile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: var(--spacing-sm);
        }

        .tile-logo {
          width: 68px;
          height: 68px;
          object-fit: contain;
          border-radius: 12px;
          background: #fff;
          padding: 0.4rem;
          border: 1px solid var(--color-border);
        }

        .tile-logo.round {
          border-radius: 50%;
        }

        .tile-meta .kicker {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.78rem;
          color: var(--color-text-light);
          margin-bottom: 0.15rem;
        }

        .tile-title {
          font-weight: 700;
          color: var(--color-text-primary);
          font-size: 1.25rem;
        }

        .tile-desc {
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: var(--spacing-sm);
        }

        .tile-list {
          list-style: none;
          padding: 0;
          margin: 0 0 var(--spacing-sm);
          display: grid;
          gap: 0.35rem;
        }

        .tile-list li {
          position: relative;
          padding-left: 1.2rem;
          color: var(--color-text-primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .tile-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--color-gold-end);
        }

        .tile-actions .pill-link {
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-card {
            order: -1;
          }

          .about-shell {
            grid-template-columns: 1fr;
          }

          .dept-lane {
            grid-template-columns: 1fr;
          }

          .dept-connector {
            flex-direction: row;
            justify-content: center;
          }

          .dept-connector .line {
            width: 120px;
            height: 2px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 var(--spacing-lg);
          }

          .hero::before {
            background-size: 100%;
            opacity: 0.28;
          }

          .hero-card {
            padding: var(--spacing-md);
          }

          .hero-visual {
            min-height: 380px;
          }

          .ring-one { width: 260px; height: 260px; }
          .ring-two { width: 320px; height: 320px; }
          .ring-three { display: none; }

          .hero-chip {
            position: static;
            width: 100%;
            margin-top: var(--spacing-xs);
          }

          .about-shell {
            grid-template-columns: 1fr;
          }

          .about-cards {
            grid-template-columns: 1fr;
          }

          .about-plate {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
