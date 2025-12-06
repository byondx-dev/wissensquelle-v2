import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Fatawa from '../components/Fatawa';
import Madrasah from '../components/Madrasah';
import DarAlIfta from '../components/DarAlIfta';
import Scholars from '../components/Scholars';
import heroBg from '../assets/hero-bg.png';

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
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">Manba' al-'Ilm</span>
              <h1>Authentisches Wissen <br />ohne Kompromisse.</h1>
              <p className="hero-subtitle">
                Ihre vertrauenswürdige Quelle für Fatāwā, islamische Studien und spirituelle Wegweisung im deutschsprachigen Raum.
              </p>

              <div className="hero-actions">
                <Link to="/madrasah" className="btn btn-primary">
                  Madrasah starten
                </Link>
                <Link to="/fatawa" className="btn btn-secondary">
                  Fatwā stellen
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">250+</span>
                  <span className="stat-label">Fatāwā</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">12</span>
                  <span className="stat-label">Kurse</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">8</span>
                  <span className="stat-label">Gelehrte</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="hero-bg-overlay"></div>
      </section>

      {/* Pillars Section */}
      <section className="section pillars">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Drei Säulen des Wissens</h2>
            <p className="section-desc">Ein ganzheitlicher Ansatz für Ihre islamische Bildung.</p>
          </motion.div>

          <div className="pillars-grid">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="pill-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to={item.href} className="pill-link">
                  Mehr erfahren <span className="arrow">→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <Fatawa />
      <Madrasah />
      <DarAlIfta />
      <Scholars />

      <style>{`
        .hero {
          min-height: 90vh; /* Full screen feel */
          display: flex;
          align-items: center;
          position: relative;
          background-color: #FAFAFA;
          overflow: hidden;
          padding-top: 80px; /* Space for fixed header */
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: 
            radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%),
            url(${heroBg}) no-repeat center right;
          background-size: contain;
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 650px;
          padding: var(--spacing-lg) 0;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-gold-end);
          margin-bottom: var(--spacing-sm);
        }

        .hero h1 {
          font-size: clamp(3rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: var(--spacing-md);
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
          line-height: 1.6;
          max-width: 90%;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        /* Stats */
        .hero-stats {
          display: inline-flex;
          align-items: center;
          background: #fff;
          padding: 1.5rem 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border-light);
        }

        .stat-item {
          text-align: center;
        }

        .stat-num {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--color-border);
          margin: 0 2rem;
        }

        /* Pillars Section */
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto var(--spacing-lg);
        }

        .section-desc {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-md);
        }

        .pillar-card {
          background: #fff;
          padding: 3rem 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pillar-card:hover {
          box-shadow: var(--shadow-hover);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .pill-tag {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-gold-end);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: var(--spacing-md);
        }

        .pillar-card h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-sm);
        }

        .pillar-card p {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
          line-height: 1.6;
        }

        .pill-link {
          font-weight: 600;
          color: var(--color-text-primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pill-link .arrow {
          transition: transform 0.3s ease;
        }

        .pillar-card:hover .arrow {
          transform: translateX(5px);
          color: var(--color-gold-end);
        }

        @media (max-width: 960px) {
          .hero {
            padding-top: 120px;
            text-align: center;
            min-height: auto;
            padding-bottom: var(--spacing-xl);
          }
          
          .hero-content {
            margin: 0 auto;
          }

          .hero-bg-overlay {
            display: none;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            width: 100%;
            justify-content: space-around;
            padding: 1.5rem;
          }

          .stat-divider {
            margin: 0 1rem;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
