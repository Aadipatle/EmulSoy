import React from "react";
import "./History.css";
function History() {
  return (
    <>
      <h2 className="section-title">
        Our <span style={{ color: "#30E830" }}>History</span>{" "}
      </h2>
      <div className="history section">
        <div className="history-box container">
          <p className="info-text"> Year 2020 Started Distribution of Pharmaceutical Products</p>
        </div>
        <div className="history-box container">
          <p className="info-text">  Year 2021 Into Vegetable Exports  Business</p>
        </div>
        <div className="history-box container">
          <p className="info-text"> Year 2022 Establishment of Soya Lecithin  Manufacturing setup</p>
        </div>
        <div className="history-box container">
          <p className="info-text"> Year 2023 Shifted to New Office  at Nagpur City</p>
        </div>
        <div className="history-box container">
          <p className="info-text"> Year 2025 Launching our brand “EmulSoy”</p>
        </div>
      </div>
    </>
  );
}

export default History;
