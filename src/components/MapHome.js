import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Slider, Menu, Dropdown, Button } from "antd";
import { useState } from "react";

const MapHome = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [btnName, setBtnName] = useState("A+");
  const [buttonColor1, setButtonColor1] = useState("#000");
  const [buttonColor2, setButtonColor2] = useState("#c70100");
  const [zoomVlaue, setZoomValue] = useState(13);
  const mapStyles = {
    height: "50vh",
    width: "100%",
    borderRadius: "15px",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const zoomHandle = (val) => {
    if (zoomVlaue < 20 && zoomVlaue > 0) {
      let x = zoomVlaue;
      x += val;
      setZoomValue(x);
    }
  };
  const menu = (
    <Menu>
      {bloodGroups.map((group) => (
        <Menu.Item
          key={group}
          onClick={() => {
            setBtnName(group);
          }}
        >
          {group}
        </Menu.Item>
      ))}
    </Menu>
  );

  const btnClickHandle1 = () => {
    if (buttonColor1 === "#000") {
      setButtonColor1("#c70100");
      setButtonColor2("#000");
    } else {
      setButtonColor1("#000");
      setButtonColor2("#c70100");
    }
  };

  const btnClickHandle2 = () => {
    if (buttonColor2 === "#000") {
      setButtonColor2("#c70100");
      setButtonColor1("#000");
    } else {
      setButtonColor2("#000");
      setButtonColor1("#c70100");
    }
  };
  return (
    <div className="map">
      <h3>Map</h3>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyCoDyMdwphe8QPdvJVs51JohmS08f7u8OM">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={zoomVlaue}
            center={defaultCenter}
          >
            <Marker position={{ lat: 41.3851, lng: 2.1734 }} />
            <div style={{ height: "100%", width: "100%" }}>
              <div
                style={{
                  height: "30px",
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="search"
                  style={{
                    height: "30px",
                    width: "60%",
                    position: "relative",
                    background: "white",
                    zIndex: "5",
                    marginTop: "5px",
                    borderRadius: "20px",
                  }}
                >
                  <FiSearch size={18} color="#c70100" />
                  <input type="text" placeholder="John Doe" />
                </div>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Button className="drop-down-group">
                    {btnName} <MdKeyboardArrowDown />
                  </Button>
                </Dropdown>
                <div className="button-group">
                  <Button
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "0px",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "0px",
                      height: "30px",
                      color: buttonColor1,
                      border: "none",
                      borderRight: "1px solid #ccc",
                    }}
                    onClick={btnClickHandle1}
                  >
                    Hospital
                  </Button>
                  <Button
                    style={{
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "15px",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "15px",
                      height: "30px",
                      color: buttonColor2,
                      border: "none",
                    }}
                    onClick={btnClickHandle2}
                  >
                    Donor
                  </Button>
                </div>
              </div>
              <div className="zoom-slider">
                <h3
                  style={{ fontWeight: "bold", color: "#c70100" }}
                  onClick={() => zoomHandle(1)}
                >
                  +
                </h3>
                <Slider
                  vertical
                  defaultValue={zoomVlaue}
                  value={zoomVlaue}
                  style={{ height: "120px" }}
                  max={20}
                  min={1}
                  onChange={(value) => setZoomValue(value)}
                />
                <h3
                  style={{ fontWeight: "bold", color: "#c70100" }}
                  onClick={() => zoomHandle(-1)}
                >
                  -
                </h3>
              </div>
            </div>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapHome;
