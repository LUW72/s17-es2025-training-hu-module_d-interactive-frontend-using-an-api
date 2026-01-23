import React from 'react'
import "../pages/css/mentors.css";

export default function BookedSession({ session }) {

    console.log(session);


    return (
        <div className="sessions keret padding">
            <h3>{session.session.mentorName}</h3>
            <div className="button">
                <button className={
                      session.status === "rejected" ? "rejected-button" 
                    : session.status === "pending" ? "pending-button" 
                    : session.status === "cancelled" ? "canceled-button" 
                    : "confirmed-button"} >
                    {session.status}
                </button>
            </div>
            <div className='boxes-infos'>
                <div className='date'>
                    DATE<br /><br />
                    <strong>{new Date(session.session.sessionDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}</strong>
                </div>
                <div className='time'>
                    TIME<br /><br />
                    <strong>{new Date(session.session.sessionDate).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                    })}</strong>
                </div>
                <div className='duration'>
                    DURATION<br /><br />
                    <strong><p>{session.session.durationMinutes} minutes</p></strong>
                </div>
                <div className='cost'>
                    COST<br /><br /><strong>
                        <p>{session.creditsPaid} credists</p></strong>
                </div>
            </div>
        </div>
    )
}
