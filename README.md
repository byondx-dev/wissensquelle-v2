# Wissensquelle v2

Eine moderne Bildungsplattform für Manba' al-'Ilm: Fatāwā-Archiv, Dār al-Iftā’, Madrasah-Studienpfad, Gelehrtenprofile und Kontaktmöglichkeiten in einem klaren, vertrauenswürdigen UI.

## Kurzbeschreibung
- Single-Page-Anwendung (SPA) mit geführter Navigation für Fatwā-Anfragen und strukturierte Lernpfade.
- Startseite mit animiertem Hero, Dār al-Iftā’-, Madrasah- und Gelehrten-Sektionen.
- Dedizierte Seiten für Fatāwā, Dār al-Iftā’, Gelehrte, Madrasah, Über uns und Kontakt; gemeinsame Page-Hero-Komponente.
- Neuer Bereich „Externe Kurse“ für frei belegbare Angebote außerhalb der Madrasah.
- Framer-Motion-Animationen, responsives Design, gold-akzentuierte Premium-Optik.

## Tech-Stack
- React 19 mit Vite 7
- React Router 7
- Framer Motion für Animationen
- Plain CSS (Global Styles in `src/index.css`, komponentennahe Styles inline)
- ESLint 9 (basierend auf `eslint.config.js`)

## Projektstruktur (Auszug)
- `src/App.jsx` – Routing & Layout
- `src/components/` – Header, PageHero, inhaltsbezogene Abschnitte (DarAlIfta, Madrasah, Fatawa, ExternalCourses, Scholars, etc.)
- `src/pages/` – Seiten-Shells je Route (Fatāwā, Dār al-Iftā’, Gelehrte, Madrasah, Über uns, Kontakt, Home)
- `src/index.css` – globale Variablen, Typografie, Buttons, Page-Hero Styles
- `public/` – statische Assets

## Setup
Voraussetzungen: Node.js ≥ 18.

```bash
npm install
npm run dev        # Entwicklungsserver mit HMR
npm run build      # Produktion-Build
npm run preview    # Vorschau des Builds
npm run lint       # ESLint prüfen
```

Standard-Port für `npm run dev` ist 5173 (Vite-Default).

## Deployment-Hinweise
- Vite-Build generiert statische Assets in `dist/`.
- SPA-Routing: Webserver sollte alle Routen auf `index.html` zurückführen (History-Fallback).

## Inhaltlicher Kontext (für andere Agenten)
Dies ist eine deutschsprachige Bildungs-/Wissensplattform für islamische Inhalte:
- Fatwā-Archiv und Dār al-Iftā’ (Fatwā-Gremium)
- Madrasah As-Sunnah (strukturierte Online-Kurse)
- Externe Kurse ohne Immatrikulation
- Gelehrten-/Dozenten-Profile, Kontaktformular
Design-Schwerpunkt: seriöses, modernes UI mit Gold-Akzenten, klaren Call-to-Actions und subtilen Animationen.
