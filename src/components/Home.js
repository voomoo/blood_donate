import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Campeign from "./Campeign";
import LoggedInUserWidget from "./LoggedInUserWidget";
import MapHome from "./MapHome";
import Menu from "./Menu";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    let x = isOpen;
    setIsOpen(!x);
    console.log(isOpen);
  };
  return (
    <div className="home">
      <Sidebar activelink={"home"} />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <CgMenuRound
        size={36}
        color="#c70100"
        className="menu-icon"
        onClick={toggleOpen}
      />
      <div className="home-content">
        <LoggedInUserWidget />
        <Campeign />
        <div className="menu-map">
          <Menu />
          <MapHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
