# 🎬 Netflix Clone — Refactor JS to TS

Applicazione front-end che replica l'interfaccia di Netflix, sviluppata con **React, TypeScript e Vite**. Il progetto nasce dal refactoring completo di una precedente versione scritta in JavaScript. I dati relativi a film e serie TV sono forniti da **TMDB**, interrogata tramite un back-end dedicato in Java Spring che funge da proxy, in modo da non esporre pubblicamente la chiave API.

**Demo live:** [netflixcloneportfolio.vercel.app](https://netflixcloneportfolio.vercel.app/)
**Repository back-end:** [netflix-clone-API-calls](https://github.com/giannibussoletti/netflix-clone-API-calls)

---

## ✨ Funzionalità

- **Home** — carosello a tutto schermo con i contenuti in evidenza, seguito da caroselli tematici (trending, top rated, popolari, ecc.)
- **TV Show** — pagina dedicata alle serie TV, organizzata in caroselli
- **Movies** — pagina dedicata ai film, organizzata in caroselli
- **Pagina di dettaglio** — raggiungibile selezionando "More info" nel carosello principale o un poster in uno dei caroselli secondari; riporta:
  - Poster e logo del titolo
  - Trama
  - Anno di uscita
  - Durata in minuti
  - Genere/i
  - Voto medio IMDb
- **Login Page** — mockup dell'interfaccia di accesso Netflix, esclusivamente visivo: non gestisce l'inserimento di dati personali né un sistema di autenticazione reale
- **Settings** — pagina delle impostazioni con gestione profili, dettagli account, piano di abbonamento e lingua (anch'essa in forma di mockup)

---

## 🛠️ Stack tecnico

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/) e [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/) (`fontawesome-svg-core`, `free-brands-svg-icons`, `free-regular-svg-icons`, `free-solid-svg-icons`, `react-fontawesome`)

**Dati:** [TMDB API](https://www.themoviedb.org/documentation/api), interrogata tramite un back-end proxy in Java Spring (repository separata) che evita l'esposizione della chiave API lato client.

**Deploy:** [Vercel](https://vercel.com/)

---

## 📂 Struttura del progetto

```
src/
│   App.tsx
│   Details.tsx              # Pagina di dettaglio (poster, logo, trama, anno, durata, genere, voto IMDb)
│   DetailsPlaceholder.tsx   # Placeholder mostrato durante il caricamento dei dettagli
│   Footer.tsx
│   Home.tsx                 # Pagina Home
│   LoginPage.tsx            # Mockup della pagina di login (solo UI, nessuna gestione dati reali)
│   LoginPageWNavBar.tsx
│   main.tsx
│   Settings.tsx             # Pagina delle impostazioni
│
├───assets/
│       arrays.ts
│       fetchs.ts            # Chiamate al back-end (proxy TMDB)
│       functions.ts
│       style.css
│       types.ts             # Tipi TypeScript condivisi
│       variables.ts
│
└───components/
    │   FooterColComponent.tsx
    │   Movies.tsx           # Pagina Movies
    │   MyNavBar.tsx
    │   TvShow.tsx           # Pagina TV Show
    │
    ├───Home/
    │   │   FullHeigthCar.tsx    # Carosello a tutto schermo
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

## 🚀 Avvio del progetto

### Prerequisiti

- [Node.js](https://nodejs.org/) (versione LTS consigliata)
- npm
- Il back-end [netflix-clone-API-calls](https://github.com/giannibussoletti/netflix-clone-API-calls), attivo in locale o deployato, necessario per servire i dati provenienti da TMDB

### Installazione

1. Clonazione del repository:

   ```bash
   git clone https://github.com/giannibussoletti/Netflix-Clone-Refactor-JS-to-TS.git
   cd Netflix-Clone-Refactor-JS-to-TS
   ```

2. Installazione delle dipendenze:

   ```bash
   npm install
   ```

3. Creazione di un file `.env` nella root del progetto, con la seguente variabile d'ambiente per l'URL del back-end:

   ```env
   VITE_API_URL=http://localhost:PORT
   ```

   Il valore `PORT` va sostituito con la porta su cui è in esecuzione il back-end in locale, oppure va indicato l'URL del back-end deployato.

4. Avvio del server di sviluppo:

   ```bash
   npm run dev
   ```

   L'applicazione risulta disponibile all'indirizzo [http://localhost:5173](http://localhost:5173).

### Build di produzione

```bash
npm run build
```

I file generati vengono salvati nella cartella `dist/`.

---

## 🌐 Deploy

Il front-end è deployato su **Vercel**, all'indirizzo [netflixcloneportfolio.vercel.app](https://netflixcloneportfolio.vercel.app/). La variabile d'ambiente `VITE_API_URL` va configurata anche nelle impostazioni del progetto su Vercel, puntando all'URL del back-end in produzione.

---

## 🔗 Repository correlate

- **Back-end (Java Spring, proxy per TMDB):** [netflix-clone-API-calls](https://github.com/giannibussoletti/netflix-clone-API-calls)

---

## 📄 Licenza

Nessuna licenza specificata.
