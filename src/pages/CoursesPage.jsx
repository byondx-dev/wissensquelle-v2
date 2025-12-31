import React from 'react';
import { Link } from 'react-router-dom';
import gateHero from '../assets/gate-hero.png';
import Particles from '../components/Particles';

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
      <section className="gate-hero">
        <div className="gate-overlay" />
        <div className="gate-overlay-soft" />
        <div className="particles-wrap" aria-hidden="true">
          <Particles
            particleColors={['#d8bf71', '#d8bf71']}
            particleCount={200}
            particleSpread={24}
            speed={0.12}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={2}
          />
        </div>
        <div className="gate-content">
          <div className="gate-text">
            <span className="eyebrow fade-up">Aktuelles Angebot</span>
            <h1 className="fade-up delay-1">Externe Kurse</h1>
            <p className="fade-up delay-2">
              Im Gegensatz zu den anderen Kursen müssen die Schüler die Vorklasse nicht absolvieren.
              Alle Kurse sind für Männer und Frauen.
            </p>
            <div className="hero-actions fade-up delay-3">
              <a href="#courses" className="btn btn-primary">Zu den Kursen</a>
              <a href="#steps" className="btn btn-secondary">Ablauf ansehen</a>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="steps">
        <div className="courses-inner">
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
        </div>
      </section>

      <section id="courses" className="courses-grid">
        <div className="courses-inner">
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
        </div>
      </section>

      <style>{`
        .courses-shell {
          background: var(--color-bg-alt);
          min-height: 100vh;
        }
        .gate-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 18px 80px;
          overflow: hidden;
          background: var(--color-bg-main);
          isolation: isolate;
          color: var(--color-text-primary);
        }

        .gate-hero::before {
          content: '';
          position: absolute;
          inset: -10%;
          background: url(${gateHero}) center/cover no-repeat;
          opacity: 1;
          z-index: -2;
          filter: saturate(1.1);
        }

        /* Gradient Overlay Layer (Bottom Fade) */
        .gate-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #F9F7F2 5%, rgba(249, 247, 242, 0.8) 20%, rgba(249, 247, 242, 0) 50%);
          z-index: -1;
        }

        [data-theme="dark"] .gate-hero {
          background: #050709;
          /* Ensure uniform background if image doesn't load or at edges */
        }

        [data-theme="dark"] .gate-hero::before {
          opacity: 0.8;
          filter: brightness(0.8);
        }

        [data-theme="dark"] .gate-hero::after {
          background: linear-gradient(to top, #050709 5%, rgba(5, 7, 9, 0.8) 20%, rgba(5, 7, 9, 0) 50%);
        }

        .gate-overlay { display: none; }
        .gate-overlay-soft { display: none; }

        .particles-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.9;
          filter: brightness(0.5) saturate(2) contrast(1.2);
        }

        [data-theme="dark"] .particles-wrap {
          opacity: 0.6;
          filter: none;
        }

        .particles-wrap canvas {
          width: 100% !important;
          height: 100% !important;
        }

        .particles-wrap .particles-container {
          position: absolute;
          inset: 0;
        }

        .gate-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 20px;
        }

        .gate-text {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          max-width: 650px;
          width: 100%;
        }

        [data-theme="dark"] .gate-text {
          background: rgba(15, 18, 22, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .gate-text h1 {
          margin: 8px 0;
          font-size: clamp(2.1rem, 3vw, 2.8rem);
          color: #0a2d3c;
        }

        [data-theme="dark"] .gate-text h1 {
           color: #fdf8ee;
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease forwards;
        }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }

        .gate-text p {
          margin: 0 0 24px;
          max-width: 100%;
          color: #4f6b7a;
          line-height: 1.6;
        }

        [data-theme="dark"] .gate-text p {
           color: #a0a0a0;
        }

        .gate-text .eyebrow {
          color: #8b6a20;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        [data-theme="dark"] .gate-text .eyebrow {
           color: #c6a043;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .hero-actions .btn {
          border-radius: 12px;
          padding: 12px 24px;
          font-weight: 800;
          box-shadow: 0 12px 26px rgba(0,0,0,0.1);
        }
        .hero-actions .btn-primary {
          background: linear-gradient(135deg, #0f8199, #0a4f60);
          color: #fff;
          border: none;
        }
        .hero-actions .btn-secondary {
          background: rgba(15, 129, 153, 0.1);
          color: #0a4f60;
          border: 1px solid rgba(15, 129, 153, 0.2);
          backdrop-filter: blur(4px);
        }

        [data-theme="dark"] .hero-actions .btn-secondary {
            background: rgba(255,255,255,0.1);
            color: #fff;
            border-color: rgba(255,255,255,0.2);
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 960px) {
          .gate-content {
            justify-content: center;
            padding: 0 16px;
          }
          .gate-text {
            text-align: center;
            padding: 2rem;
          }
          .gate-text p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .gate-hero {
            padding: 100px 0 60px;
          }
          .gate-text {
             padding: 1.5rem;
             border-radius: 20px;
          }
        }

        /* REFACTORED SECTIONS (Full Width Backgrounds) */
        .steps {
          padding: 70px 16px;
          width: 100%;
          background: #F9F7F2;
        }
        [data-theme="dark"] .steps {
          background: #050709;
        }

        .courses-grid {
          padding: 70px 16px 90px;
          width: 100%;
          background: #F9F7F2;
        }
        [data-theme="dark"] .courses-grid {
          background: #050709;
        }

        .courses-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .section-head h2 {
          margin: 6px 0 0;
          color: var(--color-text-primary);
        }
        .steps-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }
        .step-card {
          background: var(--color-surface);
          border-radius: 14px;
          padding: 16px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 12px;
          box-shadow: 0 12px 28px rgba(8,24,36,0.08);
          border: 1px solid var(--color-border);
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
          background: var(--color-bg-alt);
          color: var(--color-text-primary);
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
          color: var(--color-text-primary);
        }
        .step-body p {
          margin: 0;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
        .grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }
        .course-card {
          background: var(--color-surface);
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 12px 28px rgba(8,24,36,0.08);
          border: 1px solid var(--color-border);
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
          color: var(--color-text-primary);
          font-weight: 700;
          font-size: 0.9rem;
        }
        .badge.soft {
          background: rgba(198,160,67,0.14);
          color: var(--color-text-primary);
        }
        .course-card h3 {
          margin: 4px 0;
          color: var(--color-text-primary);
        }
        .teaser {
          margin: 0 0 8px;
          color: var(--color-text-secondary);
        }
        .card-actions {
          margin-top: auto;
        }
        .btn {
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 800;
          border: 1px solid #0f8199;
          color: var(--color-text-primary);
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
          background: var(--color-surface);
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
          .gate-content {
            grid-template-columns: 1fr;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .gate-hero {
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
