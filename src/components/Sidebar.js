import logo from "../assets/logo.svg";
import poster from "../assets/poster.png";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FiBell, FiMap, FiSettings } from "react-icons/fi";

const Sidebar = ({ activelink }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <p>Blood Donate</p>
      </div>
      <div className="nav-links">
        <a href="/home">
          <p className={activelink === "home" ? "nav-active" : ""}>
            <AiOutlineHome /> Home
          </p>
        </a>
        <a href="/profile">
          <p className={activelink === "profile" ? "nav-active" : ""}>
            <IoPersonOutline /> Profile
          </p>
        </a>
        <a href="/notifications">
          <p className={activelink === "notifications" ? "nav-active" : ""}>
            <FiBell /> Notification
          </p>
        </a>
        <a href="/home">
          <p>
            <FiMap /> Donors
          </p>
        </a>
        <a href="/home">
          <p>
            <FiSettings /> Customize
          </p>
        </a>
      </div>
      <img src={poster} alt="" />
    </div>
  );
};

export default Sidebar;
