import React from 'react';
import { Link } from 'react-router-dom';
import FatawaComponent from '../components/Fatawa';
import AskFatwaSection from '../components/AskFatwaSection';
import gateHero from '../assets/gate-hero.png';
import Particles from '../components/Particles';

const DarAlIftaPage = () => {
    const toSlug = (str = '') =>
        str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

    return (
        <div className="page-dar">
            <section className="gate-hero">
                <div className="gate-overlay" />
                <div className="gate-overlay-soft" />
                <div className="particles-wrap" aria-hidden="true">
                    <Particles
                        particleColors={['#d8bf71', '#d8bf71']}
                        particleCount={200}
                        particleSpread={24}
                        speed={0.12}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={2}
                    />
                </div>
                <div className="gate-content">
                    <div className="gate-text">
                        <span className="eyebrow fade-up">Fatwā-Gremium</span>
                        <h1 className="fade-up delay-1">Dār al-Iftā’</h1>
                        <p className="fade-up delay-2">Verlässliche Rechtsgutachten mit ruhigem Fokus – vertraulich, quellennah und klar erklärt.</p>
                        <div className="hero-actions fade-up delay-3">
                            <Link to="/dar-al-ifta#fatawa" className="btn btn-primary">Fatwā lesen</Link>
                            <Link to="/dar-al-ifta#ask-fatwa" className="btn btn-secondary">Fatwā anfragen</Link>
                        </div>
                    </div>
                    <div className="gate-panel fade-up delay-2">
                        <span className="eyebrow soft">Was ist die Dār al-Iftā’ DE?</span>
                        <h3>Geprüfte Fatāwā mit Ruhe und Klarheit</h3>
                        <p>
                            Die Dār al-Iftā’ ist ein Institut für islamische Rechtswissenschaft (Fiqh). Unsere Gelehrten
                            veröffentlichen regelmäßig Gutachten, die vorab von Spezialisten geprüft werden. Jede Anfrage
                            wird vertraulich behandelt und transparent mit Quellen beantwortet.
                        </p>
                    </div>
                </div>
                <style>{`
                  .gate-hero {
                    position: relative;
                    min-height: 900px;
                    display: flex;
                    align-items: center;
                    padding: 220px 18px 180px;
                    overflow: hidden;
                    background: #0a1a23;
                  }
                  .gate-hero::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: url(${gateHero}) center/cover no-repeat;
                    transform: scale(1.02);
                    filter: saturate(1.05);
                  }
                  .gate-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 50% 40%, rgba(255, 205, 120, 0.4), rgba(10, 26, 35, 0.3) 48%);
                    mix-blend-mode: screen;
                  }
                  .gate-overlay-soft {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(6, 27, 38, 0.82) 0%, rgba(6, 27, 38, 0.35) 40%, rgba(6, 27, 38, 0.8) 100%);
                  }
                  .particles-wrap {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                  }
                  .particles-wrap canvas {
                    width: 100% !important;
                    height: 100% !important;
                  }
                  .particles-wrap .particles-container {
                    position: absolute;
                    inset: 0;
                  }
                  .gate-content {
                    position: relative;
                    z-index: 1;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1.05fr 0.95fr;
                    gap: 28px;
                    align-items: stretch;
                  }
                  .gate-text h1 {
                    margin: 8px 0;
                    font-size: clamp(2.1rem, 3vw, 2.8rem);
                    color: #fdf8ee;
                    text-shadow: 0 14px 34px rgba(0,0,0,0.35);
                  }
                  .fade-up {
                    opacity: 0;
                    animation: fadeUp 0.9s ease forwards;
                  }
                  .delay-1 { animation-delay: 0.15s; }
                  .delay-2 { animation-delay: 0.3s; }
                  .delay-3 { animation-delay: 0.45s; }
                  .gate-text p {
                    margin: 0 0 14px;
                    max-width: 520px;
                    color: #eae4d8;
                    line-height: 1.6;
                  }
                  .gate-text .eyebrow {
                    color: #f3d7a3;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    font-weight: 800;
                  }
                  .hero-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                  }
                  .hero-actions .btn {
                    border-radius: 12px;
                    padding: 10px 14px;
                    font-weight: 800;
                    box-shadow: 0 12px 26px rgba(0,0,0,0.2);
                  }
                  .hero-actions .btn-primary {
                    background: linear-gradient(135deg, #0f8199, #0a4f60);
                    color: #fff;
                    border: none;
                  }
                  .hero-actions .btn-secondary {
                    background: rgba(255,255,255,0.14);
                    color: #fdfaf3;
                    border: 1px solid rgba(255,255,255,0.4);
                    backdrop-filter: blur(4px);
                  }
                  .gate-panel {
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.25);
                    box-shadow: 0 18px 40px rgba(0,0,0,0.28);
                    border-radius: 18px;
                    padding: 20px 24px;
                    color: #fdf8ee;
                    display: grid;
                    gap: 10px;
                    align-content: center;
                    backdrop-filter: blur(10px);
                  }
                  .gate-panel .eyebrow.soft {
                    color: #f8e5bc;
                    letter-spacing: 0.04em;
                  }
                  .gate-panel h3 {
                    margin: 0;
                    font-size: clamp(1.4rem, 2vw, 1.7rem);
                    color: #fff7ea;
                  }
                  .gate-panel p {
                    margin: 0;
                    line-height: 1.65;
                    color: #f0e8db;
                  }
                  @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(18px); }
                    100% { opacity: 1; transform: translateY(0); }
                  }
                  @media (max-width: 960px) {
                    .gate-content {
                      grid-template-columns: 1fr;
                      text-align: center;
                    }
                    .gate-text p {
                      margin-left: auto;
                      margin-right: auto;
                    }
                    .hero-actions {
                      justify-content: center;
                    }
                    .gate-panel {
                      text-align: left;
                      max-width: 540px;
                      margin: 0 auto;
                    }
                  }
                  @media (max-width: 640px) {
                    .gate-hero {
                      padding: 130px 14px 90px;
                    }
                    .gate-content {
                      gap: 18px;
                    }
                    .gate-panel {
                      padding: 18px 16px;
                    }
                  }
                `}</style>
            </section>

            <FatawaComponent />
            <AskFatwaSection />
        </div>
    );
};

export default DarAlIftaPage;
