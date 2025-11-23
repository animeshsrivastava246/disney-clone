# Disney+ Old Style UI Clone

A React-based clone of the classic Disney+ landing page, built to practice modern React, routing, state management, and styled-components.

## Features

- React single-page application with component-based UI.
- Client-side routing for pages using React Router.
- Global state management with Redux Toolkit and React Redux.
- Carousel/slider UI using react-slick and slick-carousel.
- Styled-components for scoped, themeable styling.
- Firebase integration (e.g., for auth or data, depending on implementation).
- Ready-to-run with Create React App tooling.


## Tech Stack

- React 18
- React Router DOM 6
- Redux Toolkit \& React Redux
- Styled-components
- Firebase (v9 modular SDK)
- React Slick \& Slick Carousel
- Create React App (react-scripts 5)


## Getting Started

### Prerequisites

- Node.js $>= 22.0.0$
- npm or yarn


### Installation

```bash
# Clone the repository
git clone https://github.com/animeshsrivastava246/disney-clone.git

# Move into the project directory
cd disney-clone

# Install dependencies
npm install
# or
yarn
```


### Running the app in development

```bash
npm start
# or
yarn start
```

This starts the app in development mode, usually at `http://localhost:3000`.

### Build for production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## Available Scripts

- `npm start` – Run the app in development mode.
- `npm run build` – Create an optimized production build.
- `npm test` – Run tests with React Testing Library and Jest.
- `npm run eject` – Eject from Create React App (irreversible).


## Project Structure (Typical)

- `src/` – React components, pages, routes, Redux slices, styles, and Firebase config.
- `public/` – Static assets and base HTML template.
- `package.json` – Dependencies, scripts, and configuration.

Actual folders and filenames may differ slightly based on how the project is organized.

## Testing

This project uses:

- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `web-vitals`

Run the test suite with:

```bash
npm test
# or
yarn test
```


## Notes / Ideas for Extension

- Add authentication and user profiles with Firebase Auth.
- Make the layout fully responsive for mobile and tablet.
- Add more carousels and categories to mimic the original Disney+ experience.
- Improve accessibility (ARIA, keyboard navigation, alt text).


## License \& Disclaimer

This project is for learning and portfolio purposes only.
Disney and Disney+ are registered trademarks of The Walt Disney Company.
This project is not affiliated with or endorsed by Disney in any way.
