# Danis Rai — macOS Portfolio

An interactive, macOS-inspired developer portfolio built with React and GSAP. Features draggable windows, dock animations, and variable font effects — all running in the browser.

## Tech Stack

- **React.js** + **Vite**
- **GSAP** + **@gsap/react** — animations, Draggable windows, variable font hover effects
- **Tailwind CSS v4** — styling
- **Zustand** + **Immer** — window state management
- **Lucide React** — icons
- **react-tooltip** — dock tooltips
- **react-pdf** — resume viewer
- **dayjs** — navbar clock

## Features

- macOS-style desktop with draggable, stackable windows
- Dock with hover scale animation
- Variable font weight animation on landing text
- Finder window with project files and About me section
- Terminal window showing tech stack
- Safari window with articles and certifications
- Contact window with social links
- Resume window with PDF viewer and download
- Photos gallery window
- macOS-style footer

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/     # Navbar, Dock, Welcome, Footer, WindowControls
├── windows/        # All window components (Finder, Terminal, Safari, etc.)
├── hoc/            # WindowWrapper HOC
├── store/          # Zustand stores (window, location)
└── constants/      # App data (nav, dock, projects, socials, tech stack)
```

## Live

> [danis-portfolio.vercel.app](https://danis-portfolio.vercel.app) *(update with your deployed URL)*
