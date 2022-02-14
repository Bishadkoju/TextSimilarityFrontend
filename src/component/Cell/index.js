import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./style.css";

const Cell = ({ id, onFocusChange }) => {
  const [downArrow, setDownArrow] = useState(true);

  const toggleDownButton = () => {
    setDownArrow(!downArrow);
  };

  const handleFocus = () => {
    console.log("focus");
    onFocusChange({
      id,
      focus: true,
    });
  };

  const handleBlur = () => {
    console.log("blur");
    onFocusChange({
      id,
      focus: false,
    });
  };

  const runCell = () => {
    console.log("Run " + id);
  };
  return (
    <div className="cell-container">
      <div className="input-cell">
        <i className="fa fa-play" onClick={runCell}></i>
        <TextareaAutosize
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="text-box"
          minRows={4}
          maxRows={8}
          placeholder="Write somthing............."
        />

        <ul className="options">
          <li>
            <i className="fa fa-arrow-up"></i>
          </li>
          <li>
            <i className="fa fa-arrow-down"></i>{" "}
          </li>
          <li>
            <i className="fa fa-trash"></i>{" "}
          </li>
          <li>
            <i className="fa fa-copy"></i>{" "}
          </li>
          <li>
            <i
              onClick={toggleDownButton}
              className={`fa fa-eye${downArrow ? "" : "-slash"} `}
            ></i>
          </li>
        </ul>
      </div>
      {!downArrow && <div className="output-cell">asdfsfe</div>}
    </div>
  );
};

export default Cell;
