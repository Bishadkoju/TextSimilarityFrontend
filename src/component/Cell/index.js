import React, { useState, useImperativeHandle } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowUp,
  faArrowDown,
  faEye,
  faEyeSlash,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";

import { cellActions } from "../../actions/cellActions";
import "./style.css";
import axiosInstance from "../../helpers/Axios";

const Cell = ({ id, onFocusChange }, ref) => {
  const [showOutput, setShowOutput] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0)
  const [value, setValue] = useState("");
  const [outputs, setOutputs] = useState([]);
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

  const handleRadioChange = (e) => setSelectedOption(parseInt(e.target.value))

  const runCell = async () => {
    if (value==="") return
    
    console.log("Run " + id);
    const response = await axiosInstance.post("api/queryQuestion/", {
      queryQuestion: value,
    });
    console.log(response.data);
    setOutputs([ {id: 'asfdwefwe', question: value, similarity: 1},...response.data.map((item) => item)]);
    setShowOutput(true)
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />

        <ul className="options">
          <li>
            <i onClick={moveCellUp}>
              <FontAwesomeIcon icon={faArrowUp} className="options-icon" />
            </i>
          </li>
          <li>
            <i onClick={moveCellDown}>
              <FontAwesomeIcon icon={faArrowDown} className="options-icon" />
            </i>{" "}
          </li>
          <li>
            <i onClick={deleteCell}>
              <FontAwesomeIcon icon={faTrash} className="options-icon" />
            </i>{" "}
          </li>
          <li>
            <i onClick={toggleDownButton}>
              <FontAwesomeIcon
                icon={!showOutput ? faEye : faEyeSlash}
                className="options-icon"
              />
            </i>
          </li>
        </ul>
      </div>
      {showOutput && (
        <div className="output-cell">
          {outputs.map((item,i) => (
            <label className="radio-container">
              {item.question} {i===0?"(Query Question)" : `(${parseFloat(item.similarity).toFixed(4)})`}
              <input type="radio" value={i} name={`output-${id}`} onChange={handleRadioChange} checked={selectedOption === i}/>
              <span className="checkmark"></span>
            </label>
          ))}
         
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Cell);
