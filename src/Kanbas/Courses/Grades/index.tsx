import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import {
    FaCog,
  FaFile, FaFilter, FaSearch, FaSortDown} from "react-icons/fa";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn btn-light border  m-2">
          <FaFile/> Import
        </button>
        <button className="btn btn-light border  m-2">
          <FaFile/>Export
          <FaSortDown/>
        </button>
        <button className="btn btn-light border  m-2">
          <FaCog/>
        </button>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <h2>Student Names</h2>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaSearch/>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text">
             <FaSortDown/>
            </span>
          </div>
        </div>
        <div className="col-4">
          <h2>Assignment Names</h2>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaSearch/>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Assignments"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text">
              <FaSortDown/>
            </span>
          </div>
        </div>
      </div>
      <br />
      <button className="btn btn-light border ">
        <FaFilter/>Apply Filters
      </button>
      <br/>
      <br/>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
