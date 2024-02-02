import Member from "components/Member";
import React from "react";

function Members() {
  return (
    <div className="col-6 p-3">
      <div className="p-3" style={{ backgroundColor: "#27293d" }}>
        <div className="ps-1">
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
