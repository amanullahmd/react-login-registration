import React, { useState } from "react";
import axios from "axios";

/**
 * Register Component
 *
 * This component allows users to create a new account by providing their name,
 * email, and password. Upon form submission, the data is sent to the backend
 * for user registration. If successful, the user is alerted and redirected
 * to the login page.
 *
 * @returns {JSX.Element} The rendered Register component.
 */
function Register() {
    // State to hold the registration form data
    const [register, setRegister] = useState({
        name: "", // User's name
        email: "", // User's email address
        password: "", // User's password
    });

    /**
     * Handle change event for input fields.
     * Updates the state with the current input values.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the input fields.
     */
    const handleChange = (e) => {
        setRegister({
            ...register, // Preserve existing state
            [e.target.name]: e.target.value, // Update the specific field
        });
    };

    /**
     * Handle form submission event.
     * Prevents default form behavior, logs the registration data, and makes
     * an API call to register the user.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Registering user:", register); // Log registration data

        try {
            // API call to register the user
            const response = await axios.post('http://localhost:8082/addUser', register);
            console.log("Response data:", response.data); // Log response data
            alert("User added successfully"); // Notify the user of success
            // Redirect to login page after successful registration
            window.location.href = "/login";
        } catch (error) {
            console.error("Registration error:", error); // Log any errors
            alert("An error occurred while registering. Please try again."); // Notify the user of the error
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2> {/* Heading for the registration form */}

                <label>Name:</label>
                <input
                    type="text" // Input type for name
                    name="name" // Name attribute for state management
                    placeholder="Enter your name" // Placeholder text
                    value={register.name} // Controlled input value
                    onChange={handleChange} // Handle input changes
                    required // Mark field as required
                />
                <br /><br />

                <label>Email:</label>
                <input
                    type="email" // Input type for email
                    name="email" // Name attribute for state management
                    placeholder="Enter your email" // Placeholder text
                    value={register.email} // Controlled input value
                    onChange={handleChange} // Handle input changes
                    required // Mark field as required
                />
                <br /><br />

                <label>Password:</label>
                <input
                    type="password" // Input type for password
                    name="password" // Name attribute for state management
                    placeholder="Enter your password" // Placeholder text
                    value={register.password} // Controlled input value
                    onChange={handleChange} // Handle input changes
                    required // Mark field as required
                />
                <br /><br />

                <button type="submit">Register</button> {/* Submit button */}
            </form>
        </div>
    );
}

export default Register; // Exporting the Register component for use in other parts of the application
