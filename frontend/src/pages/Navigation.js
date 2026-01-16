import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/navigation.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from 'react';

export default function Navigation() {
    const { logout, user, loading } = useContext(AuthContext);


    return (
        <div className="navbar">
            <div className="navbar-inner">
                <Link to="/dashboard" className="nav-brand">
                    SKILLSHARE ACADEMY
                </Link>

                <div className="nav-links">
                    <NavLink to="/dashboard" className="nav-link">
                        DASHBOARD
                    </NavLink>
                    <NavLink to="/courses" className="nav-link">
                        COURSES
                    </NavLink>
                    <NavLink to="/mentors" className="nav-link">
                        MENTORS
                    </NavLink>
                </div>

                <div className="nav-right-side">
                    <span className="nav-pill">25 CREDITS</span>
                    <span className="nav-user">Welcome {user.name ? user.name : "Guest"}</span>
                    <button className="nav-btn">LOGOUT</button>
                </div>
            </div>
        </div>
    );
}
