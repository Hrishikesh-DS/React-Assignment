import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-no-border text-success">
          <FaCheckCircle className="mx-2" />
          Published
        </button>
        <button className="btn btn-light border m-2">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment?.title} className="form-control mb-2" />

      <textarea className="form-control">
        This is the assignment description
      </textarea>
      <br />
      <div className="row">
        <div className="col-4">
          <label
            className="form-label d-flex justify-content-end mt-2"
            htmlFor="points"
          >
            Points
          </label>
        </div>
        <div className="col-6">
          <input id="points" value="100" className="form-control" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <label className="form-label d-flex justify-content-end mt-2">
            Assignment Group
          </label>
        </div>
        <div className="col-6">
          <select className="form-select">
            <option>ASSIGNMENT</option>
            <option>QUIZ</option>
            <option>EXAM</option>
            <option>PROJECT</option>
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <label className="form-label d-flex justify-content-end mt-2">
            Display Grade as
          </label>
        </div>
        <div className="col-6">
          <select className="form-select">
            <option>Percentage</option>
          </select>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <input type="checkbox" />
          <label className="form-label p-1 mr-10">
            {" "}
            Do not count this assignment towards the final grade
          </label>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-4">
          <label className="form-label d-flex justify-content-end mt-2">
            Assign
          </label>{" "}
          <br />
        </div>
        <div className="col-6 border">
          <label className="form-label">Assign to</label> <br />
          <div className="border p-1">
            <button className="btn btn-light border ">
              Everyone <i className="fa fa-times"></i>
            </button>
          </div>
          <br />
          <label className="form-label">Due</label>
          <br />
          <input className="form-control" type="date" value="21-01-2024" />
          <br />
          <div className="row">
            <div className="col">
              <label className="form-label">Available from</label>
              <br />
              <input className="form-control" type="date" value="10-01-2024" />
            </div>
            <div className="col">
              <label className="form-label">Until</label>
              <br />
              <input className="form-control" type="date" value="21-01-2024" />
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="row">
        <div className="col">
          <input type="checkbox" />
          <label className="form-label m-2">
            Notify users that this content has changed
          </label>
        </div>
        <div className="col">
          <div className=" d-flex justify-content-end">
            <button
              onClick={handleSave}
              className="btn btn-success m-2 float-end"
            >
              Save
            </button>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end m-2"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default AssignmentEditor;
