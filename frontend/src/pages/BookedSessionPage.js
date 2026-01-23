
import React, { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

import BookedSession from "../components/BookedSession";

import "../pages/css/mentors.css";

export default function BookedSessionPage() {
    const navigate = useNavigate();
    const { loadUser, user, loading } = useContext(AuthContext);

    useEffect(() => {
        loadUser();
    }, []);

    if (!user) {
        return <div>Loading sessions...</div>;
    }
    return (
        <div className="upper-bracket">
        
            <button className="keret padding" onClick={() => navigate(-1)}>
                Back to Mentors
            </button>
            <div className="">
                {user.sessions.map((s, i) => {
                    return <BookedSession session={s} key={i} mentor={{}} />;
                })}
            </div>
        </div>
    );
}
