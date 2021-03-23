import Sidebar from "./Sidebar";
import CurrentNotifications from "./CurrentNotifications";
import HistoryNotifications from "./HistoryNotifications";
import LoggedinUserWidget from "./LoggedInUserWidget";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Divider } from "antd";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { useHistory } from "react-router-dom";

const Notifications = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    let x = isOpen;
    setIsOpen(!x);
    console.log(isOpen);
  };
  return (
    <div className="notifications">
      <Sidebar activelink={"notifications"} />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <CgMenuRound
        size={36}
        color="#c70100"
        className="menu-icon"
        onClick={toggleOpen}
      />
      <div className="notification-right">
        <LoggedinUserWidget />
        <h2>
          <IoMdArrowRoundBack
            color="#c70100"
            onClick={() => {
              history.goBack();
            }}
          />
          {"     "}Notifications
        </h2>
        <div className="notification-container">
          <CurrentNotifications />
          <Divider type="vertical" style={{ height: "100%" }} />
          <HistoryNotifications />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
