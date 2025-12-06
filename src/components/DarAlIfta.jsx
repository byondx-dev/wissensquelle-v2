import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import mosqueImg from '../assets/mosque.png';

const DarAlIfta = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="dar-al-ifta" className="section dar-al-ifta" ref={ref}>
      <div className="container">
        <div className="layout-grid">
          <motion.div
            className="content-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header text-left">
              <h2 className="section-title">Dār al-Iftā’</h2>
              <p className="section-desc">
                Unser Fatwā-Gremium bietet Ihnen fundierte religiöse Orientierung für
                Ihr tägliches Leben. Jede Anfrage wird vertraulich behandelt und
                basierend auf den Beweisen aus Quran und Sunnah beantwortet.
              </p>
            </div>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Frage stellen</h4>
                  <p>Senden Sie uns Ihre Frage über das Formular.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Bearbeitung</h4>
                  <p>Unsere Gelehrten prüfen den Sachverhalt.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Antwort erhalten</h4>
                  <p>Sie erhalten eine schriftliche Fatwā per E-Mail.</p>
                </div>
              </div>
            </div>

            <motion.a
              href="#ask"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fatwā anfragen
            </motion.a>
          </motion.div>

          <motion.div
            className="visual-col"
            style={{ y, opacity }}
          >
            <div className="arch-window">
              <img src={mosqueImg} alt="Mosque Architecture" />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .dar-al-ifta {
          background-color: var(--color-bg-alt);
          overflow: hidden;
        }

        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .text-left { text-align: left; }

        .process-steps {
          margin: var(--spacing-lg) 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: var(--color-gold-start);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .step-content h4 {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: var(--color-text-primary);
        }

        .step-content p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .visual-col {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .arch-window {
          width: 100%;
          max-width: 450px;
          height: 550px;
          border-radius: 250px 250px 20px 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 8px solid #fff;
        }

        .arch-window img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        
        .arch-window:hover img {
            transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .layout-grid {
            grid-template-columns: 1fr;
          }
          .visual-col {
            order: -1;
            margin-bottom: var(--spacing-lg);
          }
          .arch-window {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default DarAlIfta;
