import React from "react";
import LogoText from "../SimpleCard/Logo/LogoText";
import logo from "../../assets/Lightbulb and arena logo design.png"
import LogoInfo from "../SimpleCard/Logo/LogoInfo";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start flex items-center ">
        <img src={logo} alt={logo} className="w-12.5 h-12.5"/>
        <div className="">
        <LogoText></LogoText>
         <LogoInfo></LogoInfo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-[15px] font-semibold ">
           <NavLink>Home </NavLink>
           <NavLink>All Contests </NavLink>
 
        </ul>
      </div>
      <Link to={"register"} className="navbar-end">
        button
      </Link>
    </div>
  );
};

export default Navbar;
