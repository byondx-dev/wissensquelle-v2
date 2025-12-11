import React from 'react';
import DarAlIftaComponent from '../components/DarAlIfta';
import PageHero from '../components/PageHero';

const DarAlIftaPage = () => {
    return (
        <div className="page-dar">
            <PageHero
                eyebrow="Fatwā-Gremium"
                title="Dār al-Iftā’"
                subtitle="Das Fatwā-Gremium für Deutschland"
            />

            <DarAlIftaComponent />
        </div>
    );
};

export default DarAlIftaPage;
