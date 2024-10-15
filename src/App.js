// Importing React library for building the user interface
import React from 'react';
// Importing logo image; if unused, consider removing this line to clean up code
import logo from './logo.svg';
// Importing CSS styles for the application
import './App.css';
// Importing components and functions from react-router-dom for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing Login and Register components for handling user authentication
import Login from './Login';
import Register from './Register';

/**
 * App Component
 * This is the main component of the application that sets up routing
 * and renders the appropriate components based on the URL path.
 *
 * The application supports two main routes:
 * - "/login": Renders the Login component
 * - "/register": Renders the Register component
 *
 * Additionally, the root path ("/") is set to redirect to the Login component by default.
 */
function App() {
    return (
        <Router>
            <div className="App">
                {/* Application title or branding */}
                <h1>Shop.App</h1> {/* Add a title or branding to your app */}
                <Routes>
                    {/* Route for the login page */}
                    <Route path="/login" element={<Login />} />
                    {/* Route for the registration page */}
                    <Route path="/register" element={<Register />} />
                    {/* Default route: Redirect to login page when the root path is accessed */}
                    <Route path="/" element={<Login />} /> {/* Redirect to login as default */}
                    {/* Optional route for handling not found pages; Uncomment if a NotFound component is created */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

// Exporting the App component for use in other parts of the application
export default App;
