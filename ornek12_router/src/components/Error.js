import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <Link to="/" className="btn btn-warning ">
        Home
      </Link>
    </div>
  );
};

export default Error;
