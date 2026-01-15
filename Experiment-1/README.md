React Navigation Project (Vite)

This is a simple React project made using Vite.
The main aim of this project is to understand how a React project works, how files are organized, how navigation (routing) works, and how to push code to GitHub.

What I Have Done Till Now

1. Project Setup

Created a React project using Vite

Installed all required packages using npm install

Started the project using npm run dev

This starts the project on the browser.

2. Folder Structure
   FSD-2/Experiment1
   │
   ├── public
   ├── src
   │ ├── components
   │ │ ├── Home.jsx
   │ │ └── About.jsx
   │ ├── App.jsx
   │ ├── main.jsx
   │ └── index.css
   │
   ├── index.html
   ├── package.json
   ├── vite.config.js
   └── README.md

src folder contains all the main React code

components folder has different pages like Home and About

App.jsx handles routing

main.jsx is the entry point of the React app

index.css is used for styling

3. Components Created
   Home Component (Home.jsx)

Created a simple React functional component

Added a navigation bar

Used Link from react-router-dom

Displayed:

Home page heading

Navigation links (Home and About)

My name as a heading

About Component (About.jsx)

Created a separate About page

Used routing to move to this page without reloading

4. Routing Implementation

Installed react-router-dom

Used:

BrowserRouter

Routes

Route

Link

Navigation happens without page refresh

This makes the app fast and smooth.

5. Styling

Used index.css for styling

Used className in React

Styled:

Navigation bar

Headings

Links

6. Running the Project

To run this project on your system:

npm install
npm run dev

7. Git and GitHub

Initialized Git using git init

Added files using git add .

Committed the code using git commit

Created a repository on GitHub

Pushed the project using:

git push -u origin main

Architecture: MPA vs SPA
MPA (Multi Page Application)

In an MPA:

Every time you click a link, the page reloads

Browser sends a request to the server again and again

Server sends a full new HTML page every time

This makes the website slower.

SPA (Single Page Application)

In an SPA:

The page loads only once

HTML, CSS, and JavaScript load together

Only data changes when you click links

No full page reload happens

This makes the website fast and smooth.

Why This Project is an SPA

Built using React and Vite

Uses react-router-dom for navigation

Pages change without reloading

Only data and components change

Technologies Used

React.js

Vite

JavaScript (JSX)

HTML

CSS

Git and GitHub

What I Learned

How a React project is structured

How components work

How routing works in React

How to push a project to GitHub

Author

Gitanjali
