import React, { useEffect, useState } from "react";
import "./EnrollmentForm.css";

const EnrollmentDetails = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      const response = await fetch(
        "https://educationapp-78654-default-rtdb.firebaseio.com/Data.json"
      );
      const data = await response.json();
      const loadedEnrollments = [];

      for (const key in data) {
        loadedEnrollments.push({
          id: key,
          ...data[key],
        });
      }

      setEnrollments(loadedEnrollments);
    };

    fetchEnrollments().catch((error) =>
      console.error("Error fetching enrollments:", error)
    );
  }, []);

  if (enrollments.length === 0) {
    return <div>No enrollment data found</div>;
  }

  return (
    <div className="enrollment-details-container">
      <h2>Enrollment Details</h2>
      {enrollments.map((enrollment) => (
        <div key={enrollment.id} className="enrollment-confirmation">
          <p>Course Name: {enrollment.courseName}</p>
          <p>Instructor: {enrollment.instructor}</p>
          <p>
            Thumbnail URL:{" "}
            <img
              src={enrollment.thumbnail}
              alt="Course Thumbnail"
              style={{ width: "100px" }}
            />
          </p>
          <p>Due Date: {enrollment.dueDate}</p>
          <p>Progress: {enrollment.progress}</p>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: enrollment.progress }}
            >
              {enrollment.progress}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnrollmentDetails;
