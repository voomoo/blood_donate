import logo from "../assets/logo.svg";
import male from "../assets/male.png";
import female from "../assets/female.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupGender = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="signup-weight">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Difining your gender will help up bring new feature for mother's
          health care.
        </h2>
      </div>
      <div className="right">
        <h1>What is your gender</h1>
        <div>
          <img
            src={male}
            alt=""
            style={{
              border: isActive === "male" ? "2px solid #c70100" : "none",
            }}
            onClick={() => {
              setIsActive("male");
            }}
          />
          <img
            src={female}
            alt=""
            style={{
              border: isActive === "female" ? "2px solid #c70100" : "none",
            }}
            onClick={() => {
              setIsActive("female");
            }}
          />
        </div>
        <Link to="/sign-up-address">
          <input type="submit" value="Next" />
        </Link>
      </div>
    </div>
  );
};

export default SignupGender;
