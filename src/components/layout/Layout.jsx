import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 spaced-top-fixed">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
