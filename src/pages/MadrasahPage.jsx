import React from 'react';
import { Link } from 'react-router-dom';
import ExternalCourses from '../components/ExternalCourses';
import MadrasahEnrollment from '../components/MadrasahEnrollment';
import gateHero from '../assets/gate-hero.png';
import Particles from '../components/Particles';

const MadrasahPage = () => {
  return (
    <div className="page-madrasah">
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
            <span className="eyebrow fade-up">Studienpfad</span>
            <h1 className="fade-up delay-1">Online Madrasah</h1>
            <p className="fade-up delay-2">Strukturiertes islamisches Wissen für jeden – von den Grundlagen bis zur Ijazah.</p>
            <div className="hero-actions fade-up delay-3">
              <Link to="#courses" className="btn btn-primary">Kurse ansehen</Link>
              <Link to="/register" className="btn btn-secondary">Anmelden</Link>
            </div>
          </div>
        </div>
      </section>

      <MadrasahEnrollment />

      <ExternalCourses />

      <section className="madrasah-section">
        <div className="madrasah-inner container">
          <header className="section-header">
            <h2>Unterrichte</h2>
            <p>Breites Angebot an Online- und Präsenzkursen – strukturiert, begleitet und klar kommuniziert.</p>
          </header>

          <div className="madrasah-grid">
            <div className="content-card">
              <h3>Anmeldung & Leistungskurse</h3>
              <div className="rules">
                <h4>Allgemeine Regeln</h4>
                <ul>
                  <li>Vorklasse ist Pflicht vor allen weiterführenden Kursen (ausgenommen externe Kurse).</li>
                  <li>Kurse stehen Männern und Frauen offen.</li>
                  <li>Nach der Vorklasse Zugang zu fortgeschrittenen Wissenschaften.</li>
                  <li>Lehrkräfte beraten zu passenden Folgekursen.</li>
                  <li>Mitwirkende werden nach Möglichkeit in Projekte eingebunden.</li>
                </ul>
              </div>

              <div className="steps">
                <h4>Ablauf der Anmeldung</h4>
                <ol>
                  <li><strong>Anmeldung:</strong> Für gewünschten Kurs registrieren.</li>
                  <li><strong>Benachrichtigung:</strong> Madrasah vergibt Termin fürs Vorstellungsgespräch.</li>
                  <li><strong>Vorstellungsgespräch:</strong> Kennenlernen, Abläufe, Eignung einschätzen.</li>
                  <li><strong>Start:</strong> Zuteilung zur Klasse, Zeiten abstimmen.</li>
                </ol>
              </div>

              <div className="courses" id="courses">
                <h4>Leistungskurse</h4>
                <div className="course-grid">
                  <div className="course-card" id="vorklasse">
                    <h5>Vorklasse</h5>
                    <p className="meta">48 €/Monat · ca. 2h/Woche · ~1 Jahr</p>
                    <ul>
                      <li>Adab & Tazkiyah</li>
                      <li>Einführung in ʿAqīdah & Fiqh</li>
                      <li>Einführung Tajwīd & Sīrah</li>
                    </ul>
                  </div>
                  <div className="course-card" id="imam-kurs">
                    <h5>Imam-Kurs</h5>
                    <p className="meta">6 €/Std · ca. 2h/Woche · ~3 Jahre</p>
                    <ul>
                      <li>Unterrichten von Kindern, Arabisch</li>
                      <li>Fiqh, ʿAqīdah, Adab</li>
                      <li>Führungstraining, Vorbeten</li>
                    </ul>
                  </div>
                  <div className="course-card" id="komparative-religionen">
                    <h5>Komparative Religionen</h5>
                    <p className="meta">6 €/Std · ca. 3h/Woche · ~1 Jahr</p>
                    <ul>
                      <li>Vergleichende Religionswissenschaft</li>
                      <li>Ideologien & Philosophien</li>
                      <li>Argumentative Daʿwah</li>
                    </ul>
                  </div>
                  <div className="course-card" id="dawah-kurs">
                    <h5>Daʿwah-Kurs</h5>
                    <p className="meta">6 €/Std · ca. 2h/Woche · ~1 Jahr</p>
                    <ul>
                      <li>Ausbildung zum Dāʿī</li>
                      <li>Umgang mit Altersgruppen</li>
                      <li>Weisheiten aus Qurʾān & Sunnah</li>
                    </ul>
                  </div>
                  <div className="course-card" id="alim-kurs">
                    <h5>ʿĀlim-Kurs</h5>
                    <p className="meta">80 €/Monat · ca. 4h/Woche · 8–10 Jahre</p>
                    <ul>
                      <li>Intensive islamische Wissenschaften</li>
                      <li>Hadith, Tafsīr, ʿAqīdah, Fiqh</li>
                      <li>Weg zum Gelehrtentum</li>
                    </ul>
                  </div>
                </div>
                <div className="course-actions">
                  <Link to="/register" className="btn btn-primary">Schüler/in werden</Link>
                  <Link to="/scholars" className="btn btn-secondary">Zu den Gelehrten</Link>
                </div>
                <p className="note">Alle Schüler erhalten nach den Prüfungen einen Prüfungsverlauf.</p>
              </div>
            </div>
          </div>

          <div className="calendar-block">
            <h3>Der Jahres-Kalender</h3>
            <div className="calendar-placeholder">
              <p>Platzhalter für Kalenderbild / PDF</p>
            </div>
            <ul className="calendar-list">
              <li>12 Monate Kalenderjahr</li>
              <li>3 Prüfungswochen</li>
              <li>Ramadhān Ferien</li>
              <li>ʿĪd al-Aḍḥā Ferien</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
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
              }

              [data-theme="dark"] .gate-hero::before {
                opacity: 0.8;
                filter: brightness(0.8);
              }

              [data-theme="dark"] .gate-hero::after {
                background: linear-gradient(to top, #050709 5%, rgba(5, 7, 9, 0.8) 20%, rgba(5, 7, 9, 0) 50%);
              }

              .gate-overlay {
                display: none;
              }

              .gate-overlay-soft {
                display: none;
              }

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
              }

              .madrasah-section {
                padding: 80px 16px;
                background: #F9F7F2;
                width: 100%;
              }

              [data-theme="dark"] .madrasah-section {
                background: #050709;
              }

              .madrasah-inner {
                 max-width: 1200px;
                 margin: 0 auto;
              }
              .madrasah-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: var(--spacing-lg);
                align-items: start;
                margin-top: var(--spacing-md);
              }
              .content-card {
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                border-radius: 18px;
                box-shadow: var(--shadow-md);
                padding: var(--spacing-md);
              }
              .info-card h3, .content-card h3 {
                margin-top: 0;
                margin-bottom: var(--spacing-sm);
              }
              .content-card h4 {
                margin-top: 0;
                margin-bottom: var(--spacing-xs);
                color: var(--color-text-primary);
              }
              .rules ul, .steps ol {
                margin: 0 0 var(--spacing-sm);
                padding-left: 1.1rem;
                color: var(--color-text-secondary);
              }
              .course-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: var(--spacing-sm);
                margin-top: var(--spacing-sm);
              }
              .course-card {
                background: var(--color-bg-alt);
                border: 1px solid var(--color-border);
                border-radius: 12px;
                padding: var(--spacing-sm);
              }
              .course-card h5 {
                margin: 0 0 4px;
                color: var(--color-text-primary);
              }
              .course-card .meta {
                margin: 0 0 6px;
                color: var(--color-text-secondary);
                font-size: 0.95rem;
              }
              .course-card ul {
                margin: 0;
                padding-left: 1rem;
                color: var(--color-text-secondary);
                line-height: 1.4;
              }
              .course-actions {
                display: flex;
                gap: var(--spacing-sm);
                flex-wrap: wrap;
                margin-top: var(--spacing-sm);
              }
              .note {
                margin-top: var(--spacing-xs);
                color: var(--color-text-secondary);
              }
              .calendar-block {
                margin-top: var(--spacing-lg);
                text-align: center;
              }
              .calendar-placeholder {
                border: 2px dashed var(--color-border);
                border-radius: 18px;
                padding: 40px 20px;
                margin: 12px 0;
                color: var(--color-text-secondary);
                background: var(--color-bg-alt);
              }
              .calendar-list {
                list-style: none;
                padding: 0;
                color: var(--color-text-secondary);
                line-height: 1.6;
              }
              .section-header p {
                color: var(--color-text-secondary);
              }
              @media (max-width: 960px) {
                .madrasah-grid {
                  grid-template-columns: 1fr;
                }
              }
            `}</style>
    </div>
  );
};

export default MadrasahPage;
