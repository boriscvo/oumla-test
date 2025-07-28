# OUMLA TEST WEB3 PLATFORM

## Installation

The project is built using create-next-app. Clone/download the repo, install dependencies, run the development server and start the application:

```bash
npm install
npm run dev
```

Also, contract address should be set in the `.env.local` file, as follows:

```NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddressHere

```

The app is running on [http://localhost:3000](http://localhost:3000).

## Stack

- Next, React, TypeScript, Tailwind CSS - the core, as required.
- ethers - for Ethereum blockchain interaction.
- Zustand - for state management.
- Tanstack Query - for data fetching and caching.
- ShadCN - as requested.
- React Konva - for chart rendering.
- Zod - for data validation.

## Features

The project consist of three pages:

**Home** - the main page of the dashboard, with a welcome message, recent trend historical chart and a recent activity section
**Transactions** - the page with a list of transactions, possibility to filter by type and address (although the address filter could be replaced with some more advanced search, a price range or a search by date).
**Approvals** - the page with a list of transactions to be approved, depending on the role, with a possibility to filter by address.

Every activity is followed with a proper UI elements, dialog or visual cue, to follow the state of interactions.

## Project structure

The project is structured to support maintenance and scalability. Modular approach is used with composite components pattern and atomic design principles. The presentational components are also heavily emphasised to improve code readibility. Separation of concerns is applied with hooks and services abstracted away from the UI logic.

The structure looks like this:

**src** (contains pages, atoms, blocks, layout and global css): This directory contains the main UX and routing logic. Due to the opinionated nature of Next, pages are leading the routes.

The components are divided into:

- atoms - the smallest reusable presentational components, and
- blocks - more grouped and complex, yet reusable and relatively rounded components.

The idea is to make such components controlled and, if possible, stateless. The Shadcn components are used as they come but often combined with blocks.

Each page, atom or block contains:

- ui - where sub-components are defined, mostly presentational but also more complex
- hooks - where logic is defined
- utils - for utility functions.

Each of these functions, components or hooks, defined in such structure, is reusable only on the same level and below. No reusability outside its scope. For example: If some presentational component is needed in two different pages or blocks, it should be elevated in the separate atom directory.

**http** contains services, REST (not in this case) and other network requests, such as contract calls. Services either create or fetch.
**hooks and utils** are also defined at the "top" level, indicating their reusability across the app.
**providers** - installation and configuration folder,
**store** - Zustand has centralized store, used for state management.
**types** - top level types definitions, commons and network (api) synchronization.

## What is missing from being a full-fledged application

**Responsiveness** - the app has a basic responsive layout, but it is a good starting point.
**Live reactivity** - the app has two listeners, connected for live updates, both listening for the state of wallet connection. Interactions between transactions states (pending, approved, rejected) are not live, but implemented with proper refresh/refetch callbacks, preserving the user experience (although caching states might require a bit of polishing). No live toasts.
**Testing** - under regular circumstances, the app would be covered with tests.
**Error handling** - perhaps some boundaries and more advanced error states would also be needed.
