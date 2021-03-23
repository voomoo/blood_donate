import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Signin = () => {
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
    <div className="signin">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
      </div>
      <div className="right">
        <form>
          <h1>Sign In</h1>
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
          <input type="submit" value="Login" />
          <div className="other-options">
            <p
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                marginBottom: "5px",
              }}
            >
              forgot password
            </p>
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up">
                <span
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "#565656",
                    textDecoration: "underline",
                  }}
                >
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
