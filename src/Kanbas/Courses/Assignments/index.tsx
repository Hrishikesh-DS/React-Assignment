import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaEdit,
  FaPlus,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "./modal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment, setAssignments } from "./reducer";
import { useEffect } from "react";
import * as client from "./client";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();

  const navigate = useNavigate();


  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
    console.log(assignmentList);

    useEffect(() => {
      client.findAssignmentsForCourse(courseId)
          .then((assignments) => {
              dispatch(setAssignments(assignments));
          });
  }, [courseId, dispatch]);
  const handleDeleteAssignment = (assignmentId: string) => {
      client.deleteAssignment(assignmentId).then(() => {
          dispatch(deleteAssignment(assignmentId));
      });
  }
  const nav = () => {
    console.log("Click registered "+assignment._id);
    navigate(
      `/Kanbas/Courses/${courseId}/Assignments/newAssignment}`
    )
  };
  const [isOpen, setIsOpen] = useState(false);

  const [selectedAssignment, setSelectedAssignment] = useState("");

  const openModal = (selectedAssignment: string) => {
    setSelectedAssignment(selectedAssignment);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <button className="btn btn-danger border m-2" onClick={nav}>
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
                      onClick={() => dispatch(setAssignment(assignment))}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <button
                    className="btn btn-danger m-1 p-1"
                    onClick={() => openModal(assignment._id)}
                  >
                    Delete
                  </button>
                  <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    onConfirm={() => {
                      handleDeleteAssignment(selectedAssignment);
                      closeModal();
                    }}
                  >
                    <h2>DELETE</h2>
                    <p>Are you sure you want to remove the assignment?</p>
                  </Modal>
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


