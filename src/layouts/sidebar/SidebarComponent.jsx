import React, { cloneElement } from "react";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";
import Image from "components/Image";
import _react_logo from "../../assets/images/react-logo.png";

const SidebarComponent = ({
  bgColor,
  activeLinkColor,
  activeLinkBgColor,
  colorOnHover,
  linkColor,
}) => {
  const ClonedSidebarItem = ({ linkItem }) =>
    cloneElement(<SidebarItem linkItem={linkItem} />, {
      activeLinkColor,
      activeLinkBgColor,
      colorOnHover,
      linkColor: "#fff",
    });
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : "#fff",
        height: "100%",
        padding: "25px 10px",
        marginLeft: "15px",
        marginTop: "15px",
        borderRadius: "10px",
        borderRight: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="">
        <Image src={_react_logo} imgWidth={30} className="me-2" />
        <span className="text-uppercase text-white">creative tim</span>
      </div>
      <hr className="text-white" />
      <ResourceDataMap
        resourceData={links}
        resourceItem={ClonedSidebarItem}
        resourceName="linkItem"
      />
    </div>
  );
};

export default SidebarComponent;
