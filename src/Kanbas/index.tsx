import { Link } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { courses } from "../Kanbas/Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {

  const [courseInfo, setCourses] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-25",
    image: "../logo192.png",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, id: new Date().getMilliseconds().toString() };
    setCourses([...courseInfo, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courseInfo.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courseInfo.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>

        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courseInfo}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courseInfo} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
