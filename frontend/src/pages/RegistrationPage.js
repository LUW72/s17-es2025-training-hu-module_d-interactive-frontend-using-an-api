import React, { useState } from "react";
import "./css/login.css";
import "./css/registration.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';

export default function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [password, setPassword] = useState("");

     const [errors, setErrors] = useState({});

    const { register } = useContext(AuthContext);     

    function submit(event) {
        event.preventDefault();
        console.log("REGISTER:", { email, password });

        register({name, email, password, cpassword});        
    }


    return (
        <div className="page">
            <div className="registration">
                <h1>CREATE AN ACCOUNT</h1>
                <form onSubmit={submit}>
                    <label>Full Name</label>
                    <input
                        type="name"
                        value={name}
                        placeholder="Enter your full name"
                        onChange={(e) => setName(e.target.value)}
                    />


                    <label>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>Confirm your password</label>
                    <input
                        type="password"
                        value={cpassword}
                        placeholder="Confirm your password"
                        onChange={(e) => setCPassword(e.target.value)}
                    />

                    <button type="submit">CREATE AN ACCOUNT</button>

                </form>
                <p className="bottom-text">
                    Already have an account? <NavLink to="/login">Sign in here</NavLink>
                </p>

            </div>
        </div>
    );
}
