import React from 'react';

const steps = [
  {
    title: 'Anmeldung',
    desc: 'Für den gewünschten Kurs registrieren (Vorklasse Pflicht, externe Kurse ausgenommen).',
    detail: 'Formular absenden, Kontaktdaten und Kurswunsch hinterlegen.',
  },
  {
    title: 'Benachrichtigung',
    desc: 'Die Madrasah meldet sich und vergibt einen Termin für ein Vorstellungsgespräch.',
    detail: 'Terminbestätigung, kurze Vorabklärung zu Interessen und Verfügbarkeit.',
  },
  {
    title: 'Vorstellungsgespräch',
    desc: 'Kennenlernen, Abläufe und Erwartungen; Eignung für Madrasah, Lehrende und Regeln prüfen.',
    detail: 'Gespräch zu Zielen, Eigenschaften, Verhaltensregeln und gesuchten Profilen.',
  },
  {
    title: 'Start',
    desc: 'Zuteilung zu einer Klasse, Abstimmung der Unterrichtszeiten, Prüfungsverlauf bereitstellen.',
    detail: 'Zeiten fixieren, Zugang zum Unterricht und Prüfungsübersicht erhalten.',
  },
];

const MadrasahEnrollment = () => {
  return (
    <section className="section enrollment classic" id="enrollment">
      <div className="container enrollment-shell">
        <div className="enroll-header">
          <div>
            <span className="enroll-pill">Anmeldung Madrasah</span>
            <h2>Schritt für Schritt zum Kurs.</h2>
            <p className="enroll-desc">Klarer Ablauf vom Antrag bis zum Start – vertikal verbunden mit dem Fortschrittsbalken.</p>
          </div>
        </div>

        <div className="progress-wrapper">
          <div className="progress-line" aria-hidden="true">
            <div className="progress-line-fill" />
          </div>
          <div className="progress-list">
            {steps.map((step, idx) => (
              <div className="progress-item" key={step.title}>
                <div className="dot-wrap">
                  <span className="dot">0{idx + 1}</span>
                </div>
                <div className="card">
                  <h3>{step.title}</h3>
                  <p className="desc">{step.desc}</p>
                  <p className="detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .enrollment.classic {
          background: linear-gradient(180deg, #fdfaf3 0%, #ffffff 50%, #f9f7f2 100%);
          border-top: 1px solid var(--color-border-light);
          border-bottom: 1px solid var(--color-border-light);
        }

        .enroll-header {
          margin-bottom: var(--spacing-md);
        }

        .enroll-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background: rgba(26, 21, 16, 0.05);
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .enroll-desc {
          color: var(--color-text-secondary);
          margin-top: 6px;
          max-width: 640px;
        }

        .progress-wrapper {
          position: relative;
          padding-left: 34px;
        }

        .progress-line {
          position: absolute;
          left: 14px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: rgba(12, 60, 78, 0.08);
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-line-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #0f8199 0%, #c6a043 100%);
        }

        .progress-list {
          display: grid;
          gap: var(--spacing-md);
        }

        .progress-item {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: start;
          gap: 14px;
          position: relative;
        }

        .dot-wrap {
          position: relative;
          z-index: 1;
          margin-top: 4px;
        }

        .dot {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #0f8199;
          color: #0f8199;
          font-weight: 800;
          font-size: 0.85rem;
        }

        .card {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--spacing-sm);
          box-shadow: var(--shadow-sm);
        }

        .card h3 {
          margin: 0 0 6px;
          color: #0a2533;
        }

        .card .desc {
          margin: 0 0 4px;
          color: var(--color-text-primary);
          font-weight: 600;
        }

        .card .detail {
          margin: 0;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .progress-wrapper {
            padding-left: 26px;
          }
          .dot {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MadrasahEnrollment;
