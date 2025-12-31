import React, { useMemo, useState } from 'react';

const steps = ['Persönliche Angaben', 'Einverständnis', 'Motivation'];

const RegistrationPage = () => {
  const [consent, setConsent] = useState('adult');
  const [stepIndex, setStepIndex] = useState(0);
  const guardianNeeded = consent !== 'adult';

  const knowledgeTip = useMemo(
    () => (
      <ul className="tip-list">
        <li><strong>Einsteiger:</strong> Wissen primär aus dem Internet und/oder Gebet frisch gelernt oder/oder einer der Begriffe Fiqh, Tajwīd, Tazkiyah, Tafsīr, Makruh/Wājib/Fardh sind unbekannt oder nicht erklärbar.</li>
        <li><strong>Fortgeschritten:</strong> Mindestens 1 Jahr Unterrichte bei anerkannten/authentischen Lehrern und Prüfungen absolviert, weiß was einen autorisierten Lehrer ausmacht.</li>
        <li><strong>Sehr fortgeschritten:</strong> Mehrere Madrasah-Unterrichtszweige (keine Vorklasse/externe Kurse) erfolgreich abgeschlossen und aktuell oder war bei anerkannten Gelehrten in Ausbildung.</li>
      </ul>
    ),
    []
  );

  const goNext = () => {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="reg-shell">
      <div className="reg-pattern" aria-hidden="true" />
      <div className="reg-container">
        <div className="reg-layout">
          <aside className="reg-sidebar">
            <div className="reg-title">Registrierung</div>
            <p className="reg-sub">Drei Schritte bis zur Anmeldung.</p>
            <p className="reg-sub">Klare Angaben, Einverständnis, Motivation.</p>
            <div className="reg-steps">
              {steps.map((label, idx) => (
                <div key={label} className={`reg-step ${idx === stepIndex ? 'active' : ''}`}>
                  <div className="step-circle">{`0${idx + 1}`}</div>
                  <div className="step-label">{label}</div>
                </div>
              ))}
            </div>
          </aside>

          <section className="reg-card">
            {stepIndex === 0 && (
              <div className="section-block">
                <h2 className="section-title">Persönliche Angaben</h2>
                <div className="form-grid three">
                  <label>
                    <span>Fullname</span>
                    <input type="text" defaultValue="Test ui" placeholder="Fullname" />
                  </label>
                  <label>
                    <span>Nickname</span>
                    <input type="text" defaultValue="test" placeholder="Nickname" />
                  </label>
                  <label>
                    <span>Gender</span>
                    <select defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </label>
                </div>

                <div className="form-grid three">
                  <label>
                    <span>Birthdate</span>
                    <input type="date" defaultValue="2024-01-17" className="with-icon" />
                  </label>
                  <label>
                    <span>Birthplace</span>
                    <input type="text" defaultValue="Jakarta" />
                  </label>
                  <label>
                    <span>Religion</span>
                    <select defaultValue="Muslim">
                      <option>Muslim</option>
                      <option>Christian</option>
                      <option>Hindu</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <div className="form-grid three">
                  <label>
                    <span>Citizenship</span>
                    <select defaultValue="Germany">
                      <option>Germany</option>
                      <option>Austria</option>
                      <option>Switzerland</option>
                      <option>Indonesia</option>
                      <option>Turkey</option>
                    </select>
                  </label>
                  <label>
                    <span>Land</span>
                    <input type="text" defaultValue="Deutschland" />
                  </label>
                  <label>
                    <span>Stadt</span>
                    <input type="text" defaultValue="Berlin" />
                  </label>
                </div>

                <div className="form-grid two">
                  <label>
                    <span>Postleitzahl</span>
                    <input type="text" defaultValue="10115" />
                  </label>
                  <label>
                    <span>Kinder</span>
                    <select defaultValue="none">
                      <option value="none">Nein, ich habe keine Kinder</option>
                      <option value="one">Ja, ich habe ein Kind alhamdulillah</option>
                      <option value="two">Ja, ich habe zwei Kinder alhamdulillah</option>
                      <option value="three">Ja, ich habe drei Kinder alhamdulillah</option>
                      <option value="more">Ja, ich habe mehr als 3 Kinder alhamdulillah</option>
                    </select>
                  </label>
                </div>
              </div>
            )}

            {stepIndex === 1 && (
              <div className="section-block">
                <h2 className="section-title">Einverständnis</h2>
                <div className="form-grid one">
                  <label className="full">
                    <span>Volljährigkeit / Erlaubnis</span>
                    <select value={consent} onChange={(e) => setConsent(e.target.value)}>
                      <option value="adult">Ich bin volljährig</option>
                      <option value="minor-no">Ich bin nicht volljährig und habe keine Erlaubnis mich islamisch weiterzubilden</option>
                      <option value="minor-yes">Ich bin nicht volljährig und habe die Erlaubnis mich islamisch weiterzubilden</option>
                    </select>
                  </label>
                </div>

                {guardianNeeded && (
                  <div className="form-grid three">
                    <label>
                      <span>Erziehungsberechtigter Name</span>
                      <input type="text" placeholder="Mutter / Wali" />
                    </label>
                    <label>
                      <span>Erziehungsberechtigter E-Mail</span>
                      <input type="email" placeholder="email@example.com" />
                    </label>
                    <label>
                      <span>Erziehungsberechtigter Telefon</span>
                      <input type="text" placeholder="+49 ..." />
                    </label>
                  </div>
                )}
              </div>
            )}

            {stepIndex === 2 && (
              <div className="section-block">
                <h2 className="section-title">Motivation & Wissensstand</h2>
                <div className="form-grid one">
                  <label className="full">
                    <span>Motivationsschreiben</span>
                    <textarea rows={4} placeholder="Warum möchten Sie studieren? Ziele, Erwartungen, Zeitfenster." />
                  </label>
                </div>
                <div className="form-grid two">
                  <label>
                    <span>Interessen</span>
                    <input type="text" placeholder="z.B. Fiqh, Aqīdah, Tajwīd, Daʿwah" />
                  </label>
                  <label>
                    <span>Aktueller Wissensstand</span>
                    <select defaultValue="beginner">
                      <option value="beginner">Einsteiger</option>
                      <option value="intermediate">Fortgeschritten</option>
                      <option value="advanced">Sehr fortgeschritten</option>
                    </select>
                    {knowledgeTip}
                  </label>
                </div>
              </div>
            )}

            <div className="actions">
              {stepIndex > 0 && (
                <button type="button" className="btn ghost" onClick={goBack}>Back</button>
              )}
              {stepIndex < steps.length - 1 && (
                <button type="button" className="btn solid" onClick={goNext}>Next</button>
              )}
              {stepIndex === steps.length - 1 && (
                <button type="button" className="btn solid">Submit</button>
              )}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .reg-shell {
          min-height: 100vh;
          background: var(--color-bg-alt);
          padding: 120px 16px 48px;
          position: relative;
        }
        .reg-pattern {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 140px 140px, 140px 140px;
          pointer-events: none;
        }
        .reg-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          z-index: 1;
        }
        .reg-layout {
          display: grid;
          grid-template-columns: 0.3fr 0.7fr;
          gap: 16px;
        }
        .reg-sidebar {
          background: var(--color-surface);
          border-radius: 20px;
          padding: 18px;
          box-shadow: 0 12px 30px rgba(12, 60, 78, 0.08);
          border: 1px solid var(--color-border);
        }
        .reg-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-gold-start);
        }
        .reg-sub {
          color: var(--color-text-secondary);
          margin: 4px 0;
        }
        .reg-steps {
          margin-top: 12px;
          border-left: 2px solid #e5e8ef;
          padding-left: 14px;
          display: grid;
          gap: 10px;
        }
        .reg-step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 10px;
          align-items: center;
          color: var(--color-text-secondary);
          font-weight: 700;
        }
        .reg-step .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid var(--color-border);
          display: grid;
          place-items: center;
          font-size: 0.85rem;
          background: var(--color-bg-alt);
        }
        .reg-step.active .step-circle {
          border-color: #1f4f8b;
          color: #1f4f8b;
          background: #eaf3ff;
        }
        .reg-step .step-label {
          font-size: 0.95rem;
        }
        .reg-step.active .step-label {
          color: #1f4f8b;
          font-weight: 800;
        }
        .reg-card {
          background: var(--color-surface);
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 12px 30px rgba(12, 60, 78, 0.08);
          border: 1px solid var(--color-border);
        }
        .section-block {
          padding-bottom: 12px;
          margin-bottom: 18px;
          border-bottom: 1px solid #eef1f5;
        }
        .section-block:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
        }
        .section-title {
          margin: 0 0 12px;
          color: var(--color-primary);
          font-size: 1.2rem;
          font-weight: 800;
        }
        .form-grid {
          display: grid;
          gap: 14px;
          margin-bottom: 12px;
        }
        .form-grid.one {
          grid-template-columns: 1fr;
        }
        .form-grid.two {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .form-grid.three {
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
        .form-grid .full { grid-column: 1 / -1; }
        .form-grid .half { max-width: 360px; }
        label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-weight: 700;
          color: var(--color-text-primary);
          font-size: 0.95rem;
          letter-spacing: 0.2px;
        }
        input, select {
          height: 44px;
          padding: 0 12px;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          background: var(--color-bg-alt);
          color: var(--color-text-primary);
          font-size: 0.98rem;
          font-family: inherit;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #1f4f8b;
          box-shadow: 0 0 0 3px rgba(31, 79, 139, 0.14);
        }
        textarea {
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #e0e3eb;
          min-height: 40px;
          background: var(--color-bg-alt);
        }
        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 8px;
        }
        .tip-list {
          margin: 8px 0 0;
          padding-left: 16px;
          color: var(--color-text-secondary);
          line-height: 1.5;
          font-size: 0.92rem;
        }
        .btn {
          min-width: 120px;
          height: 46px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }
        .btn.ghost {
          background: var(--color-bg-subtle);
          color: var(--color-primary);
          border-color: var(--color-border);
        }
        .btn.ghost:hover {
          background: #d8e9ff;
        }
        .btn.solid {
          background: var(--color-primary);
          color: #fff;
          box-shadow: 0 10px 22px rgba(31, 79, 139, 0.25);
        }
        .btn.solid:hover {
          background: #183d6f;
        }
        @media (max-width: 992px) {
          .reg-layout {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .reg-shell {
            padding-top: 100px;
          }
          .reg-card, .reg-sidebar {
            padding: 16px;
          }
          .reg-layout {
            gap: 12px;
          }
          .form-grid.two, .form-grid.three {
            grid-template-columns: 1fr;
          }
          .actions {
            flex-direction: column-reverse;
          }
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
};

export default RegistrationPage;
