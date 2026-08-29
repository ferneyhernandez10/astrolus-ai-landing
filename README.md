# Astrolus AI — AI Workflow Landing Page

> **Modern, responsive, and production-ready landing page tailored for AI startups, SaaS platforms, and digital products.**  
> Built with **React.js**, **Tailwind CSS**, and architected under **Atomic Design principles** for high modularity, scalability, and seamless dark-mode support.

[![Live Demo](https://astrolus-ai-landing.vercel.app/)

---

## Project Overview

**Astrolus AI Landing Page** is a clean, modern, and highly scalable frontend implementation engineered for technological platforms and artificial intelligence projects. 

Designed with a mobile-first philosophy, this project leverages **Tailwind CSS** utility classes to deliver fluid responsive layouts, soft ambient background gradients, modern glassmorphism blur effects, and native support for high-contrast **Dark Mode**.

---

## Tech Stack & Dependencies

* **Core Framework:** [React.js](https://reactjs.org/) (powered by [Vite](https://vitejs.dev/) for fast development and optimized production builds).
* **Styling & Layout:** [Tailwind CSS](https://tailwindcss.com/) for rapid utility-first styling, responsive design breakpoints, and native dark mode integration.
* **Iconography:** [Heroicons](https://heroicons.com/) for crisp, interactive vector UI icons.
* **Architecture:** Atomic Design Methodology for clear separation of concerns.

---

## Key Features

* **Atomic Design Methodology:** Strict separation of UI concerns divided into Atoms, Molecules, Organisms, and Templates.
* **Dark Mode Compatibility:** Fully themed using Tailwind CSS `dark:` utilities for optimal visual appeal in high-contrast environments.
* **Fully Responsive Layout:** Mobile-first approach optimized for smartphones (375px+), tablets, and ultra-wide desktop monitors (1440px+), featuring a custom off-canvas burger menu with backdrop blur.
* **High Performance:** Component-driven composition fed by structured JSON data layers, minimizing render overhead.
* **Clean & Scalable Codebase:** Centralized data dictionaries, decoupled presentation logic, and clear JSX component structures.

---

## 🏗️ Architecture & Folder Structure

This project adopts the **Atomic Design pattern**, organizing UI elements into reusable building blocks while isolating static data models from presentation components:

astrolus-ai-landing/
├── public/                  # Static public assets
├── src/
│   ├── components/
│   │   ├── atoms/           # Base UI primitives (BrandLogo, ButtonLink)
│   │   ├── molecules/       # Interactive & compound elements (NavigationLinks, FeatureCard, ReviewCard)
│   │   ├── organisms/       # Section-level blocks (Header, HeroSection, FeaturesSection, Footer)
│   │   └── templates/       # Page structure layouts (LandingPage)
│   ├── data/                # Static data models (features, reviews, companies, footer)
│   ├── image/               # Local graphic assets & illustrations
│   ├── App.css              # Global styles & Tailwind CSS injections
│   ├── App.jsx              # Main React application entry component
│   └── main.jsx             # DOM Rendering root
├── package.json
└── README.md

---

## Acknowledgments & License / Créditos

* **Diseño e Interfaz:** Inspirados en la plantilla Open Source *Astrolus*. Reconstruido e implementado desde cero en **React.js** y **Tailwind CSS** bajo la metodología **Atomic Design** para demostración de habilidades frontend.
* **Licencia:** Distribuido bajo la licencia [MIT License](LICENSE).
