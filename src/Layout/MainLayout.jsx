import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
