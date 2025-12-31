import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import heroDarkBg from '../assets/hero-dark-desert.png';

const ArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const categories = ["Alle", "Allgemein", "Brüder", "Schwestern"];

  const filteredArticles = activeCategory === "Alle"
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="articles-page-wrapper">
      {/* Dark Mode Enforcer Wrapper */}
      <div className="dark-theme-zone">
        <div className="bg-layer" />

        {/* Hero Section */}
        <section className="articles-hero">
          <div className="container">
            <div className="text-center hero-animate">
              <h1 className="hero-title">Artikel</h1>
              <p className="hero-subtitle">Essays und Gedanken für die Generation von heute.</p>
            </div>

            {/* Filter Pills */}
            <div className="filter-container">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activePill"
                      className="active-bg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid (Bento Style) */}
        <section className="articles-content">
          <div className="container">
            <div className="bento-grid">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="bento-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-header">
                    <span className="card-category">{article.category}</span>
                  </div>
                  <div className="card-content">
                    <div className="card-meta">
                      <span>{article.date}</span> • <span>{article.readTime} Lesezeit</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.subtitle}</p>
                    <Link to={`/articles/${article.id}`} className="read-more-link">
                      Weiterlesen <span className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </div>

      <style>{`
        /* Force Dark Theme Variables for this page wrapper */
        .articles-page-wrapper {
          min-height: 100vh;
          position: relative;
        }

        .dark-theme-zone {
          --color-bg-main: #050709;
          --color-text-primary: #EDEDED;
          --color-text-secondary: #A0A0A0;
          --color-gold-start: #C5A028;
          --font-serif: 'Amiri', serif;
          --font-sans: 'Inter', sans-serif;
          color: var(--color-text-primary);
          padding-top: 100px; /* Space for fixed header */
          position: relative;
        }

        .bg-layer {
          position: fixed;
          inset: 0;
          background: url(${heroDarkBg}) center center / cover no-repeat;
          filter: blur(8px);
          z-index: 0;
        }
        
        .dark-theme-zone {
            position: relative;
            z-index: 1;
            background: rgba(5, 7, 9, 0.85); /* Tint over the image */
            min-height: 100vh;
        }

        /* Hero */
        .articles-hero {
          padding: 80px 0 60px;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: clamp(3rem, 6vw, 5rem);
          margin-bottom: 16px;
          color: #ffffff;
        }

        .hero-animate {
            opacity: 0;
            animation: fadeUp 0.8s ease-out forwards;
            text-align: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
          font-family: var(--font-serif);
          letter-spacing: 0.5px;
        }

        /* Filter */
        .filter-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .filter-pill {
          position: relative;
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 99px;
          color: var(--color-text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.3s ease;
          z-index: 1;
        }

        .filter-pill.active {
          color: #050709;
          border-color: transparent;
        }

        .active-bg {
          position: absolute;
          inset: 0;
          background: #fff;
          border-radius: 99px;
          z-index: -1;
        }

        /* Grid */
        .articles-content {
          padding-bottom: 100px;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .bento-card {
           background: #101418;
           border: 1px solid rgba(255, 255, 255, 0.05);
           border-radius: 20px;
           overflow: hidden;
           transition: transform 0.4s ease, box-shadow 0.4s ease;
           display: flex;
           flex-direction: column;
           opacity: 0; 
           animation: fadeUp 0.6s ease-out forwards;
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .bento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .card-header {
           padding: 24px 24px 0;
           display: flex;
           justify-content: flex-start;
        }

        .card-category {
          display: inline-block;
          background: rgba(15, 129, 153, 0.15);
          padding: 6px 12px;
          border-radius: 99px;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--color-gold-start);
          border: 1px solid rgba(212, 175, 55, 0.1);
        }

        .card-content {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-meta {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
        }

        .bento-card h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          line-height: 1.3;
          margin-bottom: 12px;
          color: #fff;
        }

        .bento-card p {
          font-size: 0.95rem;
          color: #B0B0B0;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-gold-start);
          transition: opacity 0.3s ease;
        }

        .read-more-link:hover {
          opacity: 0.8;
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .read-more-link:hover .arrow {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ArticlesPage;
