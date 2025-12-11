import React from 'react';
import PageHero from '../components/PageHero';

const AboutPage = () => {
    return (
        <div className="page-about">
            <PageHero
                eyebrow="Organisation"
                title="Über uns"
                subtitle="Unsere Mission und Vision"
            />

            <div className="container section">
                <div className="about-content">
                    <h2>Wer wir sind</h2>
                    <p>Manba' al-'Ilm ist eine Initiative, die sich der Verbreitung von authentischem islamischem Wissen widmet. Unser Ziel ist es, Muslimen in Deutschland einen Zugang zu fundierten religiösen Informationen zu ermöglichen.</p>

                    <h2>Unsere Vision</h2>
                    <p>Wir streben danach, eine Brücke zwischen der klassischen islamischen Gelehrsamkeit und der modernen Lebensrealität zu schlagen. Wir glauben, dass Wissen der Schlüssel zu einem erfüllten und gottgefälligen Leben ist.</p>
                </div>
            </div>

            <style>{`
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

        @media (max-width: 768px) {
          .about-content {
            max-width: 100%;
            padding: var(--spacing-md);
            border-radius: var(--radius-md);
          }
        }
      `}</style>
        </div>
    );
};

export default AboutPage;
