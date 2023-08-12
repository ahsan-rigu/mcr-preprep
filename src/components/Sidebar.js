import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/" exact activeClassName="active">
        DASHBOARD
      </NavLink>
      <NavLink to="/departments" activeClassName="active">
        DEPARTMENTS
      </NavLink>
      <NavLink to="/products" activeClassName="active">
        PRODUCTS
      </NavLink>
    </aside>
  );
};

export default Sidebar;
