**English** | [Italiano](README.it.md)

# 🎬 Netflix Clone — Refactor JS to TS

Front-end application that replicates the Netflix interface, built with **React, TypeScript and Vite**. The project is a complete refactor of a previous version written in JavaScript, available here:

**Previous version:** [Netflix-react-js-build](https://github.com/giannibussoletti/Netflix_Clone_React_Build)

Movie and TV series data are provided by **The Movie Database** APIs, queried through a dedicated Java Spring back-end that acts as a proxy, so the API key is never publicly exposed.

**Live demo:** [netflixcloneportfolio.vercel.app](https://netflixcloneportfolio.vercel.app/)

**Back-end repository:** [netflix-clone-API-calls](https://github.com/giannibussoletti/netflix-clone-API-calls)

---

## ✨ Features

- **Home** — full-screen carousel with featured content, followed by themed carousels (trending, top rated, popular, etc.)
- **TV Shows** — page dedicated to TV series, organized in carousels
- **Movies** — page dedicated to movies, organized in carousels
- **Details page** — reached by selecting "More info" in the main carousel or a poster in one of the secondary carousels; it shows:
  - Title poster and logo
  - Plot
  - Release year
  - Runtime in minutes
  - Genre(s)
  - Average IMDb rating
- **Login Page** — purely visual mockup of the Netflix sign-in interface: it doesn't handle personal data input or a real authentication system
- **Settings** — settings page with profile management, account details, subscription plan and language (also a mockup)

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/) and [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/) (`fontawesome-svg-core`, `free-brands-svg-icons`, `free-regular-svg-icons`, `free-solid-svg-icons`, `react-fontawesome`)

**Data:** [TMDB API](https://www.themoviedb.org/documentation/api), queried through a Java Spring proxy back-end (separate repository) that keeps the API key from being exposed on the client side.

**Deploy:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
src/
│   App.tsx
│   Details.tsx              # Details page (poster, logo, plot, year, runtime, genre, IMDb rating)
│   DetailsPlaceholder.tsx   # Placeholder shown while details are loading
│   Footer.tsx
│   Home.tsx                 # Home page
│   LoginPage.tsx            # Login page mockup (UI only, no real data handling)
│   LoginPageWNavBar.tsx
│   main.tsx
│   Settings.tsx             # Settings page
│
├───assets/
│       arrays.ts
│       fetchs.ts            # Back-end calls (TMDB proxy)
│       functions.ts
│       style.css
│       types.ts             # Shared TypeScript types
│       variables.ts
│
└───components/
    │   FooterColComponent.tsx
    │   Movies.tsx           # Movies page
    │   MyNavBar.tsx
    │   TvShow.tsx           # TV Shows page
    │
    ├───Home/
    │   │   FullHeigthCar.tsx    # Full-screen carousel
    │   │   NavBarElement.tsx
    │   │   SliderMedia.tsx
    │   │
    │   ├───fh-slider/
    │   │       MyButtonCarousel.tsx
    │   │       MyCarouselItem.tsx
    │   │
    │   ├───NavBar/
    │   │       NavBarSearch.tsx
    │   │       SearchBar.tsx
    │   │
    │   └───SliderComponents/
    │           SingleSlide.tsx
    │           SliderButton.tsx
    │           SliderTitle.tsx
    │
    ├───LoginPageComponents/
    │       BottomButton.tsx
    │       LoginNavBar.tsx
    │       MenuLang.tsx
    │
    └───Settings/
            DetailsSettings.tsx
            LanguageSetting.tsx
            ListGenerator.tsx
            MemberAccount.tsx
            PlanDetails.tsx
            ProfileSettings.tsx
            SectionTitle.tsx
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm
- The [netflix-clone-API-calls](https://github.com/giannibussoletti/netflix-clone-API-calls) back-end, running locally or deployed, required to serve the data from TMDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/giannibussoletti/Netflix-Clone-Refactor-JS-to-TS.git
   cd Netflix-Clone-Refactor-JS-to-TS
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the following environment variable for the back-end URL:

   ```env
   VITE_API_URL=http://localhost:PORT
   ```

   Replace `PORT` with the port the back-end is running on locally, or use the URL of the deployed back-end.

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

The generated files are saved in the `dist/` folder.

---

## 🌐 Deploy

The front-end is deployed on **Vercel** at [netflixcloneportfolio.vercel.app](https://netflixcloneportfolio.vercel.app/). The `VITE_API_URL` environment variable must also be set in the Vercel project settings, pointing to the production back-end URL.
