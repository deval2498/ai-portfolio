# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 14 portfolio website using:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwindcss with custom CSS variables for theming
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Fonts**: Geist Sans and Geist Mono loaded locally via `next/font`
- **Structure**: Standard Next.js App Router structure in `src/app/`

The project follows Next.js App Router conventions with layout.tsx and page.tsx files. Custom CSS variables are defined for background/foreground colors to support dark mode.