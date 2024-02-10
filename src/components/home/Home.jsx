import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "../redux/courseReducer";
import courseModel from "../data/courseModel";
import Heading from "../common/Heading";
import "./Home.css";
import AllCourses from "../AllCourse";

const Home = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [enrollmentData, setEnrollmentData] = useState({
    courseName: "",
    instructor: "",
    thumbnail: "",
    dueDate: "",
    progress: "",
  });
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleEnrollmentSubmit = async (e) => {
    e.preventDefault();

    // Use the current state of enrollmentData for the request body
    const res = await fetch(
      "https://educationapp-78654-default-rtdb.firebaseio.com/Data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentData), // Use enrollmentData directly here
      }
    );

    // const data = await res.json();

    if (res.ok) {
      alert("Enrollment successful");
      setShowEnrollmentForm(false);
    } else {
      alert("Enrollment not successful");
    }
  };

  const handleEnrollNow = (course) => {
    setEnrollmentData({
      courseName: course.name,
      instructor: course.instructor,
      thumbnail: course.thumbnail,
      dueDate: course.duration,
      progress: "0%",
    });
    setShowEnrollmentForm(true);
  };

  useEffect(() => {
    dispatch(setCourses(courseModel));
  }, [dispatch]);

  return (
    <div>
      <div className="home">
        <div className="row">
          <Heading
            subtitle="WELCOME TO ACADEMIA"
            title="Best Online Education Expertise"
          />
          <p className="para1">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="hero">
          <img
            src={
              "https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?size=626&ext=jpg&ga=GA1.1.2126976032.1691128280&semt=sph"
            }
            alt="technology"
          />
        </div>
      </div>
      <div className="courses-container">
        <AllCourses courses={courses} handleEnrollNow={handleEnrollNow} />
      </div>
      {showEnrollmentForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowEnrollmentForm(false)}
        >
          <div
            className="enrollment-form-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Enroll Now</h2>
            <form onSubmit={handleEnrollmentSubmit}>
              <div className="form-group">
                <label htmlFor="courseName">Course Name</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={enrollmentData.courseName}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="instructor">Instructor</label>
                <input
                  type="text"
                  id="instructor"
                  name="instructor"
                  value={enrollmentData.instructor}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail URL</label>
                <input
                  type="text"
                  id="thumbnail"
                  name="thumbnail"
                  value={enrollmentData.thumbnail}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="text"
                  id="dueDate"
                  name="dueDate"
                  value={enrollmentData.dueDate}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="progress">Progress</label>
                <input
                  type="text"
                  id="progress"
                  name="progress"
                  value={enrollmentData.progress}
                  readOnly
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
