import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <br />
        <br />
        <br />
        <br />

      <div className="navbar_container">
        <i className="fa fa-file">
        <div className="description">Open</div>
        </i>
        <br />
        <i className="fa fa-save"> 
        <div className="description">Save</div>
        </i>
        <br />
        <i className="fa fa-file-import">
        <div className="description">Import</div>
        </i>
        <br />
        <i class="fa fa-file-export">
        <div className="description">Export</div>
        <div className="sub_options">
          <ul>
            <li>CSV</li>
            <li>PDF</li>
          </ul>
        </div>
        </i>
        <br />
        <i className="fa fa-info">
        <div className="description">Help</div>
        </i>
        <br />
        <i className="fa fa-right"><exit>X</exit>
        <div className="description">Exit</div>
        </i>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Navbar;
