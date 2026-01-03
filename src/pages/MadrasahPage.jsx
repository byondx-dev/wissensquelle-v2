import React from 'react';
import { Link } from 'react-router-dom';
import ExternalCourses from '../components/ExternalCourses';
import MadrasahEnrollment from '../components/MadrasahEnrollment';
import PageHero from '../components/PageHero';
import libraryHero from '../assets/library-hero.png';

const MadrasahPage = () => {
    const inlineSteps = [
        { number: '01', title: 'Anmeldung', desc: 'Formular ausfüllen, Vorkurs wählen und Kontaktdaten übermitteln.' },
        { number: '02', title: 'Benachrichtigung', desc: 'Wir melden uns mit einem Termin für ein kurzes Kennenlerngespräch.' },
        { number: '03', title: 'Vorstellungsgespräch', desc: 'Erwartungen klären, Regeln besprechen und Kurswahl bestätigen.' },
        { number: '04', title: 'Start', desc: 'Zuteilung zur Klasse, Unterrichtszeiten und Prüfungsverlauf erhalten.' },
    ];

    const branchCourses = [
        {
            key: 'alim',
            icon: 'A',
            title: 'ʿĀlimiyyah',
            sub: 'Tiefe islamische Wissenschaften',
            meta: '80 €/Monat · ca. 4h/Woche · 8–10 Jahre',
            list: [
                'Tafsir, Hadith, ʿAqīdah, Fiqh',
                'Methodik & Usul für eigene Ableitungen',
                'Begleitung auf dem Weg zum Gelehrtentum',
            ],
        },
        {
            key: 'imam',
            icon: 'I',
            title: 'Imam-Kurs',
            sub: 'Für angehende Vorbeter & Vorbilder',
            meta: '6 €/Std · ca. 2h/Woche · ~3 Jahre',
            list: [
                'Fiqh & ʿAqīdah für die Praxis',
                'Vorbeten, Unterricht & Gemeindearbeit',
                'Adab, Führung & Seelsorge',
            ],
        },
        {
            key: 'dawah',
            icon: 'D',
            title: 'Daʿwah-Kurs',
            sub: 'Argumentativ und gesellschaftsrelevant',
            meta: '6 €/Std · ca. 2h/Woche · ~1 Jahr',
            list: [
                'Argumentativ überzeugen & dialogfähig bleiben',
                'Zielgruppen: Jugendliche, Erwachsene, Öffentlichkeit',
                'Weisheiten aus Qurʾān & Sunnah anwenden',
            ],
        },
    ];

    return (
        <div className="page-madrasah">
            <PageHero
                eyebrow="Studienpfad"
                title="Online Madrasah"
                subtitle="Strukturiertes islamisches Wissen für jeden"
                tone="madrasah"
                image={libraryHero}
            />

            <section className="section enroll-inline">
                <div className="container">
                    <header className="enroll-inline-head">
                        <span className="enroll-tag">Anmeldung in der Madrasah</span>
                        <h2>Vier Schritte bis zum Start.</h2>
                        <p>Horizontale Übersicht: So gelangen Sie vom Antrag bis zur ersten Unterrichtsstunde.</p>
                    </header>

                    <div className="enroll-inline-steps">
                        {inlineSteps.map((step) => (
                            <article className="enroll-inline-card" key={step.title}>
                                <div className="inline-number">{step.number}</div>
                                <div className="inline-body">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="inline-actions">
                        <Link to="/register" className="btn btn-primary">Jetzt anmelden</Link>
                        <Link to="/contact" className="btn btn-secondary">Fragen stellen</Link>
                    </div>
                </div>
            </section>

            <section className="section container stage-hierarchy">
                <header className="section-header stage-header">
                    <span className="stage-tag">Studienaufbau</span>
                    <h2>Hierarchisch aufgebaut: Vorkurs & weiterführende Unterrichte.</h2>
                    <p>Alle starten im Vorkurs. Danach wählst du einen der weiterführenden Pfade, die zu deinem Ziel passen.</p>
                </header>

                <div className="stage-flow">
                    <div className="stage-block stage-core">
                        <div className="stage-number">1</div>
                        <h3>Vorkurs (Pflicht für alle)</h3>
                        <p>Fundament in ʿAqīdah, Fiqh, Tajwīd und Lernrhythmus. Prüfungen und klare Lernziele.</p>
                        <div className="stage-meta">Pflichtstart · ~1 Jahr · ca. 2h/Woche</div>
                        <div className="stage-actions">
                            <Link to="/register" className="btn btn-primary btn-sm">Zum Vorkurs</Link>
                            <Link to="/madrasah-as-sunnah" className="btn btn-secondary btn-sm">Mehr über As-Sunnah</Link>
                        </div>
                    </div>

                    <div className="stage-connector" aria-hidden="true">
                        <span className="connector-line" />
                        <span className="connector-dot" />
                    </div>

                    <div className="stage-branch">
                        <div className="branch-head">
                            <div className="stage-number soft">2</div>
                            <div>
                                <h3>Weiterführende Unterrichte</h3>
                                <p>Nach dem Vorkurs wählst du die Richtung: Gelehrtenweg, Imam-Spur oder Daʿwah-Fokus.</p>
                            </div>
                        </div>

                        <div className="branch-grid">
                            {branchCourses.map((course) => (
                                <div className={`branch-card branch-${course.key}`} key={course.key}>
                                    <div className="branch-icon">{course.icon}</div>
                                    <div className="branch-body">
                                        <h4>{course.title}</h4>
                                        <p className="branch-sub">{course.sub}</p>
                                        <p className="branch-meta">{course.meta}</p>
                                        <ul className="branch-list">
                                            {course.list.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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
              .enroll-inline {
                position: relative;
                padding-top: var(--spacing-lg);
                padding-bottom: var(--spacing-lg);
                background:
                  radial-gradient(circle at 12% 18%, rgba(15,129,153,0.14), transparent 38%),
                  radial-gradient(circle at 88% 70%, rgba(198,160,67,0.18), transparent 45%),
                  linear-gradient(180deg, #fdfaf3 0%, #ffffff 40%, #f6f8fb 100%);
              }

              .enroll-inline-head {
                text-align: center;
                max-width: 820px;
                margin: 0 auto var(--spacing-sm);
                display: grid;
                gap: 8px;
              }

              .enroll-tag {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 0.4rem 1rem;
                border-radius: var(--radius-full);
                background: rgba(26,21,16,0.05);
                border: 1px solid var(--color-border);
                font-weight: 800;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                font-size: 0.85rem;
              }

              .enroll-inline-head p {
                color: var(--color-text-secondary);
                margin: 0;
              }

              .enroll-inline-steps {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: var(--spacing-sm);
                margin-top: var(--spacing-sm);
              }

              .enroll-inline-card {
                position: relative;
                background: #fff;
                border: 1px solid rgba(15,129,153,0.16);
                border-radius: 18px;
                padding: var(--spacing-sm);
                box-shadow: 0 16px 36px rgba(8,24,36,0.12);
                overflow: hidden;
              }

              .enroll-inline-card::after {
                content: '';
                position: absolute;
                inset: 0;
                background:
                  radial-gradient(circle at 20% 20%, rgba(15,129,153,0.12), transparent 40%),
                  radial-gradient(circle at 80% 80%, rgba(198,160,67,0.12), transparent 45%);
                pointer-events: none;
              }

              .inline-number {
                width: 52px;
                height: 52px;
                border-radius: 16px;
                background: linear-gradient(135deg, #0f8199, #0a4f60);
                color: #fff;
                display: grid;
                place-items: center;
                font-weight: 800;
                letter-spacing: 0.04em;
                box-shadow: 0 12px 26px rgba(13,127,149,0.26);
                margin-bottom: 10px;
                position: relative;
                z-index: 1;
              }

              .inline-body {
                position: relative;
                z-index: 1;
              }

              .inline-body h3 {
                margin: 0 0 6px;
                color: #0a2533;
              }

              .inline-body p {
                margin: 0;
                color: var(--color-text-secondary);
                line-height: 1.6;
              }

              .inline-actions {
                margin-top: var(--spacing-sm);
                display: flex;
                gap: var(--spacing-xs);
                justify-content: center;
                flex-wrap: wrap;
              }

              .stage-hierarchy {
                padding-top: var(--spacing-lg);
                padding-bottom: var(--spacing-lg);
              }

              .stage-header {
                text-align: center;
                margin-bottom: var(--spacing-md);
              }

              .stage-tag {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 0.35rem 0.9rem;
                border-radius: var(--radius-full);
                background: rgba(198,160,67,0.14);
                border: 1px solid rgba(198,160,67,0.3);
                color: #7d6220;
                font-weight: 800;
                letter-spacing: 0.08em;
                text-transform: uppercase;
              }

              .stage-flow {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--spacing-sm);
                align-items: stretch;
              }

              .stage-block {
                position: relative;
                background: #fff;
                border: 1px solid var(--color-border);
                border-radius: 18px;
                padding: var(--spacing-sm);
                box-shadow: var(--shadow-sm);
              }

              .stage-core {
                background: linear-gradient(180deg, rgba(15,129,153,0.08), rgba(255,255,255,0.95));
                border: 1px solid rgba(15,129,153,0.2);
              }

              .stage-number {
                width: 44px;
                height: 44px;
                border-radius: 12px;
                background: linear-gradient(135deg, #0f8199, #0a4f60);
                color: #fff;
                display: grid;
                place-items: center;
                font-weight: 800;
                letter-spacing: 0.04em;
                box-shadow: 0 10px 22px rgba(13,127,149,0.24);
                margin-bottom: 10px;
              }

              .stage-number.soft {
                background: linear-gradient(135deg, #c89d2a, #a67800);
                box-shadow: 0 10px 22px rgba(200,157,42,0.26);
              }

              .stage-meta {
                color: #4f6b7a;
                font-weight: 700;
                margin-top: 6px;
              }

              .stage-actions {
                display: flex;
                gap: var(--spacing-xs);
                flex-wrap: wrap;
                margin-top: var(--spacing-xs);
              }

              .stage-connector {
                display: grid;
                place-items: center;
              }

              .connector-line {
                display: block;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, rgba(15,129,153,0.16), rgba(198,160,67,0.16));
                border-radius: 999px;
              }

              .connector-dot {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #c89d2a;
                box-shadow: 0 0 0 12px rgba(200,157,42,0.12);
                margin: auto;
              }

              .stage-branch {
                background: #fff;
                border: 1px solid var(--color-border);
                border-radius: 18px;
                padding: var(--spacing-sm);
                box-shadow: var(--shadow-md);
              }

              .branch-head {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: var(--spacing-xs);
              }

              .branch-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: var(--spacing-xs);
              }

              .branch-card {
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

              .branch-icon {
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

              .branch-alim .branch-icon {
                background: linear-gradient(135deg, #c89d2a, #b58300);
              }

              .branch-imam .branch-icon {
                background: linear-gradient(135deg, #2b8e57, #1f6f44);
              }

              .branch-dawah .branch-icon {
                background: linear-gradient(135deg, #0d7f95, #0b6b82);
              }

              .branch-body h4 {
                margin: 0 0 2px;
                color: #0a2533;
              }

              .branch-sub {
                margin: 0;
                color: #4f6b7a;
              }

              .branch-meta {
                margin: 4px 0 0;
                color: #6c5410;
                font-weight: 600;
                font-size: 0.95rem;
              }

              .branch-list {
                margin: 8px 0 0;
                padding-left: 1rem;
                color: var(--color-text-secondary);
                line-height: 1.45;
              }

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
              @media (max-width: 1024px) {
                .stage-flow {
                  grid-template-columns: 1fr;
                }
                .stage-connector {
                  display: none;
                }
              }
              @media (max-width: 960px) {
                .path-canvas {
                  padding: var(--spacing-sm);
                }
                .path-block {
                  padding-left: 64px;
                }
              }
              @media (max-width: 768px) {
                .enroll-inline {
                  padding-top: var(--spacing-md);
                  padding-bottom: var(--spacing-md);
                }
                .enroll-inline-steps {
                  grid-template-columns: 1fr;
                }
                .inline-number {
                  width: 48px;
                  height: 48px;
                }
                .stage-hierarchy {
                  padding-top: var(--spacing-md);
                  padding-bottom: var(--spacing-md);
                }
              }
            `}</style>
        </div>
    );
};

export default MadrasahPage;
