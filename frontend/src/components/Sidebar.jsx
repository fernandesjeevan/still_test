import ReactLogo from "../assets/react.svg";
import SidebarCollapseLogo from "../assets/sidebar-collapse.svg";
import SidebarCollapseUp from "../assets/collapse-up.svg";
import Certifications from "../assets/certifications.svg";
import SkillsLogo from "../assets/skills.svg";
import TalentSearch from "../assets/talentsearch.svg";
import Dashboard from "../assets/dashboard.svg";
import { NavLink } from "react-router-dom";
function  Sidebar() {
  return (
    <div className="w-60 border-2 border-gray-300 flex flex-col">
      <div className="h-10 flex items-center justify-around my-3">
        <img src={ReactLogo} alt="React Logo" />
        <h2 className="text-xl font-semibold text-gray-700">Still Test</h2>
        <img
          className="h-8"
          src={SidebarCollapseLogo}
          alt="Sidebar Collpase Logo"
        />
      </div>
      <div className="grid grid-cols-1 m-4">
        <div className="flex justify-between ">
          <h1 className="text-l font-semibold text-gray-700">Navigate </h1>
          <img className="h-6" src={SidebarCollapseUp} alt="collapse up" />
        </div>
        <div className="flex flex-col">
          <NavLink
              to="/"
              className="flex items-center my-2 py-2 hover:bg-gray-100 rounded"
            >
              <div className="flex my-2 py-2">
            <img className="h-6 mx-2" src={Dashboard} alt="collapse up" />
            <h1 className="text-s font-semibold text-gray-700">Dashboard</h1>
          </div>
            </NavLink>
          
          <div className="flex my-2 py-2">
            <img className="h-6 mx-2" src={Certifications} alt="collapse up" />
            <h1 className="text-s font-semibold text-gray-700">
              Certifications
            </h1>
          </div>
          <div className="flex my-2 py-2">
            <NavLink
              to="/skill"
              className="flex items-center my-2 py-2 hover:bg-gray-100 rounded"
            >
              <img className="h-6 mx-2" src={SkillsLogo} alt="collapse up" />
            <h1 className="text-s font-semibold text-gray-700">Skills </h1>
            </NavLink>
            
          </div>
          <div className="flex my-2 py-2">
            <img className="h-6 mx-2" src={TalentSearch} alt="collapse up" />
            <h1 className="text-s font-semibold text-gray-700">
              Talent Search
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
