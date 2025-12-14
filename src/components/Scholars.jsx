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
            name: "Sheikh Mashal",
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

                <div className="scholars-stack">
                    {scholars.map((scholar) => (
                        <article key={scholar.name} className="scholar-card">
                            <div className="card-body">
                                <div className="scholar-head">
                                    <h3>{scholar.name}</h3>
                                    <div className="info-row">
                                        <span className="icon pin" aria-hidden="true">📍</span>
                                        <span className="location-text">{scholar.location}</span>
                                    </div>
                                </div>
                                <div className="meta-row">
                                    <div className="pill-set">
                                        <span className="pill-label"><span aria-hidden="true">🌐</span> Sprachen</span>
                                        <div className="pill-wrap">
                                            {scholar.languages.map((lang) => (
                                                <span key={lang} className="pill">{lang}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="toggle"
                                    onClick={() => toggle(scholar.name)}
                                    aria-expanded={expanded === scholar.name}
                                >
                                    <span className="chevron">{expanded === scholar.name ? '▾' : '▸'}</span>
                                    Kurzbiografie {expanded === scholar.name ? 'ausblenden' : 'anzeigen'}
                                </button>
                                <div
                                    className="bio-wrapper"
                                    style={{
                                        maxHeight: expanded === scholar.name ? '460px' : '0px',
                                        opacity: expanded === scholar.name ? 1 : 0,
                                    }}
                                >
                                    <p className="bio">{scholar.bio}</p>
                                </div>
                            </div>
                            <div className="card-areas">
                                {scholar.areas.map((area) => (
                                    <div key={area} className="parallelogram">
                                        <div className="para-content">
                                            <span>{area}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
        .scholars {
          background: linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%);
        }
        .scholars-stack {
          display: grid;
          gap: var(--spacing-lg);
        }
        .scholar-card {
          background: #fff;
          border-radius: 18px;
          padding: 0;
          box-shadow: 0 12px 28px rgba(8,24,36,0.08);
          border: 1px solid rgba(12,60,78,0.06);
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          position: relative;
          overflow: hidden;
        }
        .scholar-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 12% 18%, rgba(15,129,153,0.06), transparent 32%);
          pointer-events: none;
        }
        .card-body {
          padding: var(--spacing-md);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .card-areas {
          background: linear-gradient(135deg, #0f2430 0%, #0a1a23 70%);
          display: flex;
          align-items: stretch;
          gap: 0;
          padding: 0;
          position: relative;
          overflow: hidden;
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
        }
        .card-areas::before {
          content: '';
          position: absolute;
          left: -26px;
          top: -20px;
          bottom: -20px;
          width: 52px;
          background: #0f2430;
          transform: skewX(-16deg);
          filter: drop-shadow(-4px 0 10px rgba(0,0,0,0.2));
          z-index: 1;
        }
        .parallelogram {
          position: relative;
          flex: 1;
          margin: -12px 0;
          background: linear-gradient(135deg, rgba(15,129,153,0.24), rgba(198,160,67,0.25));
          transform: skewX(-12deg);
          overflow: hidden;
          border-right: 1px solid rgba(255,255,255,0.18);
          display: grid;
          place-items: center;
          height: calc(100% + 24px);
          top: -12px;
        }
        .parallelogram:last-child {
          border-right: none;
        }
        .parallelogram::after {
          content: '';
          position: absolute;
          inset: -12px;
          background: linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0));
          mix-blend-mode: screen;
        }
        .para-content {
          position: relative;
          z-index: 2;
          transform: skewX(12deg);
          color: #fdfaf3;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-align: center;
          padding: 0 10px;
          white-space: nowrap;
        }
        .scholar-head {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
        .scholar-head h3 {
          margin: 0;
          color: #0a2d3c;
          font-size: 1.2rem;
        }
        .role {
          margin: 0;
          color: #4f6b7a;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .location {
          background: rgba(198,160,67,0.14);
          color: #8b6a20;
          border-radius: 12px;
          padding: 6px 10px;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .meta-row {
          display: grid;
          gap: 10px;
        }
        .pill-set {
          display: grid;
          gap: 6px;
          align-items: start;
        }
        .pill-label {
          font-weight: 700;
          color: #0a2d3c;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .pill {
          padding: 6px 10px;
          border-radius: 10px;
          background: #e9f2f5;
          color: #0a3b4f;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .pill.soft {
          background: rgba(198,160,67,0.16);
          color: #8b6a20;
        }
        .toggle {
          align-self: flex-start;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid #d9e2e8;
          background: #f8fbfc;
          color: #0a2d3c;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          position: absolute;
          left: 14px;
          bottom: 14px;
        }
        .toggle:hover {
          border-color: #0f8199;
          color: #0f8199;
        }
        .bio-wrapper {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }
        .bio {
          margin: 8px 0 0;
          color: #4f6b7a;
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default Scholars;
