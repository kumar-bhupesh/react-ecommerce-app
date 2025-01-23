import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-3">404</h1>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to={"/"} className="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NoPage;
