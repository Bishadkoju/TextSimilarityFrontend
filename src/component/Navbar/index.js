import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <i className="fa fa-heart">
          <div className="description">Open</div>
        </i>
        
        <i className="fa fa-file">
          <div className="description">Open</div>
        </i>
       
        <i className="fa fa-save">
          <div className="description">Save</div>
        </i>
       
        <i className="fa fa-file-import">
          <div className="description">Import</div>
        </i>
       
        <i className="fa fa-file-export">
          <div className="description">Export</div>
        </i>
        
        <i className="fa fa-info">
          <div className="description">Help</div>
        </i>

        <i className="fa fa-right">X
          <div className="description">Exit</div>
        </i>
        
      </div>
    </div>
  );
};

export default Navbar;
