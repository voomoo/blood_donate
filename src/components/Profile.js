import Sidebar from "./Sidebar";
import RequestTab from "./RequestTab";
import LoggedInUserWidget from "./LoggedInUserWidget";
import ProfileInfo from "./ProfileInfo";
import Badges from "./Badges";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    let x = isOpen;
    setIsOpen(!x);
    console.log(isOpen);
  };
  return (
    <div className="profile">
      <Sidebar activelink={"profile"} />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <CgMenuRound
        size={36}
        color="#c70100"
        className="menu-icon"
        onClick={toggleOpen}
      />
      <div className="contents">
        <LoggedInUserWidget />
        <div className="content-container">
          <ProfileInfo />
          <div className="profile-right">
            <RequestTab />
            <Badges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
