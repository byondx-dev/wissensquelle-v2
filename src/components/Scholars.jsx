import React, { useState } from 'react';

const Scholars = () => {
  const scholars = [
    {
      name: "Muftī Muhammed Zubair Butt",
      languages: ["Arabisch", "Englisch", "Urdu"],
      areas: ["Dār al-Iftāʾ Deutschland"],
      location: "UK",
      bio: "Muftī Muhammed Zubair Butt ist gebürtiger Brite und hat den Heiligen Qur’an im Alter von 16 Jahren memoriert. Er absolvierte sein Alim-Studium 1988–1995 in Dewsbury/UK und Darul Uloom Karachi. 1997 spezialisierte er sich auf Fatāwā unter Muftī Muhammad Taqi Usmani. Er ist leitender Berater für islamisches Recht in Bradford und lehrt u.a. Ethik der Transplantation und Autopsie an der University of Leeds.",
    },
    {
      name: "Dr. Mufti Asif Naveed",
      languages: ["Arabisch", "Deutsch", "Englisch", "Urdu"],
      areas: ["Dār al-Iftāʾ Deutschland"],
      location: "Mannheim",
      bio: "Muftī Asif Naveed absolvierte ‘Ālim-Studium und Takhassus-fil-Ifta an der Jāmi’ah Dār al-ʿUlūm Karachi und promovierte an der University of Karachi. Er verfasste rund 2.000 Fatāwā und veröffentlichte „Fatāwā Muftī Aʿẓam“. Seit 2015 ist er Muftī und Lehrer in Mannheim und publiziert regelmäßig auf Urdu und Arabisch.",
    },
    {
      name: "Sheikh Nadar",
      languages: ["Arabisch", "Deutsch", "Englisch", "Urdu"],
      areas: ["Madrasah as-Sunnah", "Dār al-Iftāʾ Deutschland"],
      location: "Bradford/München",
      bio: "Shaykh Nadar absolvierte 2008–2016 die ‘Ālimiyyah in Dewsbury, UK, und spezialisierte sich unter Mufti Yusuf Sacha. 2017 gründete er die Online-Madrasah As-Sunnah und 2019 die Dar al-Iftā’ Deutschland. Er lehrt verschiedene islamische Wissenschaften, u.a. Nahw, Sarf, Kalam und Hadith, und unterrichtet Qur’an und Tajweed.",
    },
    {
      name: "Sheikh Mashall Hakim",
      languages: ["Arabisch", "Deutsch", "Englisch", "Persisch", "Französisch", "Urdu"],
      areas: ["Madrasah as-Sunnah", "Dār al-Iftāʾ Deutschland"],
      location: "Hannover",
      bio: "Shaykh Mashall Hakim studierte 2001–2007 ‘Ālim in Darul Ulūm Zakariyya (Südafrika) und absolvierte mehrere Da’wa-Kurse. Er war Imam und Lehrer in Hannover, ist Vorsitzender von Talimul Islam e.V. und unterrichtet seit 2018 in der Online Madrasah As-Sunnah.",
    },
    {
      name: "Sheikh Waqar",
      languages: ["Arabisch", "Deutsch", "Englisch", "Urdu"],
      areas: ["Madrasah as-Sunnah", "Dār al-Iftāʾ Deutschland"],
      location: "Österreich",
      bio: "Sheikh Waqar studierte ab 2009 ‘Ālim in der Madrassah Arabia Raiwind (Pakistan) und schloss 2018 ab. Seit 2019 unterrichtet er in Masjid Ibrahim (Wien) Kinder und Jugendliche und lehrt in der Online Madrassah As-Sunnah.",
    },
    {
      name: "Sheikh Mustafa",
      languages: ["Deutsch", "Persisch", "Arabisch"],
      areas: ["Madrasah as-Sunnah"],
      location: "Kassel",
      bio: "Shaykh Mustafa Zeidi studierte Arabisch in Kairo (2011–2012) und schloss 2013–2019 die ‘Ālim-Ausbildung an der Darul Uloom In’amiyah (Südafrika) ab. Seit 2019 ist er Imam in Kassel (Masjid Tauheed) und unterrichtet dort sowie in der Madrasah As-Sunnah und im Ilm-Forum.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggle = (name) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <section id="scholars" className="section scholars">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Unsere Gelehrten</h2>
          <p className="section-desc">Team aus Muftīs und Lehrenden – klar vorgestellt, transparent begleitet.</p>
        </div>

        <div className="scholars-grid">
          {scholars.map((scholar) => (
            <article key={scholar.name} className="scholar-card">
              <div className="card-header">
                <h3>{scholar.name}</h3>
                <span className="location-badge">
                  <span aria-hidden="true">📍</span> {scholar.location}
                </span>
              </div>

              <div className="card-body">
                <div className="tags-row">
                  <div className="tag-group">
                    <span className="label">Sprachen:</span>
                    <div className="tag-list">
                      {scholar.languages.map(l => <span key={l} className="tag">{l}</span>)}
                    </div>
                  </div>
                  <div className="tag-group">
                    <span className="label">Bereiche:</span>
                    <div className="tag-list">
                      {scholar.areas.map(a => <span key={a} className="tag highlight">{a}</span>)}
                    </div>
                  </div>
                </div>

                <div className={`bio-container ${expanded === scholar.name ? 'expanded' : ''}`}>
                  <p>{scholar.bio}</p>
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => toggle(scholar.name)}
                >
                  {expanded === scholar.name ? 'Weniger anzeigen' : 'Mehr erfahren'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .scholars {
          background: var(--color-bg-main);
          padding: 80px 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 2.5rem;
          color: var(--color-gold-start);
          margin-bottom: 16px;
        }
        .section-desc {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .scholars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }

        .scholar-card {
           background: var(--color-surface);
           border-radius: 24px;
           overflow: hidden;
           border: 1px solid var(--color-border);
           transition: transform 0.3s ease, box-shadow 0.3s ease;
           display: flex;
           flex-direction: column;
        }

        .scholar-card:hover {
           transform: translateY(-5px);
           box-shadow: var(--shadow-md);
           border-color: var(--color-gold-start);
        }

        .card-header {
           padding: 24px;
           border-bottom: 1px solid var(--color-border);
           background: var(--color-bg-alt);
           display: flex;
           justify-content: space-between;
           align-items: center;
           gap: 12px;
        }

        .card-header h3 {
           margin: 0;
           font-size: 1.25rem;
           color: var(--color-text-primary);
           font-family: var(--font-heading);
        }

        .location-badge {
           font-size: 0.85rem;
           background: var(--color-surface);
           border: 1px solid var(--color-border);
           padding: 6px 12px;
           border-radius: 99px;
           color: var(--color-text-secondary);
           white-space: nowrap;
        }

        .card-body {
           padding: 24px;
           display: flex;
           flex-direction: column;
           gap: 20px;
           flex-grow: 1;
        }

        .tag-group {
           display: flex;
           flex-direction: column;
           gap: 8px;
        }

        .label {
           font-size: 0.8rem;
           text-transform: uppercase;
           letter-spacing: 0.05em;
           font-weight: 700;
           color: var(--color-text-secondary);
        }

        .tag-list {
           display: flex;
           flex-wrap: wrap;
           gap: 8px;
        }

        .tag {
           font-size: 0.85rem;
           padding: 4px 10px;
           background: var(--color-bg-alt);
           border-radius: 6px;
           color: var(--color-text-primary);
           border: 1px solid var(--color-border);
        }

        .tag.highlight {
           background: rgba(198, 160, 67, 0.1);
           color: var(--color-gold-end);
           border-color: rgba(198, 160, 67, 0.2);
        }
        
        .tags-row {
           display: flex;
           flex-direction: column;
           gap: 16px;
        }

        .bio-container {
           margin-top: auto;
           position: relative;
        }
        
        .bio-container p {
           margin: 0;
           line-height: 1.6;
           color: var(--color-text-secondary);
           display: -webkit-box;
           -webkit-line-clamp: 3;
           -webkit-box-orient: vertical;
           overflow: hidden;
           transition: all 0.3s ease;
        }

        .bio-container.expanded p {
           -webkit-line-clamp: unset;
        }

        .read-more-btn {
           align-self: flex-start;
           background: none;
           border: none;
           padding: 0;
           color: var(--color-gold-start);
           font-weight: 700;
           font-size: 0.9rem;
           cursor: pointer;
           margin-top: 8px;
        }
        
        .read-more-btn:hover {
           text-decoration: underline;
           color: var(--color-gold-end);
        }

        @media (max-width: 768px) {
           .scholars-grid {
              grid-template-columns: 1fr;
           }
           .card-header {
              flex-direction: column;
              align-items: flex-start;
           }
        }
      `}</style>
    </section>
  );
};

export default Scholars;
