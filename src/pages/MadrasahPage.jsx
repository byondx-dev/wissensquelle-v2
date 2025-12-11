import React from 'react';
import MadrasahComponent from '../components/Madrasah';
import ExternalCourses from '../components/ExternalCourses';
import PageHero from '../components/PageHero';

const MadrasahPage = () => {
    return (
        <div className="page-madrasah">
            <PageHero
                eyebrow="Studienpfad"
                title="Online Madrasah"
                subtitle="Strukturiertes islamisches Wissen für jeden"
            />

            <MadrasahComponent />

            <ExternalCourses />

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
