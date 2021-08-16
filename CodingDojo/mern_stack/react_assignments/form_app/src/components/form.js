import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // Validation for first name.
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be contain atleast 2 characters.");
        }
        else {
            setFirstNameError("");
        }
    }

    // Validation for last name.
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be contain atleast 2 characters.");
        }
        else {
            setLastNameError("");
        }
    }

    // Validation for email.
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be contain atleast 5 characters.");
        }
        else {
            setEmailError("");
        }
    }

    // Validations for password.
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be contain atleast 8 characters.");
        }
        else {
            setPasswordError("");
        }
    }

    // Validations for confirm password.
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be contain atleast 8 characters.");
        }
        else if (e.target.value != password) {
            setConfirmPasswordError("Password and confirm password do not match!");
        }
        else {
            setConfirmPasswordError("");
        }
    }


    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };
    };


    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" onChange={handleFirstName} />
                    {
                        firstNameError ?
                            <p>{firstNameError}</p> :
                            ''
                    }

                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" onChange={handleLastName} />
                    {
                        lastNameError ?
                            <p>{lastNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="email" onChange={handleEmail} />
                    {
                        emailError ?
                            <p>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p>{passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input type="password" onChange={handleConfirm} />
                    {
                        confirmPasswordError ?
                            <p>{confirmPasswordError}</p> :
                            ''
                    }
                </div>
                { //Disable submit button if form fields are invalid.
                    firstNameError || lastNameError || emailError || passwordError
                        || confirmPasswordError ?
                        <input type="submit" value="Create User" disabled /> :
                        <input type="submit" value="Create User" />
                }

            </form>

            <p>Your Form Data:</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
}

export default Form;