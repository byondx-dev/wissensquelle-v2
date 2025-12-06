import React, { useState } from 'react';
import FatawaComponent from '../components/Fatawa'; // We can reuse the existing component or wrap it

const FatawaPage = () => {
    return (
        <div className="page-fatawa">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Fatāwā Archiv</h1>
                    <p className="page-subtitle">Durchsuchen Sie unsere Datenbank nach islamischen Rechtsurteilen</p>
                </div>
            </div>

            {/* Reusing the logic from the component, but maybe we should just use the component directly if it fits. 
          The existing component has "Neueste Fatawa" title which might conflict. 
          Let's just use the component for now and maybe refactor it later to accept props for title.
      */}
            <FatawaComponent />

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

export default FatawaPage;
