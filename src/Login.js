import React, { useState } from "react"; // Import React and the useState hook for managing state in the component
import axios from "axios"; // Import axios for making HTTP requests

function Login() {
    // State variables for storing user input
    const [password, setPasswordValue] = useState(""); // State for password input
    const [userId, setUserIdValue] = useState(""); // State for user ID (email) input

    // Handle change in password input
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value); // Update the password state with the input value
    };

    // Handle change in user ID input
    const handleUserIdChange = (e) => {
        setUserIdValue(e.target.value); // Update the user ID state with the input value
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create an object with userId and password for passing to the API
        const data = {
            email: userId, // Ensure that the key matches what the backend expects
            password: password,
        };

        try {
            // Make a POST request to the login API endpoint
            const response = await axios.post("http://localhost:8082/loginUser", data);
            console.log("Response data: ", response.data); // Log the response data for debugging

            // Check if the response is valid
            if (!response.data) {
                alert("Invalid User ID or Password"); // Show alert for invalid credentials
            } else {
                alert("Login Successful"); // Show success message
                // You can redirect or perform other actions after successful login
            }
        } catch (error) {
            console.error("Login error: ", error); // Log any errors that occur during the request
            alert("An error occurred. Please try again."); // Show alert for general errors
        }
    };

    // Redirect to the registration page
    const redirectToRegister = () => {
        window.location.href = "/register"; // Navigate to the registration page
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>User ID (Email):</label>
                    <input
                        type="email" // Corrected the type to "email" for proper validation
                        placeholder="Enter your email" // Placeholder text for the input
                        value={userId} // Bind the input value to the userId state
                        onChange={handleUserIdChange} // Update state on input change
                    />
                    <br />
                    <br />
                    <label>Password:</label>
                    <input
                        type="password" // Password input type for security
                        placeholder="Enter your password" // Placeholder text for the input
                        value={password} // Bind the input value to the password state
                        onChange={handlePasswordChange} // Update state on input change
                    />
                    <br />
                    <br />
                    <a href="#" onClick={redirectToRegister}>Don't have an account?</a> {/* Redirect to register */}
                    <button type="submit">Login</button> {/* Submit button for the form */}
                </form>
            </div>
        </>
    );
}

export default Login; // Export the Login component for use in other parts of the application
