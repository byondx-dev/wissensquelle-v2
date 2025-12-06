import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import madrasahImg from '../assets/madrasah.png';

const Madrasah = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const pathway = [
    { step: "01", title: "Vorklasse", desc: "Grundlagen des Islam" },
    { step: "02", title: "Aufbau", desc: "Vertiefung in Fiqh & Aqida" },
    { step: "03", title: "Spezialisierung", desc: "Hadith & Tafsir Wissenschaften" },
    { step: "04", title: "Abschluss", desc: "Ijazah & Zertifizierung" }
  ];

  const courses = [
    { title: "Einführung in die Aqida", level: "Vorklasse", duration: "12 Wochen" },
    { title: "Fiqh der Gottesdienste", level: "Aufbau", duration: "16 Wochen" },
    { title: "Tafsir Juz Amma", level: "Vorklasse", duration: "10 Wochen" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="madrasah" className="section madrasah" ref={ref}>
      <div className="container">
        <div className="madrasah-layout">
          <motion.div
            className="madrasah-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="section-header text-left" variants={itemVariants}>
              <h2 className="section-title">Online Madrasah</h2>
              <p className="section-desc">Ihr strukturierter Weg zu islamischem Wissen</p>
            </motion.div>

            <motion.div className="pathway-container" variants={itemVariants}>
              <div className="pathway-line"></div>
              <div className="pathway-steps">
                {pathway.map((item, index) => (
                  <motion.div
                    key={index}
                    className="pathway-step"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="step-circle">{item.step}</div>
                    <h4 className="step-title">{item.title}</h4>
                    <p className="step-desc">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="courses-grid">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="course-card"
                  variants={itemVariants}
                  whileHover={{ y: -10, borderColor: '#D4AF37', boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)' }}
                >
                  <div className="course-icon">📚</div>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta">
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                  <button className="btn btn-secondary btn-sm">Details ansehen</button>
                </motion.div>
              ))}
            </div>

            <motion.div className="cta-wrapper text-left" variants={itemVariants}>
              <a href="#" className="btn btn-primary">Jetzt anmelden</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="madrasah-visual"
            style={{ y }}
          >
            <div className="image-frame">
              <img src={madrasahImg} alt="Madrasah Library" />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .madrasah {
          background-color: #FFFFFF;
          padding: var(--spacing-xl) 0;
          overflow: hidden;
        }
        
        .madrasah-layout {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: var(--spacing-xl);
            align-items: center;
        }

        .text-left { text-align: left; }

        .pathway-container {
          position: relative;
          margin: var(--spacing-lg) 0;
          padding: var(--spacing-md) 0;
        }

        .pathway-line {
          position: absolute;
          top: 25px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-border);
          z-index: 0;
        }

        .pathway-steps {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .pathway-step {
          text-align: center;
          background: #FFFFFF;
          padding: 0 var(--spacing-xs);
          flex: 1;
        }

        .step-circle {
          width: 50px;
          height: 50px;
          background: #fff;
          border: 2px solid var(--color-gold-end);
          color: var(--color-gold-end);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin: 0 auto var(--spacing-sm);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
        }
        
        .pathway-step:hover .step-circle {
            background: var(--color-gold-end);
            color: #fff;
            transform: scale(1.1);
        }

        .step-title {
          font-size: 0.95rem;
          margin-bottom: var(--spacing-xs);
          color: var(--color-text-primary);
        }

        .step-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .course-card {
          background: var(--color-bg-main);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          transition: all 0.3s;
        }

        .course-icon {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
        }

        .course-title {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-xs);
        }

        .course-meta {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
        }
        
        .madrasah-visual {
            position: relative;
        }
        
        .image-frame {
            border-radius: 200px 200px 0 0;
            overflow: hidden;
            height: 600px;
            box-shadow: var(--shadow-lg);
            position: relative;
        }
        
        .image-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .image-frame:hover img {
            transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .madrasah-layout {
            grid-template-columns: 1fr;
          }
          .madrasah-visual {
            display: none; /* Hide image on smaller screens to save space or stack it */
          }
          .pathway-steps {
            flex-direction: column;
            gap: var(--spacing-md);
          }
          .pathway-line {
            width: 2px;
            height: 100%;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
          .pathway-step {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Madrasah;
