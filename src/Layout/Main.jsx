import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav/SideNav.jsx";

function Main() {
  // console.log(profiles);

  return (
    <div>
      <div className="w-full bg-base-300 ">
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className=" w-2/5 bg-base-200 text-base-content min-h-screen ">
          <SideNav />
        </div>
      </div>
    </div>
  );
}

export default Main;
