import React, { useContext } from "react";
import LogoText from "../SimpleCard/Logo/LogoText";
import logo from "../../assets/Lightbulb and arena logo design.png";
import LogoInfo from "../SimpleCard/Logo/LogoInfo";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../useContex/FormContext/AuthContex";
import { BeatLoader } from "react-spinners";
const Navbar = () => {
  let { userInfo,loading,handleSignout } = useContext(AuthContext);

  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start flex items-center ">
        <img src={logo} alt={logo} className="w-12.5 h-12.5" />
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
      <div className="navbar-end">
        <div className="relative">
         {
          loading ? 
          <BeatLoader size={10} color="#F06941"></BeatLoader>
           :
          userInfo ? (
            <div className="dropdown dropdown-center">
              <div tabIndex={0}>
                <img
                  src={userInfo.photoURL || "https://i.ibb.co/2d0YtLx/user.png"}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer "
                />
              </div>

              <div
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 mr-23 mt-3.5 shadow-sm"
              >
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-semibold">
                    {userInfo?.displayName || "User"}
                  </p>
                </div>
                 <ul className="py-2 text-sm">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                    onClick={()=>handleSignout()}
                      className="w-full  text-white font-semibold  text-center px-4 py-2 hover:bg-gray-100 bg-linear-to-r from-[#F07048] via-purple-500 to-[#F07048]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Login
            </Link>
          )
         }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
