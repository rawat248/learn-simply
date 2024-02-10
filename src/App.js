import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseDetailComponent from "./components/Courses";
import Home from "./components/home/Home";
import EnrollmentDetails from "./components/EnrollmentForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<CourseDetailComponent />} />
        <Route path="/enrollment-details" element={<EnrollmentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
