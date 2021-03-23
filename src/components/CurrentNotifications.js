import NotificationCard from "./NotificationCard";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoRibbon } from "react-icons/io5";

const CurrentNotifications = () => {
  return (
    <div className="current-notifications">
      <NotificationCard
        group="A+"
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />
      <NotificationCard
        group="A+"
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />
      <NotificationCard
        group="A+"
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />

      <h4 style={{ alignSelf: "start" }}>Yesterday</h4>
      <NotificationCard
        group={<HiOutlineSpeakerphone color="#c70100" />}
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />
      <NotificationCard
        group={<IoRibbon color="#c70100" />}
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />
      <h4 style={{ alignSelf: "start" }}>2 days ago</h4>
      <NotificationCard
        group={<IoRibbon color="#c70100" />}
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />
    </div>
  );
};

export default CurrentNotifications;
