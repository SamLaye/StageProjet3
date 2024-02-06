import React from "react";

function CheckBox() {
  return (
    <div className="col-12 col-md-6 text-md-end">
      <div
        className="btn-group d-block"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Radio 1
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Radio 2
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Radio 3
        </label>
      </div>
    </div>
  );
}

export default CheckBox;
