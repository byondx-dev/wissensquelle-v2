import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Fatawa = () => {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Alle',
    "Glaubenslehre – 'Aqidah",
    'Tasawwuf/Sufismus',
    'Gebete',
    'Fasten & Ramadhan',
    'Arbeit',
    'Finanzen',
    'Familie',
    'Gesundheit',
    'Allgemein',
    'Freizeit',
    'Heirat/Ehe',
    'Kleidung',
    'Leasing und Miete',
    'Lebensmittel',
    'Medizin',
    'Paid',
    'Urheberrecht',
    'Sonstiges',
    'Unspezifisch',
  ];
  const toSlug = (str = '') => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const fatawaData = [
    {
      id: "bitcoin",
      title: "Ist Bitcoin im Islam erlaubt?",
      category: "Finanzen",
      summary: "Eine detaillierte Analyse der Kryptowährungen aus islamischer Sicht unter Berücksichtigung moderner Finanzinstrumente.",
      date: "01.12.2024"
    },
    {
      id: "arbeit-gebet",
      title: "Das Gebet auf der Arbeit verrichten",
      category: "Gebete",
      summary: "Wie man das Gebet mit dem Berufsleben vereinbart und welche Erleichterungen es gibt.",
      date: "28.11.2024"
    },
    {
      id: "nachbarn",
      title: "Umgang mit nicht-muslimischen Nachbarn",
      category: "Allgemein",
      summary: "Die Rechte der Nachbarn im Islam und wie man ein gutes Zusammenleben fördert.",
      date: "25.11.2024"
    },
    {
      id: "wali",
      title: "Heiraten ohne Wali?",
      category: "Heirat/Ehe",
      summary: "Die Voraussetzungen für eine gültige Eheschließung und die Rolle des Vormunds.",
      date: "20.11.2024"
    }
  ];

  useEffect(() => {
    const applyHashCategory = () => {
      const hash = window.location.hash || '';
      const match = hash.match(/cat=([^&]+)/i);
      if (match) {
        const slug = decodeURIComponent(match[1]);
        const found = categories.find((cat) => toSlug(cat) === slug || cat.toLowerCase() === slug.toLowerCase());
        if (found) setActiveFilter(found);
      }
    };
    applyHashCategory();
    window.addEventListener('hashchange', applyHashCategory);
    return () => window.removeEventListener('hashchange', applyHashCategory);
  }, [categories]);

  const filteredFatawa = fatawaData.filter(item => {
    const matchesFilter = activeFilter === 'Alle' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="fatawa" className="section fatawa">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Neueste Fatāwā</h2>
          <p className="section-desc">Antworten auf Ihre Fragen basierend auf Quran und Sunnah</p>
        </div>

        <div className="fatawa-controls">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Fatwā suchen..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-chip ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="fatawa-grid">
          {filteredFatawa.map(item => (
            <article key={item.id} className="fatawa-card">
              <div className="card-content">
                <span className="card-category">{item.category}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-summary">{item.summary}</p>
                <div className="card-footer">
                  <span className="card-date">{item.date}</span>
                  <Link to={`/fatawa/${item.id}`} className="read-more">Weiterlesen →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="fatawa-actions">
          <a href="#" className="btn btn-secondary">Alle Fatāwā anzeigen</a>
        </div>
      </div>

      <style>{`
        .fatawa {
          background-color: var(--color-bg-main);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--color-text-primary);
        }

        .fatawa-controls {
          margin-bottom: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }

        .search-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: 1rem;
          background: var(--color-surface);
          color: var(--color-text-primary);
          transition: border-color 0.3s;
        }

        .search-input:focus {
          border-color: var(--color-gold-end);
          outline: none;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-secondary);
        }

        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-xs);
        }

        .filter-chip {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .filter-chip:hover, .filter-chip.active {
          background: var(--color-gold-gradient);
          color: #FFFFFF;
          border-color: transparent;
        }

        .fatawa-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .fatawa-card {
          background: var(--color-surface);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid transparent;
          overflow: hidden;
        }

        .fatawa-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold-start);
        }

        .card-content {
          padding: var(--spacing-md);
        }

        .card-category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-gold-end);
          font-weight: 600;
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .card-title {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-primary);
        }

        .card-summary {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-sm);
          border-top: 1px solid var(--color-border);
        }

        .card-date {
          font-size: 0.85rem;
          color: #999;
        }

        .read-more {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-gold-end);
        }
        
        .fatawa-actions {
            text-align: center;
        }
      `}</style>
    </section>
  );
};

export default Fatawa;
