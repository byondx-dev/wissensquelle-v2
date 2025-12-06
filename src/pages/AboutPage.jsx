import React from 'react';

const AboutPage = () => {
    return (
        <div className="page-about">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Über uns</h1>
                    <p className="page-subtitle">Unsere Mission und Vision</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-content">
                    <h2>Wer wir sind</h2>
                    <p>Manba' al-'Ilm ist eine Initiative, die sich der Verbreitung von authentischem islamischem Wissen widmet. Unser Ziel ist es, Muslimen in Deutschland einen Zugang zu fundierten religiösen Informationen zu ermöglichen.</p>

                    <h2>Unsere Vision</h2>
                    <p>Wir streben danach, eine Brücke zwischen der klassischen islamischen Gelehrsamkeit und der modernen Lebensrealität zu schlagen. Wir glauben, dass Wissen der Schlüssel zu einem erfüllten und gottgefälligen Leben ist.</p>
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
        .about-content {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: var(--spacing-xl);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-sm);
        }
        .about-content h2 {
            color: var(--color-text-primary);
            margin-top: var(--spacing-md);
            margin-bottom: var(--spacing-sm);
        }
        .about-content p {
            color: var(--color-text-secondary);
            line-height: 1.8;
            margin-bottom: var(--spacing-md);
        }
      `}</style>
        </div>
    );
};

export default AboutPage;
