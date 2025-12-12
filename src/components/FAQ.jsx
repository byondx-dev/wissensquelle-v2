import React, { useState } from 'react';

const faqs = [
  {
    question: 'Wie stellt man eine Frage zu einem Thema?',
    answer:
      'Nutzen Sie das Fatwā-Formular: Öffnen Sie „Fatwā stellen“, wählen Sie Ihr Themenfeld, beschreiben Sie Ihr Anliegen präzise und senden Sie ab. Unser Gremium meldet sich nach Prüfung zurück.',
  },
  {
    question: 'Kostet die Madrasah etwas?',
    answer:
      'Die Madrasah folgt einem klaren Modell: Kurse sind nach Stufen strukturiert, manche kostenfrei, andere mit Teilnahmebeitrag. Details finden Sie im Madrasah-Bereich je Stufe.',
  },
  {
    question: 'Kosten die externen Kurse etwas?',
    answer:
      'Externe Kurse können kostenfrei oder kostenpflichtig sein. In der Übersicht der externen Kurse finden Sie Preis- oder „kostenfrei“-Hinweise pro Angebot.',
  },
  {
    question: 'Wie nehme ich Kontakt auf?',
    answer:
      'Über „Kontakt“ können Sie uns eine Nachricht senden. Füllen Sie das Formular aus; wir antworten per E-Mail. Alternativ erreichen Sie uns über die angegebenen Kanäle auf der Kontaktseite.',
  },
  {
    question: 'Was tun, wenn meine Frage hier nicht aufgelistet ist?',
    answer:
      'Stellen Sie Ihre Frage direkt im Kontakt- oder Fatwā-Formular. Geben Sie Kontext, Ziel und eventuelle Quellen an, damit wir Ihnen gezielt weiterhelfen können.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section">
      <div className="container faq-shell">
        <div className="faq-head">
          <span className="faq-eyebrow">FAQs</span>
          <h2>Häufige Fragen</h2>
          <p>Kurze Antworten auf die wichtigsten Abläufe rund um Fatāwā, Madrasah und Kontakt.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={item.question} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
              <button type="button" className="faq-question" onClick={() => toggle(idx)} aria-expanded={openIndex === idx}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === idx ? '–' : '+'}</span>
              </button>
              {openIndex === idx && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: var(--spacing-lg) 0 var(--spacing-xl);
          background: #f7f8fa;
        }

        .faq-shell {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-md);
        }

        .faq-head h2 {
          margin: 0.2rem 0;
        }

        .faq-head p {
          color: var(--color-text-secondary);
          max-width: 620px;
        }

        .faq-eyebrow {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--color-gold-end);
        }

        .faq-list {
          display: grid;
          gap: 12px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
        }

        .faq-question {
          width: 100%;
          padding: 1rem 1.1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          color: var(--color-text-primary);
          font-size: 1rem;
        }

        .faq-icon {
          font-size: 1.2rem;
          color: var(--color-text-secondary);
          margin-left: 10px;
        }

        .faq-answer {
          margin: 0;
          padding: 0 1.1rem 1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .faq-item.open {
          border-color: rgba(15, 129, 153, 0.35);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: var(--spacing-md) 0 var(--spacing-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
