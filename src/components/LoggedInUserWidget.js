import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import male from "../assets/man.svg";

const LoggedInUserWidget = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="/"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ImExit style={{ marginRight: "8px" }} color="#c70100" /> Log Out
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="loggedin-user-widget">
      <div>
        <h3>John Doe</h3>
        <h5>Top rated donor</h5>
      </div>
      <img src={male} alt="" />
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <a
          href="/"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          <BsThreeDotsVertical size={24} color="#c70100" />
        </a>
      </Dropdown>
    </div>
  );
};

export default LoggedInUserWidget;
