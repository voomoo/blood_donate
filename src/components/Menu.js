import book from "../assets/book.png";
import donation from "../assets/donation.png";
import donor from "../assets/donor.png";
import mylist from "../assets/mylist.png";
import ambulance from "../assets/ambulance.png";
import firstaid from "../assets/first-aid-bag.png";
import heart from "../assets/heart-beat.png";

const Menu = () => {
  return (
    <div className="menu-request">
      <div className="menu">
        <h3>Menu</h3>
        <div>
          <div className="menu-item">
            <img src={book} alt="" />
            <h5>Book</h5>
          </div>
          <div className="menu-item">
            <img src={donation} alt="" />
            <h5>Donation</h5>
          </div>
          <div className="menu-item">
            <img src={donor} alt="" />
            <h5>Donors</h5>
          </div>
          <div className="menu-item">
            <img src={mylist} alt="" />
            <h5>My List</h5>
          </div>
        </div>
      </div>
      <div className="menu">
        <h3>Requests</h3>
        <div>
          <div className="menu-item">
            <img src={ambulance} alt="" />
            <h5>Book</h5>
          </div>
          <div className="menu-item">
            <img src={firstaid} alt="" />
            <h5>Donation</h5>
          </div>
          <div className="menu-item">
            <img src={heart} alt="" />
            <h5>Donors</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
