import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const checkpoints = [
  {
    title: "Registrierung & Profil",
    desc: "Account anlegen, Motivation & Lernziele eintragen.",
    detail: "Wir nutzen diese Infos, um Sie der passenden Stufe zuzuordnen.",
    badge: "Start"
  },
  {
    title: "Stufen-Matching",
    desc: "Einstufungstest & Gespräch mit Mentor.",
    detail: "Kurzer Fit-Check zu Sprache, Vorkenntnissen und Zeitfenster.",
    badge: "Mentor"
  },
  {
    title: "Kursauswahl & Kalender",
    desc: "Termine wählen, Live-Slots bestätigen.",
    detail: "Live-Unterricht, Prüfungsfenster und Lernplattform in Sync.",
    badge: "Plan"
  },
  {
    title: "Onboarding & Technik",
    desc: "Zugang zur Plattform, Material & Gruppen.",
    detail: "Tool-Check, Community-Channel, Ressourcen für die erste Woche.",
    badge: "Setup"
  },
  {
    title: "Start & Begleitung",
    desc: "Erste Session, wöchentliche Milestones.",
    detail: "Mentor-Check-ins, Fortschritt und Q&A.",
    badge: "Live"
  }
];

const MadrasahEnrollment = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section enrollment" ref={sectionRef}>
      <div className="container enrollment-shell">
        <div className="enroll-header">
          <div>
            <span className="enroll-pill">Anmeldung Madrasah</span>
            <h2>Scrollen Sie durch die Schritte.</h2>
            <p className="enroll-desc">Jeder Checkpoint blendet die Details ein – beim Zurückscrollen läuft die Animation rückwärts.</p>
          </div>
          <div className="enroll-meta">
            <span className="meta-label">Fortschritt</span>
            <strong>{Math.round((scrollYProgress.get() || 0) * 100)}%</strong>
            <small>für diese Schritte</small>
          </div>
        </div>

        <div className="enroll-layout">
          <div className="enroll-rail">
            <div className="rail-island">
              <div className="rail-track">
                <motion.div className="rail-fill" style={{ height: fill }} />
              </div>
              <div className="rail-glow" />
            </div>
          </div>

          <div className="checkpoint-list">
            {checkpoints.map((step, index) => {
              const start = index / checkpoints.length;
              const end = (index + 1) / checkpoints.length;
              const reveal = useTransform(scrollYProgress, [start, end], [0, 1]);
              const lift = useTransform(scrollYProgress, [start, end], [40, 0]);

              return (
                <motion.article
                  key={step.title}
                  className="checkpoint-card"
                  style={{ opacity: reveal, y: lift }}
                >
                  <div className="checkpoint-head">
                    <span className="checkpoint-badge">{step.badge}</span>
                    <div className="checkpoint-step">0{index + 1}</div>
                  </div>
                  <h3>{step.title}</h3>
                  <p className="checkpoint-desc">{step.desc}</p>
                  <p className="checkpoint-detail">{step.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="overview">
          <div className="overview-head">
            <h3>Übersicht aller Checkpoints</h3>
            <p>Nach dem Scroll sind alle Schritte hier zusammengefasst.</p>
          </div>
          <div className="overview-grid">
            {checkpoints.map((step) => (
              <div key={step.title} className="overview-card">
                <div className="overview-dot" />
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .enrollment {
          background: linear-gradient(180deg, #fdfaf3 0%, #ffffff 50%, #f9f7f2 100%);
          border-top: 1px solid var(--color-border-light);
          border-bottom: 1px solid var(--color-border-light);
        }

        .enrollment-shell {
          position: relative;
        }

        .enroll-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          flex-wrap: wrap;
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

        .enroll-meta {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 0.85rem 1.1rem;
          box-shadow: var(--shadow-sm);
          text-align: right;
          min-width: 160px;
        }

        .meta-label {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .enroll-layout {
          display: grid;
          grid-template-columns: 0.2fr 1fr;
          gap: var(--spacing-md);
          align-items: start;
          position: relative;
        }

        .enroll-rail {
          position: sticky;
          top: 100px;
          height: 100%;
        }

        .rail-island {
          position: relative;
          width: 10px;
          height: 100%;
          margin-left: auto;
        }

        .rail-track {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 100%;
          background: rgba(26, 21, 16, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(26, 21, 16, 0.05);
        }

        .rail-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--color-gold-gradient);
          border-radius: var(--radius-full);
        }

        .rail-glow {
          position: absolute;
          inset: -12px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent 60%);
          filter: blur(10px);
          opacity: 0.7;
          pointer-events: none;
        }

        .checkpoint-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .checkpoint-card {
          background: #fff;
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .checkpoint-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold-start);
        }

        .checkpoint-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-xs);
        }

        .checkpoint-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          background: rgba(212, 175, 55, 0.14);
          color: var(--color-gold-end);
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .checkpoint-step {
          font-weight: 700;
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          letter-spacing: 0.6px;
        }

        .checkpoint-desc {
          color: var(--color-text-primary);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .checkpoint-detail {
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .overview {
          margin-top: var(--spacing-lg);
          padding: var(--spacing-md);
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .overview-head h3 {
          margin-bottom: 6px;
        }

        .overview-head p {
          color: var(--color-text-secondary);
        }

        .overview-grid {
          margin-top: var(--spacing-md);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-sm);
        }

        .overview-card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.75rem;
          align-items: center;
          padding: 0.9rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background: #fff;
          box-shadow: var(--shadow-sm);
        }

        .overview-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-gold-gradient);
          box-shadow: 0 0 0 8px rgba(212, 175, 55, 0.12);
        }

        @media (max-width: 900px) {
          .enroll-layout {
            grid-template-columns: 1fr;
          }
          .enroll-rail {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .enroll-header {
            align-items: flex-start;
          }
          .checkpoint-card {
            padding: var(--spacing-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default MadrasahEnrollment;
