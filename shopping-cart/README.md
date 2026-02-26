# Shopping Cart App

A small e-commerce front end that fetches products, lets users add items to a cart, update quantities, and see totals. Built with React, Redux Toolkit, and Vite to demonstrate modern state management and async data fetching.

## Features
- Product list fetched from an external API
- Add to cart and remove items
- Quantity edits with live total updates
- Basic loading and error states
- Responsive layout

## Tech Stack
- React
- Redux Toolkit
- React Router
- Vite
- CSS

## Getting Started
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` Start the dev server
- `npm run build` Create a production build
- `npm run preview` Preview the production build locally

## Project Structure
- `src/components` UI components and pages
- `src/features/ShopCart` Redux slices
- `src/app` Redux store setup

## Notes
- This project is intended as a portfolio piece and focuses on clean state management and UI behavior.
- Product data comes from an external API, so the app requires a network connection.

## Roadmap
- Persist cart between sessions
- Improve accessibility and SEO
- Add product details page
