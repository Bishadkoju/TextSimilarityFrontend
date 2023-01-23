import React from "react";
import {useDispatch} from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faFileExport,
  faInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Icon from "../../image/logo.png";
import FileImport from "../FileImport";
import { cellActions } from "../../actions/cellActions";
import FileExport from "../FileExport";

const Navbar = () => {
  const dispatch = useDispatch()
  
  const onFileRead = (file) => {
    const questions = file.split("\n").filter((x) => x !== "");
    dispatch(cellActions.deleteAll())
    questions.map(question => dispatch(cellActions.addCell({value: question})))
  }

  return (
    <div className="navbar">
      <div className="navbar_container">
        <i>
          <img src={Icon} className="logo" alt="logo" />
        </i>

        <i>
          <FileImport onFileRead={onFileRead}>
            <FontAwesomeIcon icon={faFileImport} />
          </FileImport>
          <div className="description">Import</div>
        </i>

        <i>
          <FileExport>
            <FontAwesomeIcon icon={faFileExport} />
          </FileExport>
          <div className="description">Export</div>
        </i>

        <i onClick={()=> window.alert("😢😭😭 Help me too brooo.. HELP ME TOOOOO !!! 😭😭😭 ")}>
          <FontAwesomeIcon icon={faInfo} />
          <div className="description">Help</div>
        </i>

        <i onClick={()=>window.close()}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <div className="description">Exit</div>
        </i>
      </div>
    </div>
  );
};

export default Navbar;
