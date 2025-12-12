import React, { useEffect, useMemo, useState } from 'react';
import heroImg from '../assets/madrasah.png';
import mosqueImg from '../assets/mosque.png';
import logoImg from '../assets/logo.png';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const appTitle = useMemo(() => {
    if (document?.title && document.title !== 'Vite + React') return document.title;
    return 'Wissensquelle';
  }, []);
  const heroSlides = [heroImg, mosqueImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <main className="login-shell">
      <section className="login-frame">
        <div className="login-hero">
            <div className="hero-card">
            <div className="hero-slides" aria-hidden="true">
              {heroSlides.map((src, idx) => (
                <div
                  key={src}
                  className={`hero-slide ${idx === slideIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
            <div className="hero-card-overlay" />
            <div className="hero-dots" role="tablist" aria-label="Hintergrundbilder">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot ${idx === slideIndex ? 'active' : ''}`}
                  onClick={() => setSlideIndex(idx)}
                  aria-label={`Bild ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="login-panel">
          <div className="login-inner">
            <a className="home-link" href="/">← Zur Startseite</a>
            <div className="hero-logo centered top-logo">
              <img src={logoImg} alt={`${appTitle} Logo`} />
            </div>
            <header className="form-head">
              <h2>Ahlan wa sahlan,</h2>
              <p>Login, um Zugang zu erhalten, oder registriere dich neu.</p>
            </header>

            <form className="login-form" aria-label="Login">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                required
              />

              <label htmlFor="password" className="label-row">
                <span>Password</span>
                <a className="link subtle" href="/reset-password">Forgot password?</a>
              </label>
              <div className="input-wrap">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Passwort ausblenden' : 'Passwort anzeigen'}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"
                      fill="none"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="12" r="3" fill="none" strokeWidth="1.6" />
                    {showPassword && (
                      <line x1="4" y1="20" x2="20" y2="4" strokeWidth="1.6" />
                    )}
                  </svg>
                </button>
              </div>

              <div className="form-actions">
                <a className="btn ghost" href="/signup">Sign up</a>
                <button type="submit" className="btn solid">Log in</button>
              </div>

              <div className="social-actions" aria-label="Social Login">
                <button type="button" className="btn social">
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                    <path fill="#4285F4" d="M22.5 12.273c0-.851-.076-1.475-.24-2.12H12.24v3.845h5.87c-.12.958-.77 2.405-2.216 3.374l-.02.127 3.217 2.493.223.022c2.04-1.878 3.186-4.644 3.186-7.741" />
                    <path fill="#34A853" d="M12.24 23c2.887 0 5.314-.95 7.086-2.583l-3.373-2.613c-.904.63-2.12 1.07-3.713 1.07-2.84 0-5.248-1.878-6.107-4.474l-.126.01-3.3 2.56-.043.12C3.454 20.64 7.52 23 12.24 23" />
                    <path fill="#FBBC05" d="M6.133 14.4c-.227-.67-.357-1.385-.357-2.12 0-.736.13-1.45.343-2.12l-.006-.142-3.34-2.6-.11.053C1.994 8.97 1.5 10.643 1.5 12.28c0 1.638.494 3.31 1.164 4.81l3.47-2.69" />
                    <path fill="#EB4335" d="M12.24 6.947c2.007 0 3.36.868 4.132 1.595l3.017-2.94C17.54 3.63 15.127 2.5 12.24 2.5 7.52 2.5 3.454 4.86 2.3 8.47l3.47 2.69c.86-2.596 3.268-4.213 6.47-4.213" />
                  </svg>
                  Google
                </button>
                <button type="button" className="btn social">
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                    <path fill="#0078D4" d="M1.5 4.5 11 2.75v8.84H1.5z" />
                    <path fill="#0078D4" d="M1.5 19.5 11 21.25v-8.84H1.5z" />
                    <path fill="#0078D4" d="M22.5 12.41 12 2.75v8.84h10.5z" />
                    <path fill="#0078D4" d="M12 21.25 22.5 12.41H12z" />
                  </svg>
                  Microsoft
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .login-shell {
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: stretch;
          justify-content: center;
          padding: 0;
        }

        .login-frame {
          width: 100%;
          background: #fff;
          border-radius: 0;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          column-gap: 0;
          min-height: 100vh;
          box-shadow: none;
          position: relative;
        }

        .login-hero {
          position: relative;
          overflow: hidden;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 38px;
          background: #ffffff;
        }

        .hero-card {
          position: relative;
          width: 100%;
          height: calc(100% - 76px);
          max-width: 100%;
          min-height: 520px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: none;
          background: #0a2d3c;
        }

        .hero-slides, .hero-slide {
          position: absolute;
          inset: 0;
        }

        .hero-slide {
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.9s ease;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(6, 81, 112, 0.78), rgba(6, 145, 130, 0.68));
        }

        .hero-content {
          position: relative;
          z-index: 1;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 48px;
          height: 100%;
          justify-content: center;
          align-items: flex-start;
          text-shadow: 0 8px 24px rgba(0,0,0,0.35);
        }

        .hero-logo {
          width: 74px;
          height: 74px;
          border-radius: 18px;
          background: rgba(255,255,255,0.14);
          display: grid;
          place-items: center;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.28);
          box-shadow: 0 10px 24px rgba(0,0,0,0.18);
        }

        .hero-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(1.05);
        }

        .hero-text h1 {
          font-size: clamp(2.2rem, 3vw, 3rem);
          margin: 0;
          font-weight: 800;
          letter-spacing: 0.01em;
        }

        .hero-text p {
          font-size: 1.1rem;
          margin: 0;
          opacity: 0.92;
          letter-spacing: 0.04em;
        }

        .hero-dots {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 18px;
          display: flex;
          gap: 8px;
          z-index: 2;
          background: rgba(0,0,0,0.2);
          padding: 6px 10px;
          border-radius: 999px;
          backdrop-filter: blur(6px);
        }

        .hero-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.8);
          transition: all 0.2s ease;
        }

        .hero-dots .dot.active {
          width: 18px;
          background: #fff;
          border-color: #fff;
        }

        .login-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 38px;
          background: #fff;
        }

        .login-inner {
          width: min(420px, 100%);
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .home-link {
          align-self: flex-end;
          font-weight: 700;
          color: #0f8199;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .top-logo {
          margin: 6px auto 14px;
          background: none;
          border: none;
          box-shadow: none;
        }

        .home-link:hover {
          color: #0a4f60;
          text-decoration: underline;
        }

        .form-head h2 {
          margin: 0 0 6px;
          font-size: 1.8rem;
          font-weight: 800;
          color: #0a2533;
        }

        .form-head p {
          margin: 0;
          color: #5c6b76;
          font-size: 0.98rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .login-form label {
          font-weight: 700;
          color: #0a2533;
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95rem;
          letter-spacing: 0.01em;
        }

        .label-row {
          gap: 8px;
        }

        .login-form input {
          width: 100%;
          padding: 0.9rem 1rem;
          border-radius: 10px;
          border: 1px solid #d9e2e8;
          font-size: 1rem;
          transition: border-color 0.24s ease, box-shadow 0.24s ease;
          background: #fff;
        }

        .login-form input:focus {
          outline: none;
          border-color: #0f8199;
          box-shadow: 0 0 0 4px rgba(15, 129, 153, 0.12);
        }

        .input-wrap {
          position: relative;
        }

        .input-wrap input {
          padding-right: 3rem;
        }

        .eye {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: #f3f6f8;
          display: grid;
          place-items: center;
          color: #0a4f60;
          transition: all 0.2s ease;
        }

        .eye:hover {
          border-color: #d9e2e8;
          background: #e9f4f6;
        }

        .eye svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          fill: none;
        }

        .form-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 6px;
        }

        .social-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .btn.social {
          border: 1px solid #d9e2e8;
          background: #fff;
          color: #0a2533;
          gap: 8px;
        }

        .btn.social:hover {
          background: #f4f7f9;
          transform: translateY(-1px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        }

        .btn {
          height: 48px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }

        .btn.ghost {
          border: 1px solid #0f8199;
          color: #0f8199;
          background: #fff;
        }

        .btn.ghost:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(15, 129, 153, 0.18);
          background: #f0f8fa;
        }

        .btn.solid {
          border: 1px solid #0a2533;
          background: #0a2533;
          color: #fff;
          box-shadow: 0 10px 22px rgba(10, 37, 51, 0.22);
        }

        .btn.solid:hover {
          transform: translateY(-1px);
          background: #081c28;
        }

        .link.subtle {
          color: #5c6b76;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .link.subtle:hover {
          color: #0f8199;
        }

        @media (max-width: 1024px) {
          .login-frame {
            grid-template-columns: 1.4fr 1fr;
          }
        }

        @media (max-width: 900px) {
          .login-frame {
            grid-template-columns: 1fr;
            border-radius: 0;
          }
          .login-hero {
            height: 45vh;
            padding: 20px;
            border-radius: 0 0 12px 12px;
          }
          .hero-card {
            height: 100%;
            min-height: 100%;
            border-radius: 18px;
          }
          .login-panel {
            padding: 32px 26px 38px;
          }
        }

        @media (max-width: 640px) {
          .login-shell {
            padding: 0;
          }
          .login-frame {
            min-height: 0;
          }
          .hero-content {
            padding: 28px 22px;
            align-items: flex-start;
          }
          .hero-logo {
            width: 64px;
            height: 64px;
          }
          .login-panel {
            padding: 28px 20px 34px;
          }
          .form-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default LoginPage;
