import React, { useState } from "react";
import "./css/login.css";
import { NavLink } from "react-router-dom";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function submit(event) {
        event.preventDefault();
        console.log("LOGIN:", { email, password });
    }

    function validateForm() {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Az email cím kötelező";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Érvénytelen email formátum";
        }

        if (!password) {
            newErrors.password = "A jelszó kötelező";
        } else if (password.length < 6) {
            newErrors.password =
                "A jelszónak legalább 6 karakter hosszúnak kell lennie";
        }

        //ezt majd később a submit eseményben fogjuk frissíteni, ide pedig egy return jön.  return newErrors;
        setErrors({ ...newErrors });
    }


    return (
        <div className="page">
            <div className="login">
                <h1>WELCOME BACK!</h1>
                <form onSubmit={submit}>
                    <label>Email</label>
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

                    <button type="submit">LOGIN</button>

                </form>
                <p className="bottom-text">
                    Registration is free! <NavLink to="/register">Create an account</NavLink>
                </p>

            </div>
        </div>
    );
}
