import React from 'react';

import { Link } from 'react-router-dom';
import gateHero from '../assets/gate-hero.png';
import Particles from '../components/Particles';

const AboutPage = () => {
  return (
    <div className="page-about">
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
            <span className="eyebrow fade-up">Organisation</span>
            <h1 className="fade-up delay-1">Über uns</h1>
            <p className="fade-up delay-2">Unsere Mission und Vision – für eine Gemeinschaft des Wissens und des Handelns.</p>
            <div className="hero-actions fade-up delay-3">
              <Link to="/contact" className="btn btn-primary">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
              .gate-hero {
                position: relative;
                min-height: 100vh;
                display: flex;
                align-items: center;
                padding: 140px 18px 80px;
                overflow: hidden;
                /* Background color fallback */
                background: var(--color-bg-main);
                isolation: isolate;
                color: var(--color-text-primary);
              }

              /* Image Layer (Bottom) */
              .gate-hero::before {
                content: '';
                position: absolute;
                inset: -10%;
                background: url(${gateHero}) center/cover no-repeat;
                opacity: 1;
                /* Remove opacity/blend to make it clear as requested */
                z-index: -2;
                filter: saturate(1.1);
              }

              /* Gradient Overlay Layer (Bottom Fade) */
              .gate-hero::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(to top, #F9F7F2 5%, rgba(249, 247, 242, 0.8) 20%, rgba(249, 247, 242, 0) 50%);
                z-index: -1;
              }

              [data-theme="dark"] .gate-hero {
                background: #050709;
              }

              [data-theme="dark"] .gate-hero::before {
                opacity: 0.8;
                filter: brightness(0.8);
              }

              [data-theme="dark"] .gate-hero::after {
                background: linear-gradient(to top, #050709 5%, rgba(5, 7, 9, 0.8) 20%, rgba(5, 7, 9, 0) 50%);
              }
                opacity: 0.15;
                filter: grayscale(1);
              }

              .gate-overlay {
                display: none; /* Removed old radial gradients */
              }

              .gate-overlay-soft {
                display: none;
              }

              .particles-wrap {
                position: absolute;
                inset: 0;
                z-index: 0;
                opacity: 0.9;
                filter: brightness(0.5) saturate(2) contrast(1.2);
              }

              [data-theme="dark"] .particles-wrap {
                opacity: 0.6;
                filter: none;
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
                display: flex; /* Changed from grid to flex for simpler centering if needed, keeping grid logic ok too */
                justify-content: flex-start; /* Align Left */
                align-items: center;
                padding: 0 20px;
              }

              .gate-text {
                background: rgba(255, 255, 255, 0.75);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                padding: 3rem;
                border-radius: 24px;
                border: 1px solid rgba(255, 255, 255, 0.4);
                box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                max-width: 650px;
                width: 100%;
              }

              [data-theme="dark"] .gate-text {
                background: rgba(15, 18, 22, 0.75);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 20px 40px rgba(0,0,0,0.2);
              }

              .gate-text h1 {
                margin: 8px 0;
                font-size: clamp(2.1rem, 3vw, 2.8rem);
                color: #0a2d3c;
              }

              [data-theme="dark"] .gate-text h1 {
                color: #fdf8ee;
              }

              .fade-up {
                opacity: 0;
                animation: fadeUp 0.9s ease forwards;
              }
              .delay-1 { animation-delay: 0.15s; }
              .delay-2 { animation-delay: 0.3s; }
              .delay-3 { animation-delay: 0.45s; }

              .gate-text p {
                margin: 0 0 24px;
                max-width: 100%;
                color: #4f6b7a;
                line-height: 1.6;
              }

              [data-theme="dark"] .gate-text p {
                color: #a0a0a0;
              }

              .gate-text .eyebrow {
                color: #8b6a20;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                font-weight: 800;
                font-size: 0.9rem;
                display: block;
                margin-bottom: 0.5rem;
              }

              [data-theme="dark"] .gate-text .eyebrow {
                 color: #cca43b;
              }

              .hero-actions {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
              }
              .hero-actions .btn {
                border-radius: 12px;
                padding: 12px 24px;
                font-weight: 800;
                box-shadow: 0 12px 26px rgba(0,0,0,0.1);
              }
              .hero-actions .btn-primary {
                background: linear-gradient(135deg, #0f8199, #0a4f60);
                color: #fff;
                border: none;
              }
              .hero-actions .btn-secondary {
                background: rgba(15, 129, 153, 0.1);
                color: #0a4f60;
                border: 1px solid rgba(15, 129, 153, 0.2);
                backdrop-filter: blur(4px);
              }

              [data-theme="dark"] .hero-actions .btn-secondary {
                 background: rgba(255,255,255,0.1);
                 color: #fff;
                 border-color: rgba(255,255,255,0.2);
              }

              @keyframes fadeUp {
                0% { opacity: 0; transform: translateY(18px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              @media (max-width: 960px) {
                .gate-content {
                  justify-content: center;
                  padding: 0 16px;
                }
                .gate-text {
                  text-align: center;
                  padding: 2rem;
                }
                .gate-text p {
                  margin-left: auto;
                  margin-right: auto;
                }
                .hero-actions {
                  justify-content: center;
                }
              }
              @media (max-width: 640px) {
                .gate-hero {
                  padding: 100px 0 60px;
                }
                .gate-text {
                   padding: 1.5rem;
                   border-radius: 20px;
                }
              }
            `}</style>

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
            background: #F9F7F2; /* Matches hero overlay */
            padding: var(--spacing-xl);
            border-radius: var(--radius-md);
            box-shadow: none; /* Removed shadow for seamless look */
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

        [data-theme="dark"] .about-content {
            background: #050709; /* Matches dark hero overlay */
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
