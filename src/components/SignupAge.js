import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Ruler from "rc-ruler-slider/dist";
import "rc-ruler-slider/dist/index.css";

const SignupAge = () => {
  const handleDragEndYears = (value) => {
    console.log(value + 17);
  };

  const handleRenderValueYears = (value) => {
    return `${value} years`;
  };
  const handleDragEndMonths = (value) => {
    console.log(value);
  };

  const handleRenderValueMonths = (value) => {
    return `${value} months`;
  };
  const handleDragEndDays = (value) => {
    console.log(value);
  };

  const handleRenderValueDays = (value) => {
    return `${value} days`;
  };
  return (
    <div className="signup-age">
      <div className="left">
        <img src={logo} alt="" />
        <h1>
          <span style={{ color: "#c70100" }}>Blood</span> Donation
        </h1>
        <h2>
          Correct age give you best experience with the community, so don't hide
          it.
        </h2>
      </div>
      <div className="right">
        <h1>What is your age</h1>

        <div>
          <Ruler
            startValue={8}
            // onDrag={handleDragChange}
            onDragEnd={handleDragEndYears}
            // onDragStart={handleDragStart}
            renderValue={handleRenderValueYears}
            start={17}
            end={70}
            step={1}
          />
        </div>
        <div>
          <Ruler
            startValue={6}
            // onDrag={handleDragChange}
            onDragEnd={handleDragEndMonths}
            // onDragStart={handleDragStart}
            renderValue={handleRenderValueMonths}
            start={0}
            end={12}
            step={1}
          />
        </div>
        <div>
          <Ruler
            startValue={15}
            // onDrag={handleDragChange}
            onDragEnd={handleDragEndDays}
            // onDragStart={handleDragStart}
            renderValue={handleRenderValueDays}
            start={0}
            end={30}
            step={1}
          />
        </div>

        <Link to="/sign-up-image-upload">
          <input type="submit" value="Next" />
        </Link>
      </div>
    </div>
  );
};

export default SignupAge;
