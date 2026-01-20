import React, { useContext, useEffect } from 'react'
import { CoursesContext } from '../contexts/CourseContext';
import { AuthContext } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CourseDetailsPage() {
  const { selectedCourse, getCourseById, loading, completeChapter } =
    useContext(CoursesContext);
  const { loadUser } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;

  useEffect(() => {
    getCourseById(course.id);
  }, [course]);

  if (loading || !selectedCourse || selectedCourse.length == 0) {
    return <div>Az oldal betöltés alatt</div>;
  }
  function markAsCompleted(){}
  return (
    <div className=" padding courseone">
      <div className="keret">
        <button className="keret padding" onClick={() => navigate(-1)}>
          Back to course
        </button>
        <h1>{selectedCourse.course.title}</h1>
        <p>{selectedCourse.course.description}</p>
        <p>{selectedCourse.course.difficulty}</p>
        {selectedCourse.course.id}

        <div className="progress">
          <div className="chapter-progress keret">
            <h3>Chapter progress</h3>
            <div className="progress-container">
              <div className="progressbar"></div>
            </div>
            <p>
              {3} of {12} chapters completed (40 %)
            </p>
          </div>
          <div className="credit-progress keret">
            <h3>Credit progress</h3>
            <div className="progress-container">
              <div className="progressbar"></div>
            </div>
            <p>
              {23} of {35} credits earned (62 %)
            </p>
          </div>
        </div>
      </div>
      {selectedCourse.course.chapters.map((ch, i) => {
        return (
          <div className="keret" key={i}>
            <h2 className="nagy alahuzas">
              Chapter {i + 1}: {ch.title}
            </h2>
            <p>{ch.description}</p>
            <div className="keret nagy szelesseg padding">
              {ch.credits} credits
            </div>
            <button className="inactive" style={{ background: "ligthGray" }}>
              {" "}
              View chapter
            </button>
            <button
              className="keret"
              style={{
                background: ch.isCompleted ? "lightGreen" : "beige",
                cursor: ch.isCompleted ? "not-allowed" : "pointer",
              }}
              onClick={() => {
                markAsCompleted(ch.id, ch.isCompleted);
              }}
            >
              {ch.isCompleted ? "Chapter completed" : "Mark as Completed"}
            </button>
            <div>
              {ch.isCompleted ? (
                <button
                  className="keret linkedin"
                  onClick={() => {
                    //share(ch);
                  }}
                >
                  Share achievement in LinkedIn
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      {/* linkedin widget
      
      */}
      <div id="linkedin-share-root"> LinkedIn widget</div>
    </div>
  );
}
