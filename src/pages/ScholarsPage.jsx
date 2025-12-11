import React from 'react';
import ScholarsComponent from '../components/Scholars';
import PageHero from '../components/PageHero';

const ScholarsPage = () => {
    return (
        <div className="page-scholars">
            <PageHero
                eyebrow="Team"
                title="Unsere Gelehrten"
                subtitle="Lernen Sie die Menschen hinter dem Wissen kennen"
            />

            <ScholarsComponent />
        </div>
    );
};

export default ScholarsPage;
