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
        <li>
          <Link to="/borders">Borders</Link>
        </li>
        <li>
          <Link to="/filters">Filters</Link>
        </li>
        <li>
          <Link to="/breakpoints">Breakpoints</Link>
        </li>
        <li>
          <Link to="/flexbox">Flexbox</Link>
        </li>
        <li>
          <Link to="/grid">Grids</Link>
        </li>
        <li>
          <Link to="/animations">Animations</Link>
        </li>
        <li>
          <Link to="/custom">Custom CSS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
