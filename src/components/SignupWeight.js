import logo from "../assets/logo.svg";
import weightup from "../assets/weight_up.png";
import weightdown from "../assets/weight_down.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupWeight = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="signup-weight">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Note: You cannot donate blood if you are underweight. Minimum weight
          required for donations is 50 kg.
        </h2>
      </div>
      <div className="right">
        <h1>How much do you weight</h1>
        <div>
          <img
            src={weightdown}
            alt=""
            style={{
              border: isActive === "weightdown" ? "2px solid #c70100" : "none",
            }}
            onClick={() => {
              setIsActive("weightdown");
            }}
          />
          <img
            src={weightup}
            alt=""
            style={{
              border: isActive === "weightup" ? "2px solid #c70100" : "none",
            }}
            onClick={() => {
              setIsActive("weightup");
            }}
          />
        </div>
        <Link to="/sign-up-gender">
          <input type="submit" value="Next" />
        </Link>
      </div>
    </div>
  );
};

export default SignupWeight;
