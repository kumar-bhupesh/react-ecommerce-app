import React from "react";
import "./loader.css";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#007BFF"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
