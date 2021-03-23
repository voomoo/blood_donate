import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupImageUpload = () => {
  const [imgU, setImgU] = useState("");
  const handle = () => {
    setImgU(document.getElementById("img").value);
  };
  console.log(imgU);

  return (
    <div className="signup-image-upload">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Please do not use a model or doll avatar. Please keep faith in
          yourself. You are beautiful too.
        </h2>
      </div>
      <div className="right">
        <h1>You are almost done</h1>
        <div>
          <label htmlFor="img"></label>
          <input id="img" type="file" accept="image/*" onInput={handle} />
        </div>
        <h4>{imgU}</h4>
        <Link to="/home">
          <input type="submit" value="Start Journey" />
        </Link>
      </div>
    </div>
  );
};

export default SignupImageUpload;
