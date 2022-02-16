import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <i className="fa fa-bars"></i>
        <br />
        <i className="fa fa-file"></i>
        <br />
        <i className="fa fa-save"></i>
        <br />
        <i className="fa fa-file-import"></i>
        <br />
        <i className="export"></i>
        <br />
        <i className="help"></i>
        <br />
        <i className="exit"></i>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Navbar;
