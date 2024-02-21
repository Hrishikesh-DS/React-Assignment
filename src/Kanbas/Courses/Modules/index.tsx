import ModuleList from "./List";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";
function Modules() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-light border m-1 p-1">Collapse All</button>
        <button className="btn btn-light border m-1 p-1">View Progress</button>
        <button className="btn btn-light border m-1 p-1">
          <FaCheckCircle className="text-success" /> Publish all{" "}
          <i className="fa fa-sort-desc"></i>
        </button>
        <button className="btn border m-1 btn-danger text-white p-1">
          <FaPlus /> Module
        </button>
        <button className="btn btn-light border m-1 px-2">
          <FaEllipsisV />
        </button>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
