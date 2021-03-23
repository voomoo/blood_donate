import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const SignupBloodGroup = () => {
  const [group, setGroup] = useState("");
  const groupHandler = (bgroup) => {
    setGroup(bgroup);
    console.log(group);
  };
  return (
    <div className="signup-blood-group">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Your blood group needs to be accurate. If you don't know about it
          please contact nearest clinic.
        </h2>
      </div>
      <div className="right">
        <h1>What is your blood group</h1>
        <div className="blood-groups">
          <div>
            <p
              className={group === "A+" ? "group-active" : ""}
              onClick={() => {
                groupHandler("A+");
              }}
            >
              A+
            </p>
            <p
              className={group === "B-" ? "group-active" : ""}
              onClick={() => {
                groupHandler("B-");
              }}
            >
              B-
            </p>
            <p
              className={group === "AB+" ? "group-active" : ""}
              onClick={() => {
                groupHandler("AB+");
              }}
            >
              AB+
            </p>
          </div>
          <div>
            <p
              className={group === "A-" ? "group-active" : ""}
              onClick={() => {
                groupHandler("A-");
              }}
            >
              A-
            </p>
            <p
              className={group === "O+" ? "group-active" : ""}
              onClick={() => {
                groupHandler("O+");
              }}
            >
              O+
            </p>
            <p
              className={group === "AB-" ? "group-active" : ""}
              onClick={() => {
                groupHandler("AB-");
              }}
            >
              AB-
            </p>
          </div>
          <div>
            <p
              className={group === "B+" ? "group-active" : ""}
              onClick={() => {
                groupHandler("B+");
              }}
            >
              B+
            </p>
            <p
              className={group === "O-" ? "group-active" : ""}
              onClick={() => {
                groupHandler("O-");
              }}
            >
              O-
            </p>
          </div>
        </div>
        <Link to="/sign-up-weight">
          <input type="submit" value="Next" />
        </Link>
      </div>
    </div>
  );
};

export default SignupBloodGroup;
