import Member from "components/Member";
import React from "react";

function Members() {
  return (
    <div className="col-12 col-md-6 p-3">
      <div
        className="p-3 rounded"
        style={{
          backgroundColor: "#27293d",
          boxShadow: "2px 2px 30px #1c1c25",
        }}
      >
        <div className="ps-1 overflow-auto">
          <h3 className="text-capitalize">Simple Table</h3>
          <hr />
          <table className="table text-white opacity-50">
            <thead>
              <tr>
                <th scope="col" className="text-uppercase">
                  Name
                </th>
                <th scope="col" className="text-uppercase">
                  Country
                </th>
                <th scope="col" className="text-uppercase">
                  city
                </th>
                <th scope="col" className="text-uppercase">
                  salary
                </th>
              </tr>
            </thead>
            <Member />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Members;
