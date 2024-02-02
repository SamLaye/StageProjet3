import { ACCEUIL_PATH, ICONS_PATH, MAP_PATH, NOTIFICATIONS_PATH, TABLE_LIST_PATH, USER_PROFIL_PATH } from "./navigationPaths";
import { HiHome } from "react-icons/hi";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: HiHome, label: "DASHBORD" },
    { path: ICONS_PATH, icon: HiHome, label: "ICONS" },
    { path: MAP_PATH, icon: HiHome, label: "MAP" },
    { path: NOTIFICATIONS_PATH, icon: HiHome, label: "NOTIFICATIONS" },
    { path: USER_PROFIL_PATH, icon: HiHome, label: "USER PROFIL" },
    { path: TABLE_LIST_PATH, icon: HiHome, label: "TABLE LIST" },
]
