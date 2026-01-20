import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/navigation.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';

export default function Navigation() {
    const { logout, user, loading } = useContext(AuthContext);

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="navbar">
            <div className="navbar-inner">
                <Link to="/dashboard" className="nav-brand">
                    SKILLSHARE ACADEMY
                </Link>

                <div className="nav-links">
                    <NavLink to="/dashboard" className="nav-link">DASHBOARD</NavLink>
                    <NavLink to="/courses" className="nav-link">COURSES</NavLink>
                    <NavLink to="/mentors" className="nav-link">MENTORS</NavLink>
                </div>

                <div className="nav-right-side">
                    <span className="nav-pill">{user.user.creditBalance} CREDITS</span>
                    <span className="nav-user">Welcome {user.user.name ? user.user.name : "Guest"}</span>
                    <button className="nav-btn" onClick={logout}>LOGOUT</button>
                </div>
            </div>
        </div>
    );
}
