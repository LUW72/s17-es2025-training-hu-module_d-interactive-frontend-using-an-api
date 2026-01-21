import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { MentorContext } from '../contexts/MentorContext';
import Mentor from '../components/Mentor';

export default function MentorsPage() {
  const { mentorList, getMentor } = useContext(MentorContext);
  const { user, loadUser, loading } = useContext(AuthContext);

    useEffect(() => {
        getMentor();
        loadUser();
    }, []);

    if(loading) {
        return (<div>Loading...</div>);
    }


  return (
    <div className='mentor-bracket'>
      <div className='upper-bracket'>
        <h1>MENTOR SESSION BOOKING</h1>
        <p>Book one-on-one sessions with expert mentors to accelerate your learning</p>
        <div className="inner-bracket">
            Your Current Balance:{" "}
            {user.user.creditBalance ? user.user.creditBalance : 0} Credits
            <br></br>
            Session are automaticly checked for confirmation every 30 seconds
        </div>
      </div>

      <div className='av-sessions'>
        <h2>Available Sessions</h2>
        {mentorList
          ? mentorList.map((mentor, i) => {
              return <Mentor mentor={mentor} key={i} />;
            })
          : null}
      </div>
    </div>
  );
}
