import React, { useContext } from 'react'
import "../pages/css/mentors.css";
import { MentorContext } from '../contexts/MentorContext';
import { useNavigate } from 'react-router-dom';

export default function Mentor({ mentor }) {
    const { bookedSession } = useContext(MentorContext);

    const navigate = useNavigate();

    function sessionBooked() {
        bookedSession(mentor.id)
            .then((resp) => {
                navigate(`/bookedsession`);
            })
            .catch((error) => {
                if (error.response?.status === 403) {
                    alert("Insufficient credits to book this session");
                } else {
                    console.error(error);
                }
            });
    }


    return (
        <div className='lower-big-bracket'>
            <div className='session-bracket'>
                <div className='upper-infos'>
                    <div className='name'>{mentor.mentorName}</div>
                    <div className='expertise'>Expertise: {mentor.expertise}</div>
                    <div className='experience'>{mentor.experienceLevel}</div>
                </div>
                <div className='boxes-infos'>
                    <div className='date'>
                        DATE<br /><br />
                        <strong>{new Date(mentor.sessionDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}</strong>
                    </div>
                    <div className='time'>
                        TIME<br /><br />
                        <strong>{new Date(mentor.sessionDate).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                        })}</strong>
                    </div>
                    <div className='duration'>
                        DURATION<br /><br />
                        <strong><p>{mentor.durationMinutes} minutes</p></strong>
                    </div>
                    <div className='cost'>
                        COST<br /><br /><strong>
                            <p>{mentor.creditCost} credists</p></strong>
                    </div>
                </div>
                <div className='lower-boxes'>
                    <div className="button">
                        <button className='profile'>
                            View Profile
                        </button>
                    </div>
                    <div className="button">
                        <button className={`keret session ${mentor.isAvailable ? "available-button" : "inactive"}  `}
                            onClick={sessionBooked} 
                            disabled={!mentor.isAvailable} >
                            {mentor.isAvailable ? "Available" : "Not available"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
