import React, { useState } from 'react';

const Fatawa = () => {
    const [activeFilter, setActiveFilter] = useState('Alle');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['Alle', 'Ehe & Familie', 'Wirtschaft & Finanzen', 'Glaube & Gottesdienste', 'Gesellschaft', 'Moderne Themen'];

    const fatawaData = [
        {
            id: 1,
            title: "Ist Bitcoin im Islam erlaubt?",
            category: "Wirtschaft & Finanzen",
            summary: "Eine detaillierte Analyse der Kryptowährungen aus islamischer Sicht unter Berücksichtigung moderner Finanzinstrumente.",
            date: "01.12.2024"
        },
        {
            id: 2,
            title: "Das Gebet auf der Arbeit verrichten",
            category: "Glaube & Gottesdienste",
            summary: "Wie man das Gebet mit dem Berufsleben vereinbart und welche Erleichterungen es gibt.",
            date: "28.11.2024"
        },
        {
            id: 3,
            title: "Umgang mit nicht-muslimischen Nachbarn",
            category: "Gesellschaft",
            summary: "Die Rechte der Nachbarn im Islam und wie man ein gutes Zusammenleben fördert.",
            date: "25.11.2024"
        },
        {
            id: 4,
            title: "Heiraten ohne Wali?",
            category: "Ehe & Familie",
            summary: "Die Voraussetzungen für eine gültige Eheschließung und die Rolle des Vormunds.",
            date: "20.11.2024"
        }
    ];

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
                                    <a href={`/fatawa/${item.id}`} className="read-more">Weiterlesen →</a>
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
          background: #FFFFFF;
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
          background: #FFFFFF;
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
