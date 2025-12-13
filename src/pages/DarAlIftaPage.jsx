import React from 'react';
import FatawaComponent from '../components/Fatawa';
import PageHero from '../components/PageHero';
import AskFatwaSection from '../components/AskFatwaSection';

const DarAlIftaPage = () => {
    const categories = [
        { label: "Glaubenslehre – 'Aqidah", icon: '📜' },
        { label: 'Tasawwuf/Sufismus', icon: '🕊️' },
        { label: 'Gebete', icon: '🕌' },
        { label: 'Fasten & Ramadhan', icon: '🌙' },
        { label: 'Arbeit', icon: '💼' },
        { label: 'Finanzen', icon: '💰' },
        { label: 'Familie', icon: '👪' },
        { label: 'Gesundheit', icon: '🩺' },
        { label: 'Allgemein', icon: '🧭' },
        { label: 'Freizeit', icon: '⏳' },
        { label: 'Heirat/Ehe', icon: '💍' },
        { label: 'Kleidung', icon: '🧥' },
        { label: 'Leasing und Miete', icon: '🏠' },
        { label: 'Lebensmittel', icon: '🍃' },
        { label: 'Medizin', icon: '💊' },
        { label: 'Paid', icon: '💳' },
        { label: 'Urheberrecht', icon: '©️' },
        { label: 'Sonstiges', icon: '✨' },
        { label: 'Unspezifisch', icon: '❔' },
    ];

    const toSlug = (str = '') =>
        str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

    return (
        <div className="page-dar">
            <PageHero
                eyebrow="Fatwā-Gremium"
                title="Dār al-Iftā’"
                subtitle="Das Fatwā-Gremium für Deutschland"
            />

            <section className="section dar-intro" id="iftahub">
                <div className="container intro-grid">
                    <div className="intro-copy">
                        <h3>Was ist die Dār al-Iftā’ DE?</h3>
                        <p>
                            Die Dār al-Iftā’ DE ist ein Institut, das sich auf die islamische Rechtswissenschaft
                            (Fiqh) spezialisiert. Die Gelehrten veröffentlichen regelmäßig Fatāwā, die vor der
                            Veröffentlichung mehrfach von Spezialisten geprüft werden. Sie können uns jederzeit
                            kontaktieren, wenn Sie weitere Fragen haben oder Auskunft zu islamischen Angelegenheiten
                            benötigen.
                        </p>
                    </div>
                    <div className="intro-cats">
                        <div className="cat-header">
                            <h4>Kategorien</h4>
                            <p>Tippen Sie eine Kategorie an, um direkt passende Fatāwā zu sehen.</p>
                        </div>
                        <div className="cat-grid">
                            {categories.map((cat) => (
                                <a
                                    key={cat.label}
                                    className="cat-card"
                                    href={`/dar-al-ifta#fatawa?cat=${toSlug(cat.label)}`}
                                >
                                    <span className="cat-icon" aria-hidden="true">{cat.icon}</span>
                                    <span className="cat-label">{cat.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
                  .dar-intro {
                    background: #f7f8fb;
                    border-bottom: 1px solid rgba(12,60,78,0.06);
                  }
                  .intro-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: var(--spacing-xl);
                    align-items: start;
                  }
                  .intro-copy h3 {
                    font-size: 1.9rem;
                    color: #0a2d3c;
                    margin-bottom: var(--spacing-sm);
                  }
                  .intro-copy p {
                    color: #4f6b7a;
                    line-height: 1.6;
                  }
                  .cat-header h4 {
                    margin: 0 0 4px;
                    color: #0a4f60;
                  }
                  .cat-header p {
                    margin: 0 0 12px;
                    color: #4f6b7a;
                  }
                  .cat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 10px;
                  }
                  .cat-card {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 14px;
                    border-radius: 12px;
                    background: #ffffff;
                    border: 1px solid rgba(12,60,78,0.08);
                    box-shadow: 0 10px 20px rgba(8,24,36,0.06);
                    color: #0b3141;
                    font-weight: 700;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                  }
                  .cat-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 14px 28px rgba(8,24,36,0.12);
                    border-color: #0f8199;
                  }
                  .cat-icon {
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    display: grid;
                    place-items: center;
                    background: linear-gradient(135deg, #f0f6f8, #e7f1f5);
                    font-size: 1.1rem;
                  }
                  .cat-label {
                    line-height: 1.2;
                  }
                  @media (max-width: 900px) {
                    .intro-grid {
                      grid-template-columns: 1fr;
                    }
                  }
                `}</style>
            </section>

            <FatawaComponent />
            <AskFatwaSection />
        </div>
    );
};

export default DarAlIftaPage;
