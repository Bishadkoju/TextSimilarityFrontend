import React, { useState, useImperativeHandle } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faTrash,
  faArrowUp,
  faArrowDown,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cellActions } from "../../actions/cellActions";
import TextareaAutosize from "react-textarea-autosize";
import "./style.css";

const Cell = ({ id, onFocusChange }, ref) => {
  const [showOutput, setShowOutput] = useState(false);
  const dispatch = useDispatch();
  const toggleDownButton = () => {
    setShowOutput(!showOutput);
  };

  useImperativeHandle(ref, () => ({
    runCell,
    maximizeCell: () => setShowOutput(true),
    minimizeCell: () => setShowOutput(false),
  }));

  const handleFocus = () => {
    onFocusChange({
      id,
      focus: true,
    });
  };

  const deleteCell = () => {
    dispatch(cellActions.deleteCell(id));
  };

  const moveCellUp = () => {
    dispatch(cellActions.moveCellUp(id));
  };

  const moveCellDown = () => {
    dispatch(cellActions.moveCellDown(id));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      runCell();
    }
  };

  const runCell = () => {
    console.log("Run " + id);
  };
  return (
    <div ref={ref} className="cell-container">
      <div className="input-cell">
        <i onClick={runCell}>
          <FontAwesomeIcon icon={faPlay} />
        </i>

        <TextareaAutosize
          onFocus={handleFocus}
          className="text-box"
          minRows={4}
          maxRows={8}
          onKeyDown={handleKeyDown}
        />

        <ul className="options">
          <li>
            <i onClick={moveCellUp}>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </li>
          <li>
            <i onClick={moveCellDown}>
              <FontAwesomeIcon icon={faArrowDown} />
            </i>{" "}
          </li>
          <li>
            <i onClick={deleteCell}>
              <FontAwesomeIcon icon={faTrash} />
            </i>{" "}
          </li>
          <li>
            <i onClick={toggleDownButton}>
              <FontAwesomeIcon icon={!showOutput ? faEye : faEyeSlash} />
            </i>
          </li>
        </ul>
      </div>
      {showOutput && (
        <div className="output-cell">
          <label class="radio-container">
            One
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">
            Two
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="radio-container">
            Three
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Cell);
