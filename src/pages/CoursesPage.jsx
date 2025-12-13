import React from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const steps = [
    { title: 'Zahlung', desc: 'Kursgebühr bezahlen.' },
    { title: 'Meldung', desc: 'Angegebene WhatsApp-Nummer anschreiben und Zahlung nachweisen.' },
    { title: 'Beitritt', desc: 'Klassengruppe über den erhaltenen Link beitreten.' },
    { title: 'Start', desc: 'Am Live-Unterricht teilnehmen oder Aufzeichnungen schauen.' },
  ];

  const courses = [
    { title: 'Hanafī Usūl Al-Hadīth', level: 'Fortgeschritten', mode: 'Online' },
    { title: 'ʿUmdah al-ʿAqāid', level: 'Fortgeschritten', mode: 'Online' },
    { title: 'Nūr Al-Īdhāh', level: 'Einsteiger', mode: 'Online' },
    { title: 'Qurʾān Lesen Lernen', level: 'Einsteiger', mode: 'Hybrid' },
    { title: 'Al-Asmā Al-Ḥusnā', level: 'Alle', mode: 'Online' },
    { title: "Qur'an Rezitation Essentials", level: 'Einsteiger', mode: 'Online' },
    { title: 'Tafsir Journey', level: 'Alle', mode: 'Online' },
    { title: 'Aqida Foundations', level: 'Einsteiger', mode: 'Online' },
  ];

  return (
    <main className="courses-shell">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Externe Kurse</span>
            <h1>EXTERNE KURSE</h1>
            <p>
              Im Gegensatz zu den anderen Kursen müssen die Schüler die Vorklasse nicht absolvieren.
              Alle Kurse sind für Männer und Frauen.
            </p>
            <div className="hero-actions">
              <a href="#courses" className="btn primary">Zu den Kursen</a>
              <a href="#steps" className="btn ghost">Ablauf ansehen</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-icon">
              <div className="circle" />
              <div className="book">
                <div className="book-cover" />
                <div className="book-page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="steps">
        <div className="section-head">
          <span className="eyebrow">Ablauf der Anmeldung</span>
          <h2>So startest du</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={step.title} className="step-card">
              <div className="step-marker">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                {idx < steps.length - 1 && <div className="step-line" aria-hidden="true" />}
              </div>
              <div className="step-body">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="courses-grid">
        <div className="section-head">
          <span className="eyebrow">Aktuelle Kurse</span>
          <h2>Unsere externen Kurse</h2>
        </div>
        <div className="grid">
          {courses.map((course) => (
            <article key={course.title} className="course-card">
              <div className="card-top">
                <div className="badge">{course.mode}</div>
                <div className="badge soft">{course.level}</div>
              </div>
              <h3>{course.title}</h3>
              <p className="teaser">Live-Unterricht mit Aufzeichnungen, betreut durch unsere Lehrkräfte.</p>
              <div className="card-actions">
                <Link to="/contact" className="btn ghost small">Details & Anmeldung</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .courses-shell {
          background: #f6f8fb;
          min-height: 100vh;
        }
        .hero {
          background: linear-gradient(135deg, rgba(15,129,153,0.08), rgba(198,160,67,0.06));
          padding: 120px 16px 80px;
        }
        .hero-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
        }
        .hero-copy h1 {
          margin: 8px 0 12px;
          font-size: clamp(2rem, 3vw, 2.6rem);
          color: #0a2d3c;
        }
        .hero-copy p {
          color: #4f6b7a;
          line-height: 1.6;
          max-width: 620px;
        }
        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #0f8199;
          font-weight: 800;
          font-size: 0.9rem;
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 14px;
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .float-icon {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(145deg, #ffffff, #e8f1f4);
          box-shadow: 0 18px 40px rgba(8,24,36,0.12);
          display: grid;
          place-items: center;
          animation: bob 3s ease-in-out infinite;
          position: relative;
        }
        .float-icon .circle {
          position: absolute;
          inset: 18px;
          border-radius: 50%;
          border: 1px dashed rgba(12,60,78,0.16);
        }
        .book {
          width: 86px;
          height: 68px;
          position: relative;
        }
        .book-cover {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #0f8199, #0a4f60);
          box-shadow: 0 10px 24px rgba(10,79,96,0.25);
        }
        .book-page {
          position: absolute;
          inset: 8px;
          border-radius: 8px;
          background: #fff;
          box-shadow: inset 0 0 0 1px rgba(12,60,78,0.12);
        }
        @keyframes bob {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .steps {
          padding: 70px 16px;
          max-width: 1180px;
          margin: 0 auto;
        }
        .section-head h2 {
          margin: 6px 0 0;
          color: #0a2d3c;
        }
        .steps-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }
        .step-card {
          background: #fff;
          border-radius: 14px;
          padding: 16px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 12px;
          box-shadow: 0 12px 28px rgba(8,24,36,0.08);
          border: 1px solid rgba(12,60,78,0.06);
          position: relative;
        }
        .step-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .step-marker span {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: #f0f6f8;
          color: #0a2d3c;
          font-weight: 800;
          display: grid;
          place-items: center;
        }
        .step-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(180deg, rgba(12,60,78,0.15), rgba(12,60,78,0.05));
        }
        .step-body h4 {
          margin: 0 0 4px;
          color: #0a2d3c;
        }
        .step-body p {
          margin: 0;
          color: #4f6b7a;
          line-height: 1.5;
        }
        .courses-grid {
          padding: 70px 16px 90px;
          max-width: 1180px;
          margin: 0 auto;
        }
        .grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }
        .course-card {
          background: #fff;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 12px 28px rgba(8,24,36,0.08);
          border: 1px solid rgba(12,60,78,0.06);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .card-top {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .badge {
          padding: 6px 10px;
          border-radius: 10px;
          background: rgba(15,129,153,0.12);
          color: #0a4f60;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .badge.soft {
          background: rgba(198,160,67,0.14);
          color: #8b6a20;
        }
        .course-card h3 {
          margin: 4px 0;
          color: #0a2d3c;
        }
        .teaser {
          margin: 0 0 8px;
          color: #4f6b7a;
        }
        .card-actions {
          margin-top: auto;
        }
        .btn {
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 800;
          border: 1px solid #0f8199;
          color: #0a2d3c;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 10px 20px rgba(12,60,78,0.12);
          background: #fff;
        }
        .btn.primary {
          background: linear-gradient(135deg, #0f8199, #0a4f60);
          color: #fff;
          border-color: transparent;
        }
        .btn.ghost {
          background: #fff;
        }
        .btn.small {
          padding: 8px 12px;
          font-size: 0.95rem;
        }
        .btn:hover {
          transform: translateY(-1px);
        }
        .section-head {
          display: grid;
          gap: 4px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .hero {
            padding: 100px 14px 70px;
          }
          .courses-grid, .steps {
            padding: 60px 12px;
          }
        }
      `}</style>
    </main>
  );
};

export default CoursesPage;
