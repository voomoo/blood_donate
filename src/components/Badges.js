import cross from "../assets/cross.png";
import book from "../assets/book.png";
import cardiogram from "../assets/cardiogram.png";
import donation from "../assets/donation.png";
import donor from "../assets/donor.png";
import healthcare from "../assets/healthcare.png";

const Badges = () => {
  const badges = [
    {
      img: cross,
      title: "lifesaver",
    },
    {
      img: book,
      title: "lifesaver",
    },
    {
      img: cardiogram,
      title: "lifesaver",
    },
    {
      img: donation,
      title: "lifesaver",
    },
    {
      img: donor,
      title: "lifesaver",
    },
    {
      img: healthcare,
      title: "lifesaver",
    },
    {
      img: cross,
      title: "lifesaver",
    },
    {
      img: book,
      title: "lifesaver",
    },
    {
      img: cardiogram,
      title: "lifesaver",
    },
    {
      img: donation,
      title: "lifesaver",
    },
    {
      img: donor,
      title: "lifesaver",
    },
    {
      img: healthcare,
      title: "lifesaver",
    },
  ];
  return (
    <div className="badges-container">
      <h3>Badges</h3>
      <div>
        {badges.map((badge, index) => (
          <div
            key={index}
            style={{
              width: "48px",
              height: "48px",
              textAlign: "center",
              margin: "15px 20px",
            }}
          >
            <img src={badge.img} alt="" style={{ width: "80%" }} />
            <h4>{badge.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
