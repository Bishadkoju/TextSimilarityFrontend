import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faFile,
  faSave,
  faFileImport,
  faFileExport,
  faInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <i>
          <FontAwesomeIcon icon={faHeart} />
          <div className="description">Open</div>
        </i>

        <i>
          <FontAwesomeIcon icon={faFile} />
          <div className="description">Open</div>
        </i>

        <i>
          <FontAwesomeIcon icon={faSave} />
          <div className="description">Save</div>
        </i>

        <i>
          <FontAwesomeIcon icon={faFileImport} />
          <div className="description">Import</div>
        </i>

        <i>
          <FontAwesomeIcon icon={faFileExport} />
          <div className="description">Export</div>
        </i>

        <i>
          <FontAwesomeIcon icon={faInfo} />
          <div className="description">Help</div>
        </i>

        <i>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <div className="description">Exit</div>
        </i>
      </div>
    </div>
  );
};

export default Navbar;
