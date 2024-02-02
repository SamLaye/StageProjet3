import React from "react";
import NavbarItem from "components/NavbarItem";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 50,
        backgroundColor: bgColor ? bgColor : "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      <NavbarItem />
    </div>
  );
}

export default NavbarComponent;
