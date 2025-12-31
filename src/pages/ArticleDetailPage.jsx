import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';

const ArticleDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find article by ID
    const article = articles.find(a => a.id === parseInt(id));

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="not-found-wrapper">
                <h2>Artikel nicht gefunden</h2>
                <Link to="/articles" className="back-link">Zurück zur Übersicht</Link>
                <style>{`
            .not-found-wrapper {
                height: 100vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                background: #050709;
                color: white;
            }
            .back-link { color: #C5A028; text-decoration: underline; margin-top: 1rem; }
        `}</style>
            </div>
        );
    }

    return (
        <div className="article-detail-page">
            <div className="dark-theme-zone">

                {/* Navigation Bar (Sticky or top) */}
                <nav className="detail-nav container">
                    <Link to="/articles" className="back-btn">
                        <span className="arrow">←</span> Übersicht
                    </Link>
                    <span className="nav-brand">TIEFENWISSEN</span>
                </nav>

                {/* Article Header */}
                <header className="article-header container">
                    <div className="meta-top">
                        <span className="category-pill">{article.category}</span>
                        <span className="date">{article.date}</span>
                        <span className="read-time">{article.readTime} Lesezeit</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="article-title"
                    >
                        {article.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="article-subtitle"
                    >
                        {article.subtitle}
                    </motion.p>

                    <div className="author-block">
                        <span className="by">von</span>
                        <span className="author-name">{article.author || "Redaktion"}</span>
                    </div>

                    <div className="divider"></div>
                </header>

                {/* Article Content */}
                <article className="article-body container">
                    {article.content && article.content.map((block, index) => {
                        if (block.type === 'heading') {
                            return <h3 key={index}>{block.text}</h3>;
                        }
                        if (block.type === 'quote') {
                            return (
                                <blockquote key={index}>
                                    <p>"{block.text}"</p>
                                </blockquote>
                            );
                        }
                        return <p key={index}>{block.text}</p>;
                    })}
                </article>

                {/* Footer / Next */}
                <footer className="article-footer container">
                    <div className="divider"></div>
                    <div className="footer-actions">
                        <button className="share-btn">Teilen</button>
                    </div>
                </footer>

            </div>

            <style>{`
        .article-detail-page {
            background-color: #050709;
            min-height: 100vh;
        }

        .dark-theme-zone {
            --bg: #050709;
            --text-main: #E0E0E0;
            --text-muted: #A0A0A0;
            --gold: #C5A028;
            --font-serif: 'Amiri', serif;
            --font-sans: 'Inter', sans-serif;
            
            color: var(--text-main);
            padding-bottom: 120px;
        }

        .container {
            max-width: 740px; /* Reading width */
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Nav */
        .detail-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 120px;
            padding-bottom: 40px;
            font-family: var(--font-sans);
        }

        .back-btn {
            color: var(--text-muted);
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: color 0.3s;
        }
        
        .back-btn:hover {
            color: var(--gold);
        }

        .nav-brand {
            font-size: 0.8rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 700;
            color: #333; /* Very subtle */
        }

        /* Header */
        .article-header {
            margin-bottom: 60px;
            text-align: center;
        }

        .meta-top {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 24px;
            font-family: var(--font-sans);
        }

        .category-pill {
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 700;
            color: var(--gold);
            font-size: 0.75rem;
        }

        .article-title {
            font-family: var(--font-serif);
            font-size: clamp(2.5rem, 6vw, 4rem);
            line-height: 1.1;
            font-weight: 400; /* Serif usually looks better regular/light in titles */
            color: #fff;
            margin-bottom: 24px;
        }

        .article-subtitle {
             font-family: var(--font-sans);
             font-size: 1.2rem;
             line-height: 1.6;
             color: var(--text-muted);
             max-width: 600px;
             margin: 0 auto 32px;
        }

        .author-block {
            font-size: 0.95rem;
            color: var(--text-muted);
            font-family: var(--font-sans);
        }
        
        .author-name {
            color: #fff;
            margin-left: 6px;
            font-weight: 600;
        }

        .divider {
            height: 1px;
            width: 100px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            margin: 40px auto 0;
        }

        /* Body */
        .article-body {
            font-family: 'Inter', sans-serif; /* or a nice serif for body if preferred, but user said modern/Gen Z */
            /* Actually, for "Edgy/Modern", Inter is good. For "Editorial", Serif is classic. */
            /* I'll mix: Headings Serif, Body Sans. */
            font-size: 1.15rem;
            line-height: 1.8;
            color: #d1d5db; /* Slight gray for easier reading on black */
        }

        .article-body p {
            margin-bottom: 24px;
        }

        .article-body h3 {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            color: #fff;
            margin-top: 48px;
            margin-bottom: 20px;
            font-weight: 400;
        }

        .article-body blockquote {
            border-left: 2px solid var(--gold);
            margin: 40px 0;
            padding-left: 24px;
            font-family: var(--font-serif);
            font-size: 1.4rem;
            color: #fff;
            line-height: 1.4;
            letter-spacing: -0.01em;
            font-style: italic;
        }
        
        /* Footer */
        .article-footer {
            margin-top: 80px;
            text-align: center;
        }
        
        .share-btn {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 10px 24px;
            border-radius: 99px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 32px;
        }
        
        .share-btn:hover {
            border-color: var(--gold);
            color: var(--gold);
        }

        @media (max-width: 768px) {
            .detail-nav {
                padding-top: 100px; /* More space for header on mobile? */
            }
            .article-title {
                font-size: 2.2rem;
            }
        }
      `}</style>
        </div>
    );
};

export default ArticleDetailPage;
