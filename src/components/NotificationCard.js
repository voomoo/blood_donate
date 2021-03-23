const NotificationCard = ({ group, details, time }) => {
  return (
    <div className="notification-card">
      <h2>{group}</h2>
      <h5>{details}</h5>
      <p>{time}</p>
    </div>
  );
};

export default NotificationCard;
