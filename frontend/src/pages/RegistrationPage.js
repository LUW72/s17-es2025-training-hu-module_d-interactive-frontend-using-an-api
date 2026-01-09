import React, { useState } from "react";
import "./css/login.css";
import "./css/registration.css";

export default function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [password, setPassword] = useState("");

    function submit(event) {
        event.preventDefault();
        console.log("LOGIN:", { email, password });
    }


    return (
        <div className="page">
            <div className="registration">
                <h1>CREATE AN ACCOUNT</h1>
                <form onSubmit={submit}>
                    <label>Full Name</label>
                    <input
                        type="fullname"
                        value={fullname}
                        placeholder="Enter your full name"
                        onChange={(e) => setFullname(e.target.value)}
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
                        type="cpassword"
                        value={cpassword}
                        placeholder="Confirm your password"
                        onChange={(e) => setCPassword(e.target.value)}
                    />

                    <button type="submit">CREATE AN ACCOUNT</button>

                </form>
                <p className="bottom-text">
                    Already have an account? <a href="#">Sign in here</a>
                </p>

            </div>
        </div>
    );
}
