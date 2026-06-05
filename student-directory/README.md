# Student Directory

A small React + Vite app for managing a student list. You can search students by name, filter by enrollment status, and toggle each student's enrollment state.

## Features

- Search students by name with a controlled input
- Filter the list by `Show All`, `Enrolled`, or `Dropped`
- Toggle a student's enrollment state from the card
- Simple responsive layout and basic card styling

## Tech Stack

- React 19
- Vite
- Plain CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

- `src/App.jsx` - main app logic, filtering, and rendering
- `src/component/StudentCard.jsx` - student card UI and enrollment toggle button
- `src/index.css` - app styling

## Notes

- The student data is currently hardcoded in `src/App.jsx`.
- This project is a good starting point if you want to add editing, sorting, or local storage later.
