import { Divider, Progress } from "antd";
import profile_picture from "../assets/profile_picture.png";
import { BiShareAlt } from "react-icons/bi";
import cardiogram from "../assets/cardiogram.png";
import cross from "../assets/cross.png";
import healthcare from "../assets/healthcare.png";

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <img src={profile_picture} alt="" />
      <h1 className="user-blood">A+</h1>
      <div>
        <h4>Info</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga error
          quod ipsam optio aperiam consectetur pariatur ullam eligendi, magni
        </p>
      </div>

      <div className="badges">
        <h4>
          Badges <BiShareAlt color="#c70100" />
        </h4>
        <div>
          <div className="badge-item">
            <img src={cardiogram} alt="" />
            <h5>Life Saver</h5>
          </div>
          <div className="badge-item">
            <img src={cross} alt="" />
            <h5>Life Saver</h5>
          </div>
          <div className="badge-item">
            <img src={healthcare} alt="" />
            <h5>Life Saver</h5>
          </div>
        </div>
      </div>
      <Divider />
      <Progress percent={66} showInfo={false} />
      <p>3 days until you can donate again</p>
    </div>
  );
};

export default ProfileInfo;
