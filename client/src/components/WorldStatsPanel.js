import "./WorldStatsPanel.css";

const WorldStatsPanel = function () {
  return (
    <div className="rightContainer">
      <h1
        style={{
          fontSize: "2rem",
          textShadow: "0.1rem 0.1rem #000",
          color: "white",
          textAlign: "center",
        }}
      >
        BUSINESS LEADERS AROUND THE GLOBE LOVE PERSONAKART
      </h1>
      <img src="mapp-02-02.png" width="100%"></img>
      <h1 style={{ fontSize: "10rem", color: "#fff" }}>
        <a
          href=""
          data-period={2000}
          style={{ color: "#fff" }}
          data-type='[ "Canada", "United States", "Argentina", "Brazil","Ireland","United Kingdom","China","India","Indonesia","Australia","Singapore" ]'
        ></a>
      </h1>
    </div>
  );
};

export default WorldStatsPanel;
