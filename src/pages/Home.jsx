import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import darLogo from '../assets/daralifta-logo.jpg';
import madrasahLogo from '../assets/madrasah-logo.jpg';
import aboutVisual from '../assets/about-visual.png';

const Home = () => {
  const highlights = [
    {
      title: 'Fatāwā',
      desc: 'Fundierte Antworten auf zeitgenössische Fragen – direkt von unserem Gelehrtengremium.',
      href: '/fatawa',
      tag: 'Antworten',
      delay: 0.1
    },
    {
      title: 'Online Madrasah',
      desc: 'Strukturiertes islamisches Wissen von den Grundlagen bis zur Spezialisierung.',
      href: '/madrasah',
      tag: 'Studium',
      delay: 0.2
    },
    {
      title: 'Gelehrte',
      desc: 'Lernen Sie unsere qualifizierten Lehrkräfte und Muftis persönlich kennen.',
      href: '/scholars',
      tag: 'Team',
      delay: 0.3
    }
  ];

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
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
            <div className="hero-stats"></div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="card-badge">Aktuell</div>
            <h3>Fatwā des Tages</h3>
            <p className="card-desc">
              Wie lässt sich das Gebet am Arbeitsplatz pflichtgemäß verrichten, wenn kein Gebetsraum vorhanden ist?
            </p>
            <Link to="/fatawa" className="card-link">Antwort lesen →</Link>
            <div className="card-footer">Praxisnah, klar begründet, vertrauenswürdig.</div>
          </motion.div>
        </div>
      </section>

      {/* About + Dual Focus */}
      <section className="section about">
        <div className="container about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="visual-frame">
              <img src={aboutVisual} alt="Studierende in der Madrasah" />
              <div className="visual-overlay"></div>
              <div className="visual-glow"></div>
            </div>
          </motion.div>

          <div className="about-right">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">Über uns</p>
              <h2>Tradition &amp; Ästhetik in perfektem Gleichklang.</h2>
              <p className="about-desc">
                Manba&apos; al-&apos;Ilm vereint klassische Gelehrsamkeit mit zeitgemäßem Design. Zwei Bereiche bilden unser
                Fundament: die Madrasah für strukturiertes Lernen und das Dār al-Iftā’ für verantwortungsvolle Fatāwā.
              </p>
              <div className="about-actions">
                <Link to="/about" className="btn btn-secondary">Mehr über uns</Link>
                <Link to="/contact" className="text-link">Kontakt aufnehmen →</Link>
              </div>
            </motion.div>

            <div className="focus-cards">
              <motion.div
                className="focus-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="badge">Madrasah</div>
                <img src={madrasahLogo} alt="Madrasah Logo" className="focus-logo" />
                <p>Curriculum mit klaren Lernpfaden, Dozenten, die begleiten, und eine Community, die trägt.</p>
                <Link to="/madrasah" className="pill-link">Zum Studienangebot →</Link>
              </motion.div>

              <motion.div
                className="focus-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="badge">Dār al-Iftā’</div>
                <img src={darLogo} alt="Dar al-Ifta Logo" className="focus-logo dar" />
                <p>Diskret, nachvollziehbar, verantwortungsvoll: Fatāwā für den deutschsprachigen Kontext.</p>
                <Link to="/dar-al-ifta" className="pill-link">Fatwā anfragen →</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 120px 0 var(--spacing-lg);
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 15% 20%, rgba(212, 175, 55, 0.12), transparent 32%),
                      radial-gradient(circle at 85% 25%, rgba(44, 36, 27, 0.12), transparent 30%),
                      linear-gradient(180deg, #fdfbf6 0%, #f7f2e9 100%);
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url(${heroBg}) center center / cover no-repeat;
          opacity: 0.68;
          mix-blend-mode: multiply;
          filter: saturate(1.1);
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(247, 242, 233, 0.92) 0%, rgba(247, 242, 233, 0.55) 45%, rgba(247, 242, 233, 0.92) 100%);
          z-index: 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: var(--spacing-lg);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-copy {
          max-width: 680px;
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
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          line-height: 1.05;
          margin-bottom: var(--spacing-md);
          letter-spacing: -0.5px;
          color: var(--color-text-primary);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.65;
          max-width: 90%;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
          margin-bottom: var(--spacing-lg);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: var(--spacing-sm);
        }

        .stat {
          background: #fff;
          padding: var(--spacing-sm);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
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

        .hero-card {
          background: #fff;
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
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

        .card-link {
          color: var(--color-gold-end);
          font-weight: 600;
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
          background: linear-gradient(135deg, #f8f5ef 0%, #ffffff 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .about-visual {
          position: relative;
        }

        .visual-frame {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(212, 175, 55, 0.25);
        }

        .visual-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.18), transparent 40%),
                      radial-gradient(circle at 80% 80%, rgba(44, 36, 27, 0.1), transparent 45%);
          mix-blend-mode: soft-light;
        }

        .visual-glow {
          position: absolute;
          inset: -10%;
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 32px;
          filter: blur(10px);
          opacity: 0.6;
          pointer-events: none;
        }

        .about-text h2 {
          font-size: clamp(2rem, 4vw, 2.6rem);
          margin-bottom: var(--spacing-sm);
        }

        .about-desc {
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: var(--spacing-md);
        }

        .about-actions {
          display: flex;
          gap: var(--spacing-sm);
          align-items: center;
          flex-wrap: wrap;
        }

        .text-link {
          color: var(--color-gold-end);
          font-weight: 600;
        }

        .focus-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-md);
        }

        .focus-card {
          background: #fff;
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          text-align: center;
        }

        .badge {
          display: inline-block;
          padding: 0.35rem 0.9rem;
          background: rgba(212, 175, 55, 0.12);
          color: var(--color-gold-end);
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.6px;
          margin-bottom: var(--spacing-sm);
        }

        .focus-logo {
          max-width: 220px;
          width: 100%;
          display: block;
          margin: 0 auto var(--spacing-sm);
          border-radius: 12px;
        }

        .focus-logo.dar {
          max-width: 200px;
          border-radius: 50%;
        }

        .focus-card p {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-card {
            order: -1;
          }

          .about-grid {
            grid-template-columns: 1fr;
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
        }
      `}</style>
    </div>
  );
};

export default Home;
