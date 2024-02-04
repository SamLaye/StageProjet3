import SpliTemplateScreen from "layouts";
import NavbarComponent from "layouts/navbar/NavbarComponent";
import SidebarComponent from "layouts/sidebar/SidebarComponent";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Outlet } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| Dashboard avec un sidebar
|--------------------------------------------------------------------------
|
| Ce layout contient le sidebar ainsi que le navbar de l'application
| Il est appeler dans routes/navigation/privte.js en tant que children de RequireAuth
|
*/
// #1e1e2e bleu de nuit foncée
// #27293d bleu de nuit claire
// #2184f7 bleu de nuit claire
const SplitShell = () => {
  return (
    <SpliTemplateScreen>
      <NavbarComponent bgColor={"transparent"} />
      <SidebarComponent
        bgColor={"#2184f7"}
        activeLinkColor={"#fff"}
        activeLinkBgColor="transparent"
        linkColor="black"
        colorOnHover={"#fff"}
      />
      <Outlet />
    </SpliTemplateScreen>
  );
};

export default SplitShell;
