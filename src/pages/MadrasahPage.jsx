import React from 'react';
import { Link } from 'react-router-dom';
import ExternalCourses from '../components/ExternalCourses';
import MadrasahEnrollment from '../components/MadrasahEnrollment';
import PageHero from '../components/PageHero';
import mosqueImg from '../assets/mosque.png';

const MadrasahPage = () => {
    return (
        <div className="page-madrasah">
            <PageHero
                eyebrow="Studienpfad"
                title="Online Madrasah"
                subtitle="Strukturiertes islamisches Wissen für jeden"
                tone="madrasah"
                image={mosqueImg}
            />

            <MadrasahEnrollment />

            <ExternalCourses />

            <section className="section container madrasah-section">
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
            </section>

            <style>{`
              .madrasah-section {
                background: linear-gradient(180deg, #f9fafc 0%, #ffffff 100%);
              }
              .madrasah-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: var(--spacing-lg);
                align-items: start;
                margin-top: var(--spacing-md);
              }
              .content-card {
                background: #fff;
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
                color: #0a4f60;
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
                background: #f8fbfc;
                border: 1px solid var(--color-border);
                border-radius: 12px;
                padding: var(--spacing-sm);
              }
              .course-card h5 {
                margin: 0 0 4px;
                color: #0a2533;
              }
              .course-card .meta {
                margin: 0 0 6px;
                color: #4f6b7a;
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
