import { Tabs } from "antd";

const RequestTab = () => {
  const { TabPane } = Tabs;
  const donations = [1, 2, 3];

  function callback(key) {
    console.log(key);
  }
  return (
    <div className="request-tab">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Donations" key="1">
          {donations.map((donation) => (
            <div
              key={donation}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "20px",
              }}
            >
              <div className="date">
                <p style={{ margin: "0px" }}>Dec</p>
                <h3 style={{ margin: "0px" }}>7</h3>
              </div>
              <div className="hospital">
                <h3 style={{ margin: "0px" }}>Saint Sabastian Hospital</h3>
                <p style={{ margin: "0px" }}>1 bag blood</p>
              </div>
              <p style={{ alignSelf: "flex-end", fontSize: "0.7rem" }}>
                6 days ago
              </p>
            </div>
          ))}
        </TabPane>
        <TabPane tab="Requests" key="2">
          Content of Request Tab
        </TabPane>
      </Tabs>
    </div>
  );
};

export default RequestTab;
