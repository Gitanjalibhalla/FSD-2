Aim
To implement routing in a Single Page Application (SPA) using React Router DOM.

Theory
A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content without reloading the entire page.
Routing in SPA allows navigation between different views or components while staying on the same page. This is achieved using client-side routing, where JavaScript handles the URL changes instead of the server.
React Router DOM is a standard library used in React to implement routing. It provides components like:
BrowserRouter – wraps the application and enables routing
Routes – container for all routes
Route – maps a URL path to a component

This makes the application faster and provides a smooth user experience.

Tools / Software Used
Node.js
VS Code
React (Vite)
React Router DOM v6

Procedure / Steps
Step 1: Create React Project
npm create vite@latest experiment-3
cd experiment-3
npm install
Step 2: Install React Router DOM
npm install react-router-dom
Step 3: Create Components
Inside src/ folder:
Home.jsx
About.jsx
Contact.jsx

// Home.jsx
export default function Home() {
  return <h2>Home Page</h2>
}
Step 4: Setup Routing in App.jsx
jsx
Copy code
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
Step 5: Wrap App with BrowserRouter
In main.jsx:

jsx
Copy code
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
Step 6: Run Application

npm run dev
Open in browser:

http://localhost:5173
Output
The application displays:

Home page
About page
Contact page
Navigation between pages happens without page reload, proving successful SPA routing.

Learning Outcomes
After completing this experiment, we learned:
How client-side routing works in SPA.
How to install and use React Router DOM.
How to create multiple pages using components.

How to navigate using Link and Route.

How to structure a real-world React SPA.

