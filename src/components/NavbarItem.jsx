import React from "react";
import Image from "./Image";
import { BiSearchAlt } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import _user from "../assets/images/_user.png";

function NavbarItem() {
  return (
    <div className="d-flex justify-content-between text-white w-100 ">
      <p className="text-uppercase fs-6 my-auto py-1" id="navbarTitle">
        Dashboard
      </p>
      <div className="d-flex me-2 me-md-4 my-auto">
        <BiSearchAlt className="fs-3 my-auto" />
        <TbActivityHeartbeat className="fs-3 mx-2 mx-md-4 my-auto" />
        <Image src={_user} imgWidth={40} />
      </div>
    </div>
  );
}

export default NavbarItem;
