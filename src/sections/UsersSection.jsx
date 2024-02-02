import Members from "cards/Members";
import Tasks from "cards/Tasks";
import React from "react";

function UsersSection() {
  return (
    <div className="row mt-4 text-white">
      <Tasks />
      <Members />
    </div>
  );
}

export default UsersSection;
