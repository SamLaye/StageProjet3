import React from "react";
import Image from "./Image";
import { BiSearchAlt } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import _user from "../assets/images/_user.png";

function NavbarItem() {
  return (
    <div className="d-flex justify-content-between text-white w-100 ">
      <p className="text-uppercase ms-3 fs-6 my-auto py-1">Dashboard</p>
      <div className="d-flex me-4 my-auto">
        <BiSearchAlt className="fs-3 my-auto" />
        <TbActivityHeartbeat className="fs-3 mx-4 my-auto" />
        <Image src={_user} imgWidth={40} />
      </div>
    </div>
  );
}

export default NavbarItem;
