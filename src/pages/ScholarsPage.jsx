import React from 'react';
import ScholarsComponent from '../components/Scholars';

const ScholarsPage = () => {
    return (
        <div className="page-scholars">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Unsere Gelehrten</h1>
                    <p className="page-subtitle">Lernen Sie die Menschen hinter dem Wissen kennen</p>
                </div>
            </div>

            <ScholarsComponent />

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
      `}</style>
        </div>
    );
};

export default ScholarsPage;
