import React from "react";
import { Link } from "react-router-dom";

const AllCourses = ({ courses, handleEnrollNow }) => {
  return (
    <div>
      <h1>Courses</h1>
      <div className="courses-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img
              src={course.thumbnail}
              alt={course.name}
              className="course-thumbnail"
            />
            <div className="course-details">
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <div className="course-enroll-view">
                <Link to={`/courses/${course.id}`} className="view-more-link">
                  View More
                </Link>
                <button
                  className="enroll-button"
                  onClick={() => handleEnrollNow(course)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
