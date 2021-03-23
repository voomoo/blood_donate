import NotificationCard from "./NotificationCard";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";

const HistoryNotifications = () => {
  return (
    <div className="history-notifications">
      <h4 style={{ alignSelf: "start" }}>History</h4>
      <NotificationCard
        group={<HiOutlineSpeakerphone color="#c70100" />}
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
        group={<IoIosTimer color="#c70100" />}
        details="Musa Clinic posted a blood request near you"
        time="1 min ago"
      />
    </div>
  );
};

export default HistoryNotifications;
