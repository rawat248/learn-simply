import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Courses.css";

const CourseDetailComponent = () => {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find((course) => course.id === parseInt(courseId))
  );

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-details-container ">
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(", ")}</p>
      <div>
        <h3>Syllabus:</h3>
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailComponent;
