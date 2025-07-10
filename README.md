Money Matrix — Expense Tracker
A modern, desktop-friendly expense tracker app built with React and styled-components.

## Overview
-------
Money Matrix helps you manage your finances with a persistent, intuitive UI.
Add, view, search, and delete your income and expenses—all data is securely stored in your browser’s local storage for privacy and persistence.
 
## Features
1.Add, edit, and delete transactions (income or expense)

2.Real-time balance, income, and expense overview

3.Persistent data storage using browser local storage

4.Modern, responsive UI (optimized for desktop)

5.Search and filter transactions

6.Login page for session management (demo logic)

## Getting started
Prerequisites
-Node.js(V14 or above)
-npm:comes with Node.js

## INSTALLATION
1.Clone the repository:
2.Install dependencies:
npm install
2.Start the development server:
npm start
3.App will be available at 
http://localhost:3000 .

## Folder Structure
money-matrix/
├── public/                      # Static files served directly
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
│
├── src/                         # Application source code
│   ├── components/              # Reusable React components
│   │   ├── AddTransaction.js
│   │   ├── Login.js
│   │   ├── OverviewComponent.js
│   │   ├── Tracker.js
│   │   ├── TransactionsContainer.js
│   │   └── TransactionItem.js
│   │
│   ├── App.js                   # Main app component
│   ├── globalStyles.js          # Global styles using styled-components
│   └── index.js                 # React entry point
│
├── .gitignore                   # Git ignore rules
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation
└── yarn.lock / package-lock.json # Dependency lock file

### Available Scripts
-npm start : App launch in developer Mode
-npm run build : Builds the app for production
-npm test : Runs the test suite
-npm run eject(one-way operation) :full control over React app's Build tool

>All expense and income data is stored in your browser’s local storage. It persists across reloads and browser restarts, but is specific to your device and browser.
>The UI is responsive and works on modern browsers, but is optimized for desktop use.
