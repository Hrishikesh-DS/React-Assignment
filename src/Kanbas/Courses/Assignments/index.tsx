import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaEdit,
  FaPlus,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="form-control">
      <div className="row">
        <div className="col-4">
          <input
            className="form-control m-2"
            placeholder="Search for Assignments"
          />
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn btn-light border m-2">
            <FaPlus className="m-1" />
            Group
          </button>
          <button className="btn btn-danger border m-2">
            <FaPlus className="m-1" />
            Assignment
          </button>
          <button className="btn btn-light border m-2">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="m-2" /> ASSIGNMENTS
            <span className="float-end">
              <button className="btn btn-rounded border px-1 btn-light">
                40% of Total
              </button>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaEdit className="text-success" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
