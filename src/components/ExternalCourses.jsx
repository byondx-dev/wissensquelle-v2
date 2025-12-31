import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ExternalCourses = () => {
  const courses = [
    {
      title: "Qur'an Rezitation Essentials",
      desc: "Tajwīd Basics, Aussprache-Coaching und tägliche Audiokorrektur.",
      duration: "4 Wochen",
      format: "Live & On-Demand",
      badge: "Offen für alle"
    },
    {
      title: "Arabisch für Qur'an & Duʿā",
      desc: "Leicht verständliche Vokabeln und Grammatik, die sofort angewendet wird.",
      duration: "6 Wochen",
      format: "Digital",
      badge: "Einstiegskurs"
    },
    {
      title: "Fiqh im Alltag Kompakt",
      desc: "Gebet, Reinheit und Umgang im Beruf – kompakt, praxisnah, mit Checklisten.",
      duration: "3 Wochen",
      format: "Live + Workbook",
      badge: "Zertifikat"
    }
  ];

  const benefits = [
    "Keine Madrasah-Einschreibung nötig",
    "Live Sessions abends & am Wochenende",
    "Zertifizierte Teilnahmebestätigung",
    "Mentoring via Community"
  ];

  return (
    <section className="section external-courses" id="external-courses">
      <div className="container">
        <div className="external-head">
          <div>
            <span className="external-pill">Externe Kurse</span>
            <h2>Für Lernende außerhalb der Madrasah.</h2>
            <p className="external-desc">
              Kompakte, themenbezogene Kurse, die Sie flexibel belegen können – ganz ohne Immatrikulation.
            </p>
            <div className="benefit-tags">
              {benefits.map((item) => (
                <span key={item} className="benefit-tag">{item}</span>
              ))}
            </div>
          </div>

          <motion.div
            className="external-meta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="meta-dot" />
            <div>
              <p className="meta-kicker">Zugang</p>
              <h4>Offen. Strukturiert. Zertifiziert.</h4>
              <p className="meta-copy">
                Ideal für Berufstätige oder Interessierte, die punktuell vertiefen möchten.
              </p>
              <button className="btn btn-primary btn-sm">Jetzt Platz sichern</button>
            </div>
          </motion.div>
        </div>

        <div className="external-grid">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              className="external-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="card-top">
                <span className="card-badge">{course.badge}</span>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
              </div>
              <div className="card-meta-row">
                <span className="chip">{course.duration}</span>
                <span className="chip muted">{course.format}</span>
              </div>
              <div className="card-footer">
                <span className="pill-link">Details ansehen →</span>
                <span className="spots">Freie Plätze verfügbar</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .external-courses {
          background: var(--color-bg-main);
          border-top: 1px solid var(--color-border-light);
          border-bottom: 1px solid var(--color-border-light);
          position: relative;
          overflow: hidden;
        }

        .external-courses::after {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, transparent 60%);
          bottom: -60px;
          right: 12%;
          filter: blur(20px);
          opacity: 0.6;
        }

        .external-head {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-lg);
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }

        .external-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: var(--color-bg-alt);
          border: 1px solid var(--color-border);
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          font-size: 0.85rem;
          color: var(--color-text-primary);
        }

        .external-desc {
          max-width: 680px;
          color: var(--color-text-secondary);
          margin: var(--spacing-sm) 0 var(--spacing-md);
          font-size: 1.05rem;
        }

        .benefit-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .benefit-tag {
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-full);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          box-shadow: var(--shadow-sm);
          font-size: 0.95rem;
        }

        .external-meta {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          box-shadow: var(--shadow-md);
          display: grid;
          grid-template-columns: auto 1fr;
          gap: var(--spacing-sm);
          align-items: center;
        }

        .meta-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-gold-gradient);
          box-shadow: 0 0 0 8px rgba(212, 175, 55, 0.15);
        }

        .meta-kicker {
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.8rem;
          color: var(--color-text-soft);
          margin-bottom: 6px;
        }

        .meta-copy {
          color: var(--color-text-secondary);
          margin: 8px 0 var(--spacing-sm);
        }

        .external-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-md);
        }

        .external-card {
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .external-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-gold-start);
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(197, 160, 40, 0.12);
          color: var(--color-gold-end);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .card-top h3 {
          margin: var(--spacing-xs) 0 6px;
          font-size: 1.2rem;
        }

        .card-top p {
          color: var(--color-text-secondary);
        }

        .card-meta-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .chip {
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-full);
          background: var(--color-surface);
          color: var(--color-text-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .chip.muted {
          background: var(--color-bg-alt);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border);
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-sm);
          border-top: 1px solid var(--color-border);
          padding-top: var(--spacing-sm);
          color: var(--color-text-secondary);
          font-size: 0.95rem;
        }

        .pill-link {
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .spots {
          color: var(--color-gold-end);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .external-head {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
          .external-meta {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ExternalCourses;
