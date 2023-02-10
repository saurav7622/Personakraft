import "./LoginPanel.css";

const LoginPanel = function () {
  return (
    <div className="container">
      <img
        src="logopp-01.png"
        className="logo-img"
        style={{
          position: "relative",
          marginTop: "10%",
          width: "70%",
          height: "10%",
          marginRight: "40%",
        }}
      />
      <button
        type="submit"
        style={{
          color: "#000",
          backgroundColor: "#fff",
          position: "absolute",
          marginTop: "95%",
          marginRight: "40%",
          width: "65%",
          height: "12%",
          boxShadow: "0.5rem 0.5rem #3A3838",
          borderStyle: "solid",
          borderRadius: "1rem",
        }}
      >
        {" "}
        <a
          href="https://app.personakart.com/auth/google"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "#07A9F4",
          }}
        >
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            style={{
              top: "-20%",
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
          <span
            style={{
              position: "relative",
              fontSize: "130%",
              marginLeft: "4%",
              top: "-15%",
            }}
          >
            Log in Google
          </span>
        </a>
      </button>
      <a
        href="https://personakart.com"
        style={{
          position: "absolute",
          marginTop: "113%",
          marginRight: "38%",
          fontSize: "118%",
          color: "#298CFF",
          textDecoration: "none",
        }}
      >
        Or go back to home page
      </a>
    </div>
  );
};

export default LoginPanel;
