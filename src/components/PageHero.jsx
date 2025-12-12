import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ eyebrow, title, subtitle, tone }) => {
  const heroClass = tone ? `page-hero page-hero--${tone}` : 'page-hero';

  return (
    <motion.section
      className={heroClass}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="page-hero-veil" />
      <div className="page-hero-orb orb-a" />
      <div className="page-hero-orb orb-b" />
      <div className="page-hero-orb orb-c" />

      <div className="container">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{subtitle}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageHero;
