import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule, deleteModules } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    deleteModules(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await updateModule(module);
    dispatch(updateModule(module));
  };


  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      <ul className="list-group wd-modules">
        <li className="list-group-item wd-header-style">
          <div className="row p-0">
            <div className="col">
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                } />
            </div>
            <div className="col-2">
              <button className="btn btn-success p-2 wd-style"
                onClick={handleAddModule}>
                Add</button>
            </div>
          </div>
          <div className="row p-0">
            <div className="col">
              <textarea value={module.description} className="p-1"
                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary p-2 wd-style"
                onClick={handleUpdateModule}>
                Update
              </button>

            </div>
          </div>
        </li>


        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button className="btn btn-primary wd-style px-1 me-2"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>

                  <button className="btn btn-danger wd-style px-1 me-2"
                    onClick={() =>  handleDeleteModule(module._id)}>
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: { name: string; }, index: React.Key | null | undefined) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

      </ul>

    </>
  );
}
export default ModuleList;