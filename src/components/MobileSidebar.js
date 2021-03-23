import logo from "../assets/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FiBell, FiMap, FiSettings } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LoggedInUserWidget from "./LoggedInUserWidget";

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    let x = isOpen;
    setIsOpen(!x);
    console.log(isOpen);
  };
  return (
    <div
      className="mobile-sidebar"
      style={{ transform: isOpen ? "translate(0px)" : "" }}
    >
      <AiOutlineCloseCircle
        size={36}
        color="#c70100"
        style={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={toggleOpen}
      />
      <div className="logo">
        <img src={logo} alt="" />
        <p>Blood Donate</p>
      </div>
      <LoggedInUserWidget />
      <div className="nav-links">
        <a href="/home">
          <p>
            <AiOutlineHome /> Home
          </p>
        </a>
        <a href="/profile">
          <p>
            <IoPersonOutline /> Profile
          </p>
        </a>
        <a href="/notifications">
          <p>
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
    </div>
  );
};

export default MobileSidebar;
