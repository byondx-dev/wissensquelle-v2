import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/madrasah.png';
import mosqueImg from '../assets/mosque.png';
import slideLibrary1 from '../assets/slide-library-1.jpg';
import slideMosque1 from '../assets/slide-mosque-1.png';
import slideLibrary2 from '../assets/slide-library-2.jpg';
import slideDome from '../assets/slide-dome.jpg';
import slideDoors from '../assets/slide-doors.jpg';
import logoImg from '../assets/logo.png';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const appTitle = useMemo(() => {
    if (document?.title && document.title !== 'Vite + React') return document.title;
    return 'Wissensquelle';
  }, []);

  const heroSlides = [slideLibrary1, slideMosque1, slideLibrary2, slideDome, slideDoors, heroImg, mosqueImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <main className="login-page">
      {/* Background Layer */}
      <div className="bg-layer" aria-hidden="true">
        {heroSlides.map((src, idx) => (
          <div
            key={src}
            className={`bg-slide ${idx === slideIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="bg-overlay" />
      </div>

      {/* Content Layer */}
      <div className="content-container">

        <a className="home-link" href="/">
          ← Zurück zur Webseite
        </a>

        {/* Left Column: Branding */}
        <div className="branding-col">
          <div className="logo-card">
            <img src={logoImg} alt="Wissensquelle Logo" />
          </div>
          <div className="quote-block">
            <p className="quote-text">~ Mein Rab, mehre mich an Wissen</p>
            <p className="quote-source">Surah Taha 20:114</p>
          </div>
        </div>

        {/* Right Column: Login Card */}
        <div className="form-col">
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <header className="form-header">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Willkommen zurück
              </motion.h2>
              <p>Bitte logge dich ein, um fortzufahren.</p>
            </header>

            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Passwort</label>
                <div className="input-with-icon">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="forgot-row">
                <a href="/reset-password">Passwort vergessen?</a>
              </div>

              <button type="submit" className="btn-submit">
                Einloggen
              </button>

              <div className="divider">
                <span>oder</span>
              </div>

              <div className="social-login">
                <button type="button" className="btn-social google">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.5 12.273c0-.851-.076-1.475-.24-2.12H12.24v3.845h5.87c-.12.958-.77 2.405-2.216 3.374l-.02.127 3.217 2.493.223.022c2.04-1.878 3.186-4.644 3.186-7.741" />
                    <path fill="#34A853" d="M12.24 23c2.887 0 5.314-.95 7.086-2.583l-3.373-2.613c-.904.63-2.12 1.07-3.713 1.07-2.84 0-5.248-1.878-6.107-4.474l-.126.01-3.3 2.56-.043.12C3.454 20.64 7.52 23 12.24 23" />
                    <path fill="#FBBC05" d="M6.133 14.4c-.227-.67-.357-1.385-.357-2.12 0-.736.13-1.45.343-2.12l-.006-.142-3.34-2.6-.11.053C1.994 8.97 1.5 10.643 1.5 12.28c0 1.638.494 3.31 1.164 4.81l3.47-2.69" />
                    <path fill="#EB4335" d="M12.24 6.947c2.007 0 3.36.868 4.132 1.595l3.017-2.94C17.54 3.63 15.127 2.5 12.24 2.5 7.52 2.5 3.454 4.86 2.3 8.47l3.47 2.69c.86-2.596 3.268-4.213 6.47-4.213" />
                  </svg>
                  Google
                </button>
                <button type="button" className="btn-social microsoft">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#0078D4" d="M1.5 4.5 11 2.75v8.84H1.5z" />
                    <path fill="#0078D4" d="M1.5 19.5 11 21.25v-8.84H1.5z" />
                    <path fill="#0078D4" d="M22.5 12.41 12 2.75v8.84h10.5z" />
                    <path fill="#0078D4" d="M12 21.25 22.5 12.41H12z" />
                  </svg>
                  Microsoft
                </button>
              </div>

              <p className="signup-link">
                Neu hier? <a href="/contact">Konto erstellen lassen</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Reset & Base */
        .login-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          color: #fff;
        }

        /* Background Layer */
        .bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-color: #050709;
        }

        .bg-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          filter: saturate(1.1);
        }

        .bg-slide.active {
          opacity: 1;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          /* Strong gradient for readability */
          background: linear-gradient(
            to right,
            rgba(5, 7, 9, 0.85) 0%,
            rgba(5, 7, 9, 0.6) 40%,
            rgba(5, 7, 9, 0.4) 100%
          );
          z-index: 1;
        }

        /* Content Layer */
        .content-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 2rem;
          gap: 4rem;
          align-items: center;
        }

        /* Branding Column */
        .branding-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding-left: 2rem;
        }

        .logo-card {
           background: rgba(255, 255, 255, 0.95);
           padding: 24px;
           border-radius: 20px;
           width: fit-content;
           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
           backdrop-filter: blur(10px);
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .logo-card img {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }

        .quote-block {
          margin-top: 2rem;
          color: #fff;
        }

        .quote-text {
          font-family: 'Amiri', serif;
          font-size: 2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .quote-source {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          opacity: 0.85;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        /* Form Column */
        .form-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Glass Card */
        .glass-card {
          width: 100%;
          max-width: 440px;
          padding: 3rem 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Light Mode Glass override if desired, 
           but referencing the user image which is dark/moody, 
           focusing on dark glassmorphism for contrast against photos.
           If User wants light mode support, we can add media query. 
           For now assuming dark mood as per image. */
        
        .form-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .form-header h2 {
          font-family: 'Amiri', serif;
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .form-header p {
          font-size: 0.95rem;
          opacity: 0.7;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .form-group input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08); /* Dark input base */
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        /* Input styling for light mode compatibility if needed, 
           but enforcing white text for now on glass */
        
        .form-group input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .input-with-icon {
          position: relative;
        }

        .toggle-pw {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          padding: 4px;
        }

        .toggle-pw:hover {
          color: #fff;
        }

        .forgot-row {
          text-align: right;
          margin-bottom: 1.5rem;
        }

        .forgot-row a {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }

        .forgot-row a:hover {
          color: #fff;
          text-decoration: underline;
        }

        .btn-submit {
          width: 100%;
          padding: 0.9rem;
          border-radius: 12px;
          border: none;
          background: #fff; /* High contrast button */
          color: #050709;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.1s ease, background 0.2s;
          margin-bottom: 1.5rem;
        }

        .btn-submit:hover {
          background: #e2e2e2;
          transform: translateY(-1px);
        }

        .divider {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.85rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn-social {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.75rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-social:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .signup-link {
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .signup-link a {
          color: #fff;
          font-weight: 600;
          margin-left: 4px;
        }

        .home-link {
          position: absolute;
          top: 2rem;
          left: 2rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          z-index: 20;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .home-link:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* Mobile Responsive */
        @media (max-width: 960px) {
          .content-container {
            grid-template-columns: 1fr;
            padding: 1.5rem;
            gap: 2rem;
            text-align: center;
          }

          .home-link {
            top: 1.5rem;
            left: 1.5rem;
          }

          .branding-col {
            padding-left: 0;
            align-items: center;
            height: auto;
            margin-top: 2rem;
          }

          .brand-header {
            margin-bottom: 1.5rem;
          }

          .brand-hero h1 {
            font-size: 3rem;
          }
          
          .form-col {
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </main>
  );
};

export default LoginPage;
