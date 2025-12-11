import React from 'react';
import FatawaComponent from '../components/Fatawa';
import PageHero from '../components/PageHero';

const FatawaPage = () => {
    return (
        <div className="page-fatawa">
            <PageHero
                eyebrow="Fatwā Gremium"
                title="Fatāwā Archiv"
                subtitle="Durchsuchen Sie unsere Datenbank nach islamischen Rechtsurteilen"
            />

            <FatawaComponent />
        </div>
    );
};

export default FatawaPage;
