import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { NavItemProps } from "./components/navbar/NavItem";

const navItems: NavItemProps[] = [
  { text: "home", path: "./" },
  { text: "resume", path: "resume" },
];

function AppLayout() {
  return (
    <>
      <Navbar items={navItems}></Navbar>
      <Outlet />
    </>
  );
}

export default AppLayout;
