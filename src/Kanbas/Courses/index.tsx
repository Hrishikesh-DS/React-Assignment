import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "../Navigation/index.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  // const findCourseById = async (courseId?: string) => {
  //   const response = await axios.get(
  //     `${COURSES_API}/${courseId}`
  //   );
  //   setCourse(response.data);
  // };
  const findCourseById = async (courseId?: string) => {
    try {
      const response = await axios.get(
        `${COURSES_API}?courseId=${courseId}`
      );
      setCourse(response.data);
      console.log("CourseSet:"+course)
    } catch (err) {
      console.log(err);
    }
  };


  const { courseId } = useParams();
  // const course = courses.find((course) => course._id === courseId);
  const loc = useLocation().pathname;
  const pathParts = loc.split('/');
  const lastPart = pathParts[pathParts.length - 1];
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <h1 className="header-red"><HiMiniBars3 /> Course {">"} {course?.name} {" > "} {lastPart}</h1>
      <hr />
      <div className="row">
        <div className="col-2 d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="col-12 col-md-10 col-lg-10 col-xl-10 col-lg-8">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;