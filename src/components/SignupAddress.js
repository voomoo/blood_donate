import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const SignupAddress = () => {
  return (
    <div className="signup-contact">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>Please provide correct address information.</h2>
      </div>
      <div className="right">
        <form>
          <h1>Where do you live</h1>
          <label htmlFor="address">Street Address</label>
          <input type="text" id="address" placeholder="123/4, Saint Road" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Dhaka" />
          <label htmlFor="postal">Postal</label>
          <input type="number" id="postal" placeholder="1234" />
          <Link to="/sign-up-age">
            <input type="submit" value="Next" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupAddress;
