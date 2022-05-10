import React from "react";
import fetch from "cross-fetch";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://www.ais.th/vaccinesforthais/images/vaccine28-04-2022.png"
        style={{ width: 400 }}
      />
      <Link to="/otp"
        style={{
          marginTop: 50,
          cursor: "pointer",
          textDecoration: "none",
          fontSize: "25px",
          padding: "15px 45px",
          color: "#000",
          backgroundColor: "#b1d334",
          borderRadius: "50px",
        }}
      >
        ลงทะเบียนจองคิว - Register
      </Link>
    </div>
  );
}
