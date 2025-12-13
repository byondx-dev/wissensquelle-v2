import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const fatawaItems = [
  {
    id: 'bitcoin',
    title: 'Ist Bitcoin im Islam erlaubt?',
    category: 'Finanzen',
    date: '2024-12-01',
    scholar: 'Mufti Ahmad',
    summary:
      'Eine detaillierte Analyse der Kryptowährungen aus islamischer Sicht unter Berücksichtigung moderner Finanzinstrumente.',
    pdfUrl: '',
  },
  {
    id: 'arbeit-gebet',
    title: 'Gebet auf der Arbeit verrichten',
    category: 'Gebete',
    date: '2024-11-28',
    scholar: 'Sheikh Abdul Karim',
    summary: 'Wie man das Gebet mit dem Berufsleben vereinbart und welche Erleichterungen es gibt.',
    pdfUrl: '',
  },
  {
    id: 'nachbarn',
    title: 'Umgang mit nicht-muslimischen Nachbarn',
    category: 'Allgemein',
    date: '2024-11-25',
    scholar: 'Dr. Salim',
    summary: 'Die Rechte der Nachbarn im Islam und wie man ein gutes Zusammenleben fördert.',
    pdfUrl: '',
  },
  {
    id: 'wali',
    title: 'Heiraten ohne Wali?',
    category: 'Heirat/Ehe',
    date: '2024-11-20',
    scholar: 'Ustadh Yahya',
    summary: 'Die Voraussetzungen für eine gültige Eheschließung und die Rolle des Vormunds.',
    pdfUrl: '',
  },
];

const FatawaDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = fatawaItems.findIndex((item) => item.id === id);
  const fatawa = fatawaItems[currentIndex] || fatawaItems[0];

  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nextItem = useMemo(
    () => fatawaItems[(currentIndex + 1) % fatawaItems.length],
    [currentIndex],
  );
  const prevItem = useMemo(
    () => fatawaItems[(currentIndex - 1 + fatawaItems.length) % fatawaItems.length],
    [currentIndex],
  );

  const handleSendVerification = (e) => {
    e.preventDefault();
    setVerificationSent(true);
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();
    if (!code) return;
    setSubmitted(true);
  };

  return (
    <main className="fatawa-detail">
      <div className="detail-grid">
        <section className="pdf-pane" aria-label="Fatwā Dokument">
          <div className="pdf-header">
            <h1>{fatawa.title}</h1>
            <p className="pdf-subtitle">{fatawa.summary}</p>
          </div>
          <div className="pdf-viewer" role="document">
            <div className="pdf-placeholder">
              <p>PDF-Vorschau</p>
              <p>Scrollen Sie entlang des Gutachtens.</p>
              <div className="pdf-lines">
                {Array.from({ length: 40 }).map((_, idx) => (
                  <span key={idx} className="pdf-line" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="meta-pane">
          <div className="meta-stack">
            <div className="meta-card">
              <header className="meta-head">
                <div className="meta-chip">{fatawa.category}</div>
                <div className="meta-actions">
                  <button type="button" className="nav-btn" onClick={() => navigate(`/fatawa/${prevItem.id}`)}>← Vorherige</button>
                  <button type="button" className="nav-btn" onClick={() => navigate(`/fatawa/${nextItem.id}`)}>Nächste →</button>
                </div>
              </header>
              <div className="meta-info">
                <div>
                  <span className="label">Veröffentlicht</span>
                  <strong>{fatawa.date}</strong>
                </div>
                <div>
                  <span className="label">Gelehrter</span>
                  <strong>{fatawa.scholar}</strong>
                </div>
              </div>
            </div>

            <div className="comment-card" id="kommentar">
              <h3>Kommentar verfassen</h3>
              <p className="comment-hint">Teilen Sie Ihre Rückfrage. Wir senden Ihnen einen Code per E-Mail, um den Kommentar zu bestätigen.</p>
              <form onSubmit={verificationSent ? handleSubmitCode : handleSendVerification} className="comment-form">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ihr Name"
                  required
                  disabled={verificationSent}
                />
                <label htmlFor="email">E-Mail</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  disabled={verificationSent}
                />
                <label htmlFor="comment">Kommentar</label>
                <textarea
                  id="comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ihre Frage oder Anmerkung..."
                  required
                  disabled={verificationSent}
                />

                {verificationSent && (
                  <>
                    <label htmlFor="code">Bestätigungs-Code</label>
                    <input
                      id="code"
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Code aus Ihrer E-Mail"
                      required
                    />
                  </>
                )}

                {!submitted ? (
                  <button type="submit" className="btn solid full">
                    {verificationSent ? 'Code prüfen & absenden' : 'Kommentar absenden'}
                  </button>
                ) : (
                  <div className="success-state">
                    <span className="dot" />
                    Kommentar erfolgreich an die Gelehrten gesendet.
                  </div>
                )}
              </form>
            </div>

            <div className="more-card">
              <div className="more-head">
                <h3>Weitere Fatawas</h3>
                <Link to="/fatawa" className="link subtle">Alle ansehen →</Link>
              </div>
              <div className="more-list">
                {fatawaItems
                  .filter((item) => item.id !== fatawa.id)
                  .map((item) => (
                    <Link key={item.id} to={`/fatawa/${item.id}`} className="more-item">
                      <div>
                        <div className="more-title">{item.title}</div>
                        <div className="more-meta">{item.category} · {item.date}</div>
                      </div>
                      <span className="arrow">→</span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .fatawa-detail {
          padding: 100px 18px 80px;
          background: #f7f9fb;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(320px, 0.9fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .pdf-pane {
          background: #fff;
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 12px 30px rgba(12, 60, 78, 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-height: 70vh;
        }

        .pdf-header h1 {
          margin: 0 0 6px;
          font-size: clamp(1.6rem, 2.5vw, 2rem);
          color: #0a2533;
        }

        .pdf-subtitle {
          margin: 0;
          color: #4f6b7a;
        }

        .pdf-viewer {
          flex: 1;
          border: 1px solid #e0e7ec;
          border-radius: 14px;
          overflow: hidden;
          background: #f3f6f8;
        }

        .pdf-placeholder {
          height: 100%;
          overflow: auto;
          padding: 18px;
        }

        .pdf-placeholder p {
          margin: 0;
          color: #4f6b7a;
        }

        .pdf-lines {
          margin-top: 12px;
          display: grid;
          gap: 8px;
        }

        .pdf-line {
          display: block;
          height: 10px;
          border-radius: 8px;
          background: linear-gradient(90deg, #dce5ec, #edf2f6);
        }

        .meta-pane {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .meta-stack {
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .meta-card {
          background: #fff;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 10px 24px rgba(12, 60, 78, 0.08);
          border: 1px solid #e0e7ec;
        }

        .meta-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .meta-chip {
          background: rgba(15, 129, 153, 0.12);
          color: #0a4f60;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
        }

        .meta-actions {
          display: flex;
          gap: 8px;
        }

        .nav-btn {
          border: 1px solid #d9e2e8;
          background: #fff;
          padding: 8px 10px;
          border-radius: 10px;
          font-weight: 700;
          color: #0a2533;
        }

        .nav-btn:hover {
          border-color: #0f8199;
          color: #0f8199;
        }

        .meta-info {
          display: grid;
          gap: 8px;
        }

        .label {
          display: block;
          color: #4f6b7a;
          font-size: 0.9rem;
        }

        .comment-card {
          background: #fff;
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 10px 24px rgba(12, 60, 78, 0.08);
          border: 1px solid #e0e7ec;
        }

        .comment-card h3 {
          margin: 0 0 6px;
        }

        .comment-hint {
          margin: 0 0 12px;
          color: #4f6b7a;
        }

        .comment-form {
          display: grid;
          gap: 10px;
        }

        .comment-form label {
          font-weight: 700;
          color: #0a2533;
        }

        .comment-form input,
        .comment-form textarea {
          width: 100%;
          padding: 0.8rem 0.9rem;
          border-radius: 10px;
          border: 1px solid #d9e2e8;
          background: #fff;
          font-family: inherit;
          font-size: 0.98rem;
        }

        .comment-form input:focus,
        .comment-form textarea:focus {
          outline: none;
          border-color: #0f8199;
          box-shadow: 0 0 0 3px rgba(15, 129, 153, 0.14);
        }

        .btn.full {
          width: 100%;
        }

        .success-state {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0a4f60;
          font-weight: 700;
        }

        .success-state .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0f8199;
        }

        .more-card {
          background: #fff;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 10px 24px rgba(12, 60, 78, 0.08);
          border: 1px solid #e0e7ec;
        }

        .more-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .more-list {
          display: grid;
          gap: 10px;
        }

        .more-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
          border: 1px solid #e0e7ec;
          border-radius: 12px;
          background: #f8fbfc;
        }

        .more-item:hover {
          border-color: #0f8199;
        }

        .more-title {
          font-weight: 700;
          color: #0a2533;
        }

        .more-meta {
          font-size: 0.9rem;
          color: #4f6b7a;
        }

        .arrow {
          color: #0a4f60;
          font-weight: 800;
        }

        @media (max-width: 960px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
          .meta-stack {
            position: static;
          }
        }
      `}</style>
    </main>
  );
};

export default FatawaDetailPage;
