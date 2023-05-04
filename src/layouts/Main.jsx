import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* Render the header and navigation bar components */}
      <div className="bg-black h-36 text-white">
        <Header />
        <NavigationBar />
      </div>
      {/* Render the child components, which will be passed in via the router's outlet */}
      <Outlet />
      {/* Render the footer component */}
      <Footer />
    </div>
  );
};

export default Main;
