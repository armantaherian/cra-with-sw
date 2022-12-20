import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';

const VERSION = require('../package.json').version;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:id",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <pre>version: {VERSION}</pre>
        </div>
      </header>

      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
