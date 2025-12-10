import React from 'react';
import DarAlIftaComponent from '../components/DarAlIfta';

const DarAlIftaPage = () => {
    return (
        <div className="page-dar">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Dār al-Iftā’</h1>
                    <p className="page-subtitle">Das Fatwā-Gremium für Deutschland</p>
                </div>
            </div>

            <DarAlIftaComponent />

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

export default DarAlIftaPage;
