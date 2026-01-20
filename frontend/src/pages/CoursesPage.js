import React, { useContext, useEffect } from 'react'
import { CoursesContext } from '../contexts/CourseContext';
import CourseSearch from '../components/CourseSearch';
import Course from '../components/Course';
import "./css/courses.css";

export default function CoursesPage() {
  const { getCourses, filteredList, loading, serverError } = useContext(CoursesContext);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <CourseSearch />
      <div className="courses ">
        {filteredList.map((course) => {
          return <Course course={course} key={course.id} />;
        })}
      </div>
    </>
  );
}
