import React from 'react';

const Scholars = () => {
    const scholars = [
        {
            name: "Scheich Abdullah Müller",
            role: "Leiter des Fatwā-Gremiums",
            qualification: "B.A. Sharia (Medina), M.A. Fiqh",
            desc: "Spezialisiert auf Fiqh al-Aqalliyat (Recht der Minderheiten) und Familienrecht."
        },
        {
            name: "Ustadh Hassan Schmidt",
            role: "Dozent für Hadith",
            qualification: "B.A. Hadith (Azhar)",
            desc: "Experte für Hadith-Wissenschaften und deren Anwendung in der Moderne."
        },
        {
            name: "Ustadha Amina Weber",
            role: "Dozentin für Aqida",
            qualification: "B.A. Usul ad-Din",
            desc: "Fokussiert auf die Stärkung der islamischen Identität bei Jugendlichen."
        }
    ];

    return (
        <section id="scholars" className="section scholars">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Unsere Gelehrten</h2>
                    <p className="section-desc">Qualifiziertes Wissen aus vertrauenswürdigen Quellen</p>
                </div>

                <div className="scholars-grid">
                    {scholars.map((scholar, index) => (
                        <div key={index} className="scholar-card">
                            <div className="scholar-img-placeholder">
                                <div className="scholar-initials">
                                    {scholar.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>
                            <h3 className="scholar-name">{scholar.name}</h3>
                            <span className="scholar-role">{scholar.role}</span>
                            <div className="scholar-qual">{scholar.qualification}</div>
                            <p className="scholar-desc">{scholar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .scholars {
          background-color: #FFFFFF;
        }

        .scholars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .scholar-card {
          text-align: center;
          padding: var(--spacing-md);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .scholar-card:hover {
          border-color: var(--color-gold-start);
          box-shadow: var(--shadow-md);
        }

        .scholar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--color-gold-gradient);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .scholar-card:hover::before {
          transform: scaleX(1);
        }

        .scholar-img-placeholder {
          width: 100px;
          height: 100px;
          background: var(--color-bg-main);
          border-radius: 50%;
          margin: 0 auto var(--spacing-md);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--color-gold-end);
        }

        .scholar-initials {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--color-text-secondary);
          font-family: 'Amiri', serif;
        }

        .scholar-name {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xs);
          color: var(--color-text-primary);
        }

        .scholar-role {
          display: block;
          font-size: 0.9rem;
          color: var(--color-gold-end);
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .scholar-qual {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-sm);
          font-style: italic;
        }

        .scholar-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }
      `}</style>
        </section>
    );
};

export default Scholars;
