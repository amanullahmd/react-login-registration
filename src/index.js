// Import necessary libraries
import React from 'react'; // Import the React library for building user interfaces
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering components to the DOM
import './index.css'; // Import the global CSS file for styling the application
import App from './App'; // Import the main App component that contains the application's routing and layout
import reportWebVitals from './reportWebVitals'; // Import the performance measuring utility

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM element where the React app will be rendered

// Render the application inside the root element
root.render(
    <React.StrictMode> {/* Activate StrictMode to help identify potential problems in the application */}
        <App /> {/* Render the main App component */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app,
// pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Call the function to start measuring performance metrics
