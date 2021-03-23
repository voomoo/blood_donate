import Slider from "infinite-react-carousel";
import { Switch } from "antd";
import { useState } from "react";

const Campeign = () => {
  const bannercount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let slidesPerRow = 3;
  if (window.screen.width < 1024) {
    slidesPerRow = 1;
  } else {
    slidesPerRow = 3;
  }
  const settings = {
    rows: 1,
    slidesPerRow: slidesPerRow,
    centerMode: true,
    centerPadding: 20,
  };

  const [color, setColor] = useState("#c7c9c6");
  const changeHandle = () => {
    if (color === "#c7c9c6") {
      setColor("#c70100");
    } else {
      setColor("#c7c9c6");
    }
  };

  return (
    <div className="campaign">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Campaign</h3>
        <h4 style={{ marginLeft: "30px", marginRight: "10px" }}>Available</h4>
        <Switch
          size="small"
          style={{ background: color }}
          onChange={changeHandle}
        />
      </div>
      <Slider {...settings} className="slider">
        {bannercount.map((ban) => (
          <div className="banner" key={ban}>
            <h5>Blood Donation Camparign 2021</h5>
            <h5>Held on today</h5>
            <div>
              <p>by Admin</p>
              <p>1 minute ago</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Campeign;
