import CheckBox from "components/CheckBox";
import PerfGraphe from "components/PerfGraphe";
import React from "react";

function Performance() {
  return (
    <div className="row p-3">
      <div
        className="col-12 rounded p-3 rounded"
        style={{
          backgroundColor: "#27293d",
          boxShadow: "2px 2px 30px #1c1c25",
        }}
      >
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 bg-danger d-flex flex-column">
            <span className="text-secondary">total shipments</span>
            <h3 className="text-capitalize">performance</h3>
          </div>
          <CheckBox />
        </div>
        ___ ___ ____ ___ ___ _____ ______ ___
        <br />
        <PerfGraphe />
        hhh _ ___ ____ ____ __ ___ ___ ____ __ ____
        <br />
        ______ _______ _____ ______ ____ __
        <br />
        _____ ______ ____ ______ ____ ____ _
        <br />
        ______ ______ ______ ______ ____ __
        <br />
        __ __________ ______ _______ _____
        <br />
        ___ _____ _____ ___ ______ _____ ___
        <br />
      </div>
    </div>
  );
}

export default Performance;
