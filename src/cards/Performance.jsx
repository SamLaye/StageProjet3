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
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span className="text-secondary">total shipments</span>
            <h3 className="text-capitalize">performance</h3>
          </div>
          <CheckBox />
        </div>
        ______________________________
        <br />
        <PerfGraphe />
        hhh ______________________________
        <br />
        ______________________________
        <br />
        ______________________________
        <br />
        ______________________________
        <br />
        ______________________________
        <br />
        ______________________________
        <br />
      </div>
    </div>
  );
}

export default Performance;
