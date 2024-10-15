import React from 'react';

/**
 * NotFound Component
 *
 * This component displays a 404 error message when the user navigates to a route
 * that does not exist in the application. It informs the user that the requested
 * page could not be found and provides a link to navigate back to the login page.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
function NotFound() {
    return (
        <div className="not-found">
            <h2>404 - Page Not Found</h2> {/* Heading for the error message */}
            <p>Sorry, the page you are looking for does not exist.</p> {/* Informative message */}
            <a href="/login">Go back to Login</a> {/* Link to redirect users back to the login page */}
        </div>
    );
}

export default NotFound; // Exporting the NotFound component for use in other parts of the application
