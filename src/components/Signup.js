import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [eyeColor, setEyeColor] = useState("#c70100");

  const handlePasswordVisibility = () => {
    if (passwordVisible === "password") {
      setPasswordVisible("text");
      setEyeColor("#FFF");
    } else {
      setPasswordVisible("password");
      setEyeColor("#c70100");
    }
  };
  return (
    <div className="signup">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Provide your real name for identity. Your name will be used in search
        </h2>
      </div>
      <div className="right">
        <form>
          <h1>Let us know about you</h1>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="John Doe" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="johndoe@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type={passwordVisible} id="password" placeholder="********" />
          <div className="password-view">
            <AiFillEye
              size={22}
              color={eyeColor}
              style={{ cursor: "pointer" }}
              onClick={handlePasswordVisibility}
            />
          </div>
          <Link to="/sign-up-contact">
            <input type="submit" value="Next" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
