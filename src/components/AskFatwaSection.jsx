import React, { useMemo, useRef, useState } from 'react';

const AskFatwaSection = () => {
  const primary = '#0f8199';
  const accent = '#c6a043';
  const initialValues = useMemo(
    () => ({
      fullName: '',
      email: '',
      phone: '',
      question: '',
      course: 'Nein, kein Kurs',
      donationOption: '0',
      donationCustom: '',
      paymentMethod: 'card',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
    }),
    []
  );

  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sliderPos, setSliderPos] = useState(0);
  const [sliderLocked, setSliderLocked] = useState(false);
  const sliderRef = useRef(null);
  const knobRef = useRef(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Erforderlich';
    if (!form.email.trim()) next.email = 'Erforderlich';
    if (!form.phone.trim()) next.phone = 'Erforderlich';
    if (!form.question.trim()) next.question = 'Erforderlich';
    if (!form.donationOption) next.donationOption = 'Erforderlich';
    if (form.donationOption === 'custom' && !form.donationCustom.trim()) {
      next.donationCustom = 'Bitte Betrag eingeben';
    }
    if (form.paymentMethod === 'card') {
      if (!form.cardNumber.trim()) next.cardNumber = 'Kartennummer erforderlich';
      if (!form.cardExpiry.trim()) next.cardExpiry = 'MM/YY erforderlich';
      if (!form.cardCvc.trim()) next.cardCvc = 'CVC erforderlich';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const resetForm = () => {
    setForm(initialValues);
    setErrors({});
    setIsSubmitted(false);
    setSliderPos(0);
    setSliderLocked(false);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleSlider = (clientX, isEnd = false) => {
    if (!sliderRef.current || sliderLocked || isSubmitted) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const knobRect = knobRef.current?.getBoundingClientRect();
    const knobWidth = knobRect?.width || 48;
    const min = rect.left;
    const max = rect.right - knobWidth;
    const clamped = Math.min(Math.max(clientX - knobWidth / 2, min), max);
    const pct = ((clamped - min) / (max - min)) * 100;
    setSliderPos(pct);
    if (isEnd) {
      if (pct > 78) {
        setSliderPos(100);
        setSliderLocked(true);
        handleSubmit();
      } else {
        setSliderPos(0);
      }
    }
  };

  const paymentOptions = [
    { key: 'card', label: 'Card' },
    { key: 'klarna', label: 'Klarna' },
    { key: 'bancontact', label: 'Bancontact' },
    { key: 'eps', label: 'EPS' },
  ];

  if (isSubmitted) {
    return (
      <section id="ask-fatwa" className="askfatwa-shell">
        <div className="askfatwa-container">
          <div className="success-card">
            <div className="success-icon" />
            <h3>Vielen Dank! Deine Frage wurde übermittelt.</h3>
            <p>
              Unser Team prüft deine Angaben. Bei Spenden ab 10€ behandeln wir die Anfrage priorisiert.
              Du erhältst eine Rückmeldung per E-Mail.
            </p>
            <button type="button" className="btn-primary" onClick={resetForm}>
              Neue Frage stellen
            </button>
          </div>
        </div>
        <style>{styles(primary, accent)}</style>
      </section>
    );
  }

  return (
    <section id="ask-fatwa" className="askfatwa-shell">
      <div className="askfatwa-container">
        <aside className="guidelines-card">
          <div className="badge-anim">
            <div className="badge-inner">
              <div className="badge-page" />
              <div className="badge-fold" />
            </div>
          </div>
          <div className="guidelines-text">
            <h3>Wie du deine Fatwa-Frage richtig stellst</h3>
            <p>Klare, respektvolle Fragen helfen unseren Gelehrten, schnell und präzise zu antworten.</p>
            <ul>
              <li>Kontext kurz und klar schildern.</li>
              <li>Persönliche Situation grob erklären, ohne unnötige Details.</li>
              <li>Rechtsschule nennen, falls wichtig.</li>
              <li>Keine provokativen oder spekulativen Fragen.</li>
              <li>Möglichst nur eine Frage pro Formular.</li>
            </ul>
          </div>
        </aside>

        <div className="divider" aria-hidden="true" />

        <div className="form-card">
          <header className="form-head">
            <span className="eyebrow">Dār al-Iftā’</span>
            <h3>FRAGE STELLEN</h3>
            <p className="prior-hint">
              Diejenigen, die einen <strong>Mindestbetrag von 10€</strong> spenden, werden bei der Beantwortung
              priorisiert. Falls Sie nicht diesen Betrag spenden möchten, wählen Sie einfach <strong>0€</strong> aus.
            </p>
          </header>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="fullName">Voller Name *</label>
              <input
                id="fullName"
                type="text"
                value={form.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">E-Mail-Adresse *</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="phone">Telefon *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+49 ..."
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="question">Deine Frage *</label>
              <textarea
                id="question"
                rows={6}
                value={form.question}
                onChange={(e) => handleChange('question', e.target.value)}
              />
              {errors.question && <span className="error">{errors.question}</span>}
            </div>

            <div className="field">
              <label htmlFor="course">Schüler bei einer der folgenden Kurse?</label>
              <select
                id="course"
                value={form.course}
                onChange={(e) => handleChange('course', e.target.value)}
              >
                <option>Nein, kein Kurs</option>
                <option>ʿĀlimiyyah</option>
                <option>Imam-Kurs</option>
                <option>Daʿwah-Kurs</option>
                <option>Vorklasse</option>
                <option>Externer Kurs</option>
              </select>
              <small>Schüler der Wissensquelle werden auch ohne Mindestspende priorisiert.</small>
            </div>

            <div className="field">
              <label htmlFor="donation">Spende *</label>
              <select
                id="donation"
                value={form.donationOption}
                onChange={(e) => handleChange('donationOption', e.target.value)}
              >
                <option value="0">0 € – keine Spende</option>
                <option value="10">10 €</option>
                <option value="20">20 €</option>
                <option value="50">50 €</option>
                <option value="custom">Eigener Betrag</option>
              </select>
              {form.donationOption === 'custom' && (
                <input
                  type="number"
                  min="0"
                  placeholder="Eigener Betrag (€)"
                  value={form.donationCustom}
                  onChange={(e) => handleChange('donationCustom', e.target.value)}
                />
              )}
              {errors.donationOption && <span className="error">{errors.donationOption}</span>}
              {errors.donationCustom && <span className="error">{errors.donationCustom}</span>}
              <small>Ab 10€ wird deine Frage priorisiert behandelt.</small>
            </div>

            <div className="field">
              <label>Zahlung</label>
              <div className="pay-toggle">
                {paymentOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    className={`pill ${form.paymentMethod === opt.key ? 'active' : ''}`}
                    onClick={() => handleChange('paymentMethod', opt.key)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {form.paymentMethod === 'card' ? (
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="cardNumber">Kartennummer</label>
                    <input
                      id="cardNumber"
                      value={form.cardNumber}
                      onChange={(e) => handleChange('cardNumber', e.target.value)}
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                  </div>
                  <div className="field mini">
                    <label htmlFor="cardExpiry">Ablauf (MM/YY)</label>
                    <input
                      id="cardExpiry"
                      value={form.cardExpiry}
                      onChange={(e) => handleChange('cardExpiry', e.target.value)}
                      placeholder="08/28"
                    />
                    {errors.cardExpiry && <span className="error">{errors.cardExpiry}</span>}
                  </div>
                  <div className="field mini">
                    <label htmlFor="cardCvc">CVC</label>
                    <input
                      id="cardCvc"
                      value={form.cardCvc}
                      onChange={(e) => handleChange('cardCvc', e.target.value)}
                      placeholder="123"
                    />
                    {errors.cardCvc && <span className="error">{errors.cardCvc}</span>}
                  </div>
                </div>
              ) : (
                <p className="info-text">
                  Die Zahlungsdetails für diese Methode werden im nächsten Schritt abgefragt.
                </p>
              )}
            </div>

            <div className="actions">
              <button type="submit" className="btn-primary desktop-only" disabled={isSubmitting}>
                {isSubmitting ? 'Senden...' : 'Frage senden'}
              </button>
            </div>
          </form>

          <div
            className="mobile-slider"
            ref={sliderRef}
            role="button"
            aria-label="Zum Absenden nach rechts schieben"
            tabIndex={0}
            onPointerDown={(e) => handleSlider(e.clientX)}
            onPointerMove={(e) => e.pressure > 0 && handleSlider(e.clientX)}
            onPointerUp={(e) => handleSlider(e.clientX, true)}
            onPointerLeave={(e) => handleSlider(e.clientX, true)}
          >
            <div className="slider-track">
              <div
                className="slider-knob"
                ref={knobRef}
                style={{ left: `${sliderPos}%` }}
              >
                ➜
              </div>
              <span className="slider-text">
                {sliderLocked ? 'Gesendet' : 'Zum Absenden nach rechts schieben'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{styles(primary, accent)}</style>
    </section>
  );
};

const styles = (primary, accent) => `
  .askfatwa-shell {
    padding: 80px 16px;
    background: #f6f8fb;
  }
  .askfatwa-container {
    max-width: 1180px;
    margin: 0 auto;
    background: transparent;
    display: grid;
    grid-template-columns: 0.4fr auto 0.6fr;
    gap: 28px;
    align-items: start;
  }
  .guidelines-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 18px 40px rgba(8,24,36,0.08);
    border: 1px solid rgba(12,60,78,0.06);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
  }
  .badge-anim {
    width: 70px;
    height: 70px;
    border-radius: 18px;
    background: linear-gradient(140deg, rgba(15,129,153,0.12), rgba(198,160,67,0.14));
    display: grid;
    place-items: center;
    animation: floaty 3.4s ease-in-out infinite;
  }
  .badge-inner {
    position: relative;
    width: 40px;
    height: 46px;
  }
  .badge-page {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: #fff;
    border: 2px solid ${primary};
    box-shadow: 0 8px 16px rgba(12,60,78,0.1);
  }
  .badge-fold {
    position: absolute;
    top: 8px;
    right: 6px;
    width: 12px;
    height: 12px;
    background: ${accent};
    border-radius: 2px;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
  @keyframes floaty {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
  }
  .guidelines-text h3 {
    margin: 0 0 6px;
    color: #0a2d3c;
  }
  .guidelines-text p {
    margin: 0 0 10px;
    color: #4f6b7a;
  }
  .guidelines-text ul {
    margin: 0;
    padding-left: 18px;
    color: #0b3141;
    display: grid;
    gap: 6px;
  }
  .divider {
    width: 1px;
    background: linear-gradient(180deg, rgba(12,60,78,0.12), rgba(12,60,78,0.04));
    height: 100%;
    min-height: 520px;
  }
  .form-card {
    background: #fff;
    border-radius: 16px;
    padding: 26px;
    box-shadow: 0 18px 40px rgba(8,24,36,0.08);
    border: 1px solid rgba(12,60,78,0.06);
    position: relative;
    overflow: hidden;
  }
  .form-head .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    color: ${primary};
    font-size: 0.85rem;
  }
  .form-head h3 {
    margin: 4px 0 6px;
    color: #0a2d3c;
    font-size: 1.6rem;
  }
  .prior-hint {
    color: #4f6b7a;
    line-height: 1.6;
  }
  .form-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 14px;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .field-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }
  .field label {
    font-weight: 700;
    color: #0a2d3c;
    font-size: 0.92rem;
  }
  .field input,
  .field select,
  .field textarea {
    width: 100%;
    border: 1px solid #d9e2e8;
    border-radius: 10px;
    padding: 10px 12px;
    background: #f8fbfd;
    transition: border 0.2s ease, box-shadow 0.2s ease;
    font-size: 1rem;
    color: #0a2d3c;
  }
  .field textarea {
    resize: vertical;
  }
  .field input:focus,
  .field select:focus,
  .field textarea:focus {
    outline: none;
    border-color: ${primary};
    box-shadow: 0 0 0 3px rgba(15,129,153,0.15);
  }
  .field small {
    color: #4f6b7a;
  }
  .pill {
    border-radius: 999px;
    border: 1px solid #d9e2e8;
    background: #f8fbfd;
    padding: 10px 14px;
    color: #0a2d3c;
    font-weight: 700;
    transition: all 0.2s ease;
  }
  .pill.active {
    border-color: ${primary};
    background: rgba(15,129,153,0.12);
    color: #0a2d3c;
  }
  .pay-toggle {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .mini input {
    text-align: center;
  }
  .info-text {
    color: #4f6b7a;
    margin-top: 8px;
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
  }
  .btn-primary {
    background: ${primary};
    color: #fff;
    border: none;
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 12px 24px rgba(15,129,153,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  }
  .btn-primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .btn-primary:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 14px 26px rgba(15,129,153,0.24);
  }
  .error {
    color: #c0392b;
    font-size: 0.85rem;
  }
  .mobile-slider {
    display: none;
    margin-top: 16px;
  }
  .slider-track {
    position: relative;
    width: 100%;
    height: 54px;
    border-radius: 999px;
    background: #f1f5f8;
    border: 1px solid #d9e2e8;
    overflow: hidden;
  }
  .slider-knob {
    position: absolute;
    top: 4px;
    left: 0;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(145deg, ${primary}, ${accent});
    color: #fff;
    display: grid;
    place-items: center;
    box-shadow: 0 12px 24px rgba(12,60,78,0.2);
    transition: left 0.15s ease;
    pointer-events: none;
  }
  .slider-text {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #0a2d3c;
    font-weight: 700;
    opacity: 0.8;
  }
  .success-card {
    max-width: 520px;
    margin: 0 auto;
    background: #fff;
    border-radius: 18px;
    padding: 32px;
    box-shadow: 0 18px 40px rgba(8,24,36,0.08);
    text-align: center;
    border: 1px solid rgba(12,60,78,0.06);
    animation: pop 0.38s ease;
  }
  .success-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 12px;
    border-radius: 50%;
    background: linear-gradient(145deg, ${primary}, ${accent});
    position: relative;
  }
  .success-icon::after {
    content: '';
    position: absolute;
    left: 22px;
    top: 18px;
    width: 20px;
    height: 36px;
    border: 5px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
  }
  @keyframes pop {
    0% { transform: scale(0.92); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @media (max-width: 1024px) {
    .askfatwa-container {
      grid-template-columns: 1fr;
    }
    .divider {
      width: 100%;
      height: 1px;
      min-height: 1px;
    }
  }
  @media (max-width: 768px) {
    .askfatwa-shell {
      padding: 60px 12px;
    }
    .guidelines-card {
      grid-template-columns: 1fr;
    }
    .mobile-slider {
      display: block;
    }
    .desktop-only {
      display: none;
    }
  }
`;

export default AskFatwaSection;
