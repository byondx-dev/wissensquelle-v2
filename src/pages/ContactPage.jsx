import React from 'react';

const ContactPage = () => {
    return (
        <div className="page-contact">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Kontakt</h1>
                    <p className="page-subtitle">Wir sind für Sie da</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Kontaktinformationen</h2>
                        <p>Haben Sie Fragen oder Anregungen? Schreiben Sie uns.</p>
                        <div className="info-item">
                            <strong>Email:</strong> info@wissens-quelle.de
                        </div>
                        <div className="info-item">
                            <strong>Adresse:</strong> Musterstraße 123, 12345 Berlin
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Ihr Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Ihre Email" />
                        </div>
                        <div className="form-group">
                            <label>Nachricht</label>
                            <textarea className="form-control" rows="5" placeholder="Ihre Nachricht"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Absenden</button>
                    </form>
                </div>
            </div>

            <style>{`
        .page-header {
          background-color: var(--color-text-primary);
          color: #fff;
          padding: var(--spacing-lg) 0;
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }
        .page-title {
          color: var(--color-gold-start);
          font-size: 3rem;
        }
        .page-subtitle {
          color: #E5E0D8;
          font-size: 1.2rem;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-xl);
        }
        .contact-info {
            background: #fff;
            padding: var(--spacing-lg);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
        }
        .contact-form {
            background: #fff;
            padding: var(--spacing-lg);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
        }
        .form-group {
            margin-bottom: var(--spacing-md);
        }
        .form-group label {
            display: block;
            margin-bottom: var(--spacing-xs);
            font-weight: 500;
        }
        .form-control {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            font-family: inherit;
        }
        .form-control:focus {
            outline: none;
            border-color: var(--color-gold-start);
        }
        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default ContactPage;
