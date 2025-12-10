import React from 'react';
import MadrasahComponent from '../components/Madrasah';

const MadrasahPage = () => {
    return (
        <div className="page-madrasah">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Online Madrasah</h1>
                    <p className="page-subtitle">Strukturiertes islamisches Wissen für jeden</p>
                </div>
            </div>

            <MadrasahComponent />

            <section className="section container">
                <h2 className="section-title text-center">Häufige Fragen</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>Ist das Studium kostenlos?</h3>
                        <p>Ja, die Grundlagenkurse sind komplett kostenlos. Für Spezialisierungen fällt eine geringe Verwaltungsgebühr an.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Erhalte ich ein Zertifikat?</h3>
                        <p>Nach erfolgreichem Abschluss der Prüfungen erhalten Sie ein Zertifikat (Ijazah) für den jeweiligen Kurs.</p>
                    </div>
                </div>
            </section>

            <style>{`
        .page-header {
          background-color: var(--color-text-primary);
          color: #fff;
          padding: var(--spacing-lg) 0;
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }
        .page-title {
          color: var(--color-gold-start);
          font-size: 3rem;
        }
        .page-subtitle {
          color: #E5E0D8;
          font-size: 1.2rem;
        }
        .faq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing-md);
            margin-top: var(--spacing-md);
        }
        .faq-item {
            padding: var(--spacing-md);
            background: #fff;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
        }
        .faq-item h3 {
            color: var(--color-text-primary);
            margin-bottom: var(--spacing-xs);
        }
      `}</style>
        </div>
    );
};

export default MadrasahPage;
