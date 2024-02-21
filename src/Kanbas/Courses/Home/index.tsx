import Modules from "../Modules";
import {
  FaFile,
  FaFolderOpen,
  FaPlusCircle,
  FaChartBar,
  FaBullhorn,
  FaBell,
  FaTimes,
} from "react-icons/fa";
import { Bs1CircleFill } from "react-icons/bs";
function Home() {
  const links = [
    { label: "Import Existing Content", icon: <FaFile /> },
    { label: "Import From Commons", icon: <FaFolderOpen /> },
    { label: "Choose Home Page", icon: <FaPlusCircle /> },
    { label: "View Course Stream", icon: <FaChartBar /> },
    { label: "New Announcement", icon: <FaBullhorn /> },
    { label: "New Analytics", icon: <FaChartBar /> },
    { label: "View Course Notifications", icon: <FaBell /> },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <Modules />
        </div>

        <div className="col-4">
          <h2>Course Status</h2>
          <ul className="list-unstyled">
            {links.map((link, index) => (
              <li key={index} className="">
                <button className="m-1 btn btn-light border">
                  {link.icon}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <h3>To Do</h3>
          <hr />
          <div className="row">
            <div className="col-1"><Bs1CircleFill className="text-danger" /></div>
            <div className="col-8">
              <p className="wd-text-red">Grade A1 - ENV + HTML</p>
            </div>
            <div className="col-1">
              <FaTimes />
            </div>
          </div>
          <div className="row mx-3">
            <small>100 points . Sep 18 at 11:59pm</small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
