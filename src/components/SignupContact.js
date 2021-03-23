import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const SignupContact = () => {
  return (
    <div className="signup-contact">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Please provide your correct phone number. Your personal info will be
          kept safe.
        </h2>
      </div>
      <div className="right">
        <form>
          <h1>Contact Information</h1>
          <label htmlFor="phn">Phone No.</label>
          <input type="tel" id="phn" placeholder="018" />
          <label htmlFor="phn-alt">Alternative Phone No.</label>
          <input type="tel" id="phn-alt" placeholder="015" />
          <label htmlFor="social">Social(Optional)</label>
          <input type="url" id="social" placeholder="https://" />
          <Link to="/sign-up-blood-group">
            <input type="submit" value="Next" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupContact;
