import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const configuration = {
//   onUpdate: (registration: ServiceWorkerRegistration) => {
//     console.log("SW Updated!");

//     if (registration && registration.waiting) {
//       if (window.confirm('New version available!  refresh to update your app?')) {
//         registration.waiting.postMessage({ type: 'SKIP_WAITING' });
//         window.location.reload();
//       }
//     }
//   },
//   onSuccess: () => {
//     console.log("HHHHHH")
//   }
// };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register(configuration);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
