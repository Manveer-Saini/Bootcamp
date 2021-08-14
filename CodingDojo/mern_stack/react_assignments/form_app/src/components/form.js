import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" onChange={(e) => {setFirstName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" onChange={(e) => {setLastName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input type="password" onChange={(e) => {setConfirm(e.target.value)}}/>
                </div>
                <input type="submit" value="Create User" />
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