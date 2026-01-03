import React from 'react';
import { Link } from 'react-router-dom';
import ExternalCourses from '../components/ExternalCourses';
import MadrasahEnrollment from '../components/MadrasahEnrollment';
import PageHero from '../components/PageHero';
import libraryHero from '../assets/library-hero.png';

const MadrasahPage = () => {
  return (
      <div className="page-madrasah">
        <PageHero
            eyebrow="Studienpfad"
            title="Online Madrasah"
            subtitle="Strukturiertes islamisches Wissen für jeden"
            tone="madrasah"
            image={libraryHero}
        />

        <MadrasahEnrollment />

        <section className="section container madrasah-section">
          <header className="section-header">
            <h2>Studienpfad der Madrasah</h2>
            <p>Alle Schüler starten verpflichtend mit dem Vorkurs. Danach wählst du den weiterführenden Kurs, der zu deinem Ziel passt.</p>
          </header>

          <div className="path-shell">
            <div className="path-canvas" aria-label="Studienpfad Visual">
              <div className="path-simple">
                <div className="path-block path-block--vorkurs">
                  <div className="path-heading">
                    <span className="path-circle">1</span>
                    <div>
                      <h3>Vorkurs (Pflicht für alle)</h3>
                      <p className="meta">Pflichtstart · ~1 Jahr · ca. 2h/Woche</p>
                    </div>
                  </div>
                  <p className="body">Fundament legen, Rhythmus lernen, Prüfungen kennenlernen.</p>
                  <ul className="check-list">
                    <li>Grundlagen des Islam lernen</li>
                    <li>Fit werden für die weiterführenden Kurse</li>
                    <li>Motiviert und vorbereitet durchstarten</li>
                  </ul>
                  <div className="cta-row">
                    <Link to="/register" className="btn btn-primary">Mehr erfahren</Link>
                    <span className="cta-note">48 €/Monat · ca. 2h/Woche · ~1 Jahr</span>
                  </div>
                </div>

                <div className="path-block path-block--advanced">
                  <div className="path-heading">
                    <span className="path-circle path-circle--gold">2</span>
                    <div>
                      <h3>Danach: Weiterführende Kurse</h3>
                      <p className="meta">Nach dem Vorkurs wählst du deinen Pfad.</p>
                    </div>
                  </div>
                  <div className="course-tiles">
                    <div className="course-tile tile-alim">
                      <div className="tile-icon">A</div>
                      <div className="tile-content">
                        <h5>ʿĀlimiyyah</h5>
                        <p className="tile-sub">Tiefe islamische Wissenschaften</p>
                        <p className="tile-meta">80 €/Monat · ca. 4h/Woche · 8–10 Jahre</p>
                        <ul className="tile-list">
                          <li>Tafsir, Hadith, ʿAqīdah, Fiqh</li>
                          <li>Methodik & Usul für eigene Ableitungen</li>
                          <li>Begleitung auf dem Weg zum Gelehrtentum</li>
                        </ul>
                        <div className="tile-placeholder">Modulplan folgt.</div>
                      </div>
                    </div>
                    <div className="course-tile tile-imam">
                      <div className="tile-icon">I</div>
                      <div className="tile-content">
                        <h5>Imam-Kurs</h5>
                        <p className="tile-sub">Für angehende Vorbeter & Vorbilder</p>
                        <p className="tile-meta">6 €/Std · ca. 2h/Woche · ~3 Jahre</p>
                        <ul className="tile-list">
                          <li>Fiqh & ʿAqīdah für die Praxis</li>
                          <li>Vorbeten, Unterricht & Gemeindearbeit</li>
                          <li>Adab, Führung & Seelsorge</li>
                        </ul>
                        <div className="tile-placeholder">Stundenplan folgt.</div>
                      </div>
                    </div>
                    <div className="course-tile tile-dawah">
                      <div className="tile-icon">D</div>
                      <div className="tile-content">
                        <h5>Daʿwah-Kurs</h5>
                        <p className="tile-sub">Argumentativ und gesellschaftsrelevant</p>
                        <p className="tile-meta">6 €/Std · ca. 2h/Woche · ~1 Jahr</p>
                        <ul className="tile-list">
                          <li>Argumentativ überzeugen & dialogfähig bleiben</li>
                          <li>Zielgruppen: Jugendliche, Erwachsene, Öffentlichkeit</li>
                          <li>Weisheiten aus Qurʾān & Sunnah anwenden</li>
                        </ul>
                        <div className="tile-placeholder">Kursfahrplan folgt.</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-actions">
                    <Link to="/register" className="btn btn-primary">Schüler/in werden</Link>
                    <Link to="/scholars" className="btn btn-secondary">Zu den Gelehrten</Link>
                  </div>
                  <p className="note">Start immer im Vorkurs, danach Spezialisierung.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stepper">
            <div className="stepper-header">
              <h3>Schritt für Schritt zum Kurs</h3>
              <p>Klarer Ablauf vom Antrag bis zum Start – vertikal verbunden mit dem Fortschrittsbalken.</p>
            </div>
            <div className="stepper-track">
              <div className="step">
                <div className="step-marker">01</div>
                <div className="step-body">
                  <h4>Anmeldung</h4>
                  <p>Für den gewünschten Kurs registrieren (Vorklasse Pflicht, externe Kurse ausgenommen).</p>
                  <p className="step-sub">Formular absenden, Kontaktdaten und Kurswunsch hinterlegen.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-marker">02</div>
                <div className="step-body">
                  <h4>Benachrichtigung</h4>
                  <p>Die Madrasah meldet sich und vergibt einen Termin für ein Vorstellungsgespräch.</p>
                  <p className="step-sub">Terminbestätigung, kurze Vorabklärung zu Interessen und Verfügbarkeit.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-marker">03</div>
                <div className="step-body">
                  <h4>Vorstellungsgespräch</h4>
                  <p>Kennenlernen, Abläufe und Erwartungen; Eignung für Madrasah, Lehrende und Regeln prüfen.</p>
                  <p className="step-sub">Gespräch zu Zielen, Eigenschaften, Verhaltensregeln und gesuchten Profilen.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-marker">04</div>
                <div className="step-body">
                  <h4>Start</h4>
                  <p>Zuteilung zu einer Klasse, Abstimmung der Unterrichtszeiten, Prüfungsverlauf bereitstellen.</p>
                  <p className="step-sub">Zeiten fixieren, Zugang zum Unterricht und Prüfungsübersicht erhalten.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h4>Allgemeine Regeln</h4>
              <ul>
                <li>Vorklasse ist Pflicht vor allen weiterführenden Kursen.</li>
                <li>Kurse stehen Männern und Frauen offen.</li>
                <li>Nach der Vorklasse beraten Lehrkräfte zu passenden Folgekursen.</li>
                <li>Verbindliche Teilnahme, pünktliche Abgaben und Respekt.</li>
                <li>Mitwirkende werden nach Möglichkeit in Projekte eingebunden.</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>Ablauf der Anmeldung</h4>
              <ol>
                <li><strong>Anmeldung:</strong> Für den Vorkurs registrieren.</li>
                <li><strong>Benachrichtigung:</strong> Madrasah vergibt Termin fürs Vorstellungsgespräch.</li>
                <li><strong>Vorstellungsgespräch:</strong> Kennenlernen, Abläufe, Eignung einschätzen.</li>
                <li><strong>Start:</strong> Zuteilung zur Klasse, Zeiten abstimmen.</li>
              </ol>
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
        </section>

        <ExternalCourses />

        <style>{`
              .madrasah-section {
                position: relative;
                background: var(--color-bg-main);
                overflow: visible;
              }
              .madrasah-section::before {
                content: "";
                position: absolute;
                inset: 0;
                margin-left: calc(-50vw + 50%);
                margin-right: calc(-50vw + 50%);
                background: var(--color-bg-main);
                z-index: -1;
              }
              .section-header p {
                color: var(--color-text-secondary);
              }
              .madrasah-section .section-header {
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: var(--spacing-xs);
              }
              .path-shell {
                margin: var(--spacing-sm) 0 var(--spacing-md);
                display: flex;
                justify-content: center;
              }
              .path-canvas {
                position: relative;
                width: 100%;
                max-width: 1120px;
                border-radius: 26px;
                border: 1px solid rgba(15, 99, 119, 0.16);
                background: linear-gradient(180deg, rgba(244, 251, 255, 0.96) 0%, rgba(255, 246, 229, 0.94) 100%), url('/ChatGPT Image 17. Dez. 2025, 21_30_21.png') center/cover no-repeat;
                padding: clamp(18px, 3vw, 28px);
                box-shadow: 0 18px 38px rgba(15, 99, 119, 0.12);
                overflow: hidden;
                isolation: isolate;
              }
              .path-simple {
                position: relative;
                z-index: 1;
                display: grid;
                gap: var(--spacing-sm);
                padding: var(--spacing-xs) 0;
                max-width: 980px;
              }
              .path-simple::before {
                content: "";
                position: absolute;
                top: 12px;
                bottom: 12px;
                left: 28px;
                width: 2px;
                background: linear-gradient(180deg, rgba(12, 94, 120, 0.18), rgba(200, 157, 42, 0.22));
                z-index: 0;
              }
              .path-block {
                padding: clamp(18px, 3vw, 32px);
                border-radius: 20px;
                background: rgba(255, 255, 255, 0.94);
                border: 1px solid rgba(12, 94, 120, 0.12);
                box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
                text-align: left;
                position: relative;
                max-width: 100%;
                margin: 0 auto;
                z-index: 1;
                padding-left: clamp(70px, 8vw, 90px);
              }
              .path-block--vorkurs {
                background: linear-gradient(180deg, rgba(236, 248, 255, 0.95) 0%, rgba(236, 248, 255, 0.85) 100%);
              }
              .path-block--advanced {
                background: linear-gradient(180deg, rgba(255, 248, 233, 0.95) 0%, rgba(255, 248, 233, 0.88) 100%);
                border-color: rgba(200, 157, 42, 0.25);
              }
              .path-heading {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 12px;
                margin-bottom: var(--spacing-xs);
                flex-direction: row;
              }
              .path-circle {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                height: 42px;
                border-radius: 50%;
                background: linear-gradient(135deg, #0f6377 0%, #0d7f95 100%);
                color: #fff;
                font-weight: 700;
                border: 3px solid #dff4fc;
                box-shadow: 0 10px 24px rgba(13, 127, 149, 0.24);
              }
              .path-circle--gold {
                background: linear-gradient(135deg, #c89d2a 0%, #a67800 100%);
                border-color: #f6e9c9;
                box-shadow: 0 10px 24px rgba(200, 157, 42, 0.32);
              }
              .path-chip {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 12px;
                border-radius: 999px;
                background: rgba(15, 129, 153, 0.14);
                color: #0f6377;
                font-weight: 600;
                letter-spacing: 0.2px;
              }
              .path-chip {
                background: rgba(200, 157, 42, 0.18);
                color: #8a6b15;
                border: 1px solid rgba(200, 157, 42, 0.32);
              }
              .path-block h3 {
                margin: 0;
              }
              .path-block .meta {
                margin: 4px 0 var(--spacing-xs);
                color: #4f6b7a;
              }
              .path-block .body {
                color: var(--color-text-secondary);
                margin: 0 0 var(--spacing-xs);
              }
              .path-block--advanced .body {
                color: #6c5410;
              }
              .body {
                color: var(--color-text-secondary);
                margin-bottom: var(--spacing-xs);
              }
              .check-list {
                list-style: none;
                padding: 0;
                margin: 0 0 var(--spacing-sm);
                color: var(--color-text-secondary);
                line-height: 1.6;
                display: inline-flex;
                flex-direction: column;
                gap: 6px;
                align-items: flex-start;
              }
              .check-list li {
                position: relative;
                padding-left: 26px;
              }
              .check-list li::before {
                content: "✓";
                position: absolute;
                left: 0;
                top: 0;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: rgba(13, 127, 149, 0.12);
                color: #0d7f95;
                font-weight: 700;
                display: inline-flex;
                align-items: center;
                justify-content: center;
              }
              .cta-row {
                display: flex;
                gap: var(--spacing-sm);
                align-items: center;
                flex-wrap: wrap;
              }
              .cta-note {
                color: #4f6b7a;
                font-weight: 600;
              }
              .course-tiles {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: var(--spacing-sm);
                margin-top: var(--spacing-xs);
              }
              .course-tile {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 12px;
                align-items: center;
                padding: 14px 16px;
                border-radius: 14px;
                background: #fff;
                border: 1px solid rgba(200, 157, 42, 0.25);
                box-shadow: 0 10px 22px rgba(200, 157, 42, 0.14);
              }
              .tile-icon {
                width: 44px;
                height: 44px;
                border-radius: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-weight: 800;
                color: #fff;
                background: #0d7f95;
                box-shadow: 0 10px 20px rgba(13, 127, 149, 0.24);
              }
              .tile-alim .tile-icon {
                background: linear-gradient(135deg, #c89d2a, #b58300);
              }
              .tile-imam .tile-icon {
                background: linear-gradient(135deg, #2b8e57, #1f6f44);
              }
              .tile-dawah .tile-icon {
                background: linear-gradient(135deg, #0d7f95, #0b6b82);
              }
              .tile-content h5 {
                margin-top: 0;
              }
              .course-tile h5 {
                margin: 0 0 2px;
                color: #0a2533;
                font-size: 1.15rem;
              }
              .tile-sub {
                margin: 0;
                color: #4f6b7a;
              }
              .tile-meta {
                margin: 4px 0 0;
                color: #6c5410;
                font-weight: 600;
                font-size: 0.95rem;
              }
              .tile-list {
                margin: 8px 0 6px;
                padding-left: 1rem;
                color: var(--color-text-secondary);
                line-height: 1.45;
              }
              .tile-placeholder {
                margin-top: 8px;
                padding: 10px 12px;
                border-radius: 10px;
                border: 1px dashed rgba(200, 157, 42, 0.35);
                background: rgba(255, 249, 237, 0.8);
                color: #6c5410;
                font-weight: 600;
              }
              .stepper {
                margin: var(--spacing-md) auto;
                max-width: 960px;
              }
              .stepper-header {
                text-align: center;
                margin-bottom: var(--spacing-sm);
              }
              .stepper-header h3 {
                margin: 0 0 6px;
              }
              .stepper-header p {
                margin: 0;
                color: var(--color-text-secondary);
              }
              .stepper-track {
                position: relative;
                display: grid;
                gap: var(--spacing-sm);
              }
              .stepper-track::before {
                content: "";
                position: absolute;
                top: 12px;
                bottom: 12px;
                left: 22px;
                width: 2px;
                background: linear-gradient(180deg, rgba(12, 94, 120, 0.18), rgba(200, 157, 42, 0.22));
              }
              .step {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 14px;
                align-items: flex-start;
                padding: 14px 16px;
                border-radius: 14px;
                background: #fff;
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
                border: 1px solid var(--color-border);
                position: relative;
              }
              .step-marker {
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: linear-gradient(135deg, #0f6377, #0b6b82);
                color: #fff;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-weight: 800;
                box-shadow: 0 10px 20px rgba(13, 127, 149, 0.24);
                position: relative;
                z-index: 1;
              }
              .step-body h4 {
                margin: 0 0 4px;
              }
              .step-body p {
                margin: 0 0 4px;
                color: var(--color-text-secondary);
              }
              .step-sub {
                color: #4f6b7a;
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
              .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--spacing-sm);
                margin-top: var(--spacing-md);
              }
              .info-card {
                background: #fff;
                border: 1px solid var(--color-border);
                border-radius: 16px;
                box-shadow: var(--shadow-sm);
                padding: var(--spacing-md);
              }
              .info-card h4 {
                margin-top: 0;
                margin-bottom: var(--spacing-xs);
                color: #0a4f60;
              }
              .info-card ul, .info-card ol {
                margin: 0;
                padding-left: 1.1rem;
                color: var(--color-text-secondary);
                line-height: 1.6;
              }
              .info-card ol li {
                margin-bottom: 6px;
              }
              .calendar-block {
                margin-top: var(--spacing-lg);
                text-align: center;
              }
              .calendar-placeholder {
                border: 2px dashed #d9e2e8;
                border-radius: 18px;
                padding: 40px 20px;
                margin: 12px 0;
                color: #4f6b7a;
                background: #f9fbfd;
              }
              .calendar-list {
                list-style: none;
                padding: 0;
                color: var(--color-text-secondary);
                line-height: 1.6;
              }
              @media (max-width: 960px) {
                .path-canvas {
                  padding: var(--spacing-sm);
                }
                .path-block {
                  padding-left: 64px;
                }
              }
            `}</style>
      </div>
  );
};

export default MadrasahPage;
