import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold">
        Tailwind CSS
      </h1>

      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/">Colors</Link>
        </li>
        <li>
          <Link to="/container">Spacing</Link>
        </li>
        <li>
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/sizing">Sizing</Link>
        </li>
        <li>
          <Link to="/position">Position</Link>
        </li>
        <li>
          <Link to="/background">Background</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
