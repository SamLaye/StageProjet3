import React from "react";
import { CiSettings } from "react-icons/ci";
import { TiPencil } from "react-icons/ti";

function Tasks() {
  const tasks = [
    {
      label: "Update the Documentation",
      desc: "Update the Documentation",
    },
    {
      label: "GDPR Compliance",
      desc: "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
    },
    {
      label: "Solve the issues",
      desc: "Fifty percent of all respondents said they would be more likely to shop at a company",
    },
    {
      label: "Release v2.0.0",
      desc: "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM",
    },
    {
      label: "Export the processed files",
      desc: "The report also shows that consumers will not easily forgive a company once a breach exposing their",
    },
  ];
  console.log(tasks);
  return (
    <div className="col-6 p-3">
      <div className="p-3" style={{ backgroundColor: "#27293d" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h3 className="text-capitalize me-3">tasks(5)</h3>
            <span className="text-secondary my-auto">total shipments</span>
          </div>
          <span className="my-auto">
            <CiSettings />
          </span>
        </div>
        <hr />
        <div>
          {tasks.map((task) => (
            <div key={Math.random()}>
              <div className="row justify-content-between">
                <div className="form-check col-10 my-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label  d-flex flex-column"
                    //   style={{ fontSize: "15px", margin: "auto 0" }}
                    htmlFor="flexCheckDefault"
                  >
                    <span>{task.label}</span>
                    <span className="opacity-50">{task.desc}</span>
                  </label>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                  <TiPencil className="fs-3 opacity-50" />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
