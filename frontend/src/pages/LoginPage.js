import React, { useState } from "react";
import "./css/login.css";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit(event) {
        event.preventDefault();
        console.log("LOGIN:", { email, password });
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
                    Registration is free! <a href="#">Create an account</a>
                </p>

            </div>
        </div>
    );
}
