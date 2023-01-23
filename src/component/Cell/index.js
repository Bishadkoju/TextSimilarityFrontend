import React, { useState, useEffect, useImperativeHandle } from "react";
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
import { nanoid } from "nanoid";

import { cellActions } from "../../actions/cellActions";
import Preview from "../Preview";
import "./style.css";
import axiosInstance from "../../helpers/Axios";

const Cell = ({ id, onFocusChange, item }, ref) => {
  const [showOutput, setShowOutput] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(0)
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const toggleDownButton = () => {
    setShowOutput(!showOutput);
  };

  useEffect(() => {
    console.log(item)
    setValue(item.value)
    setResults(item.results)
  },[])

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

  const updateCell = (state) => {
    const newState = {
      ...state,
      id
    }
    dispatch(cellActions.updateCell(newState))
  }


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

  const handleRadioChange = (e) => {
    setSelectedResultIndex(parseInt(e.target.value))
    updateCell({selectedResultIndex: parseInt(e.target.value)})
  }

  const handleBlur = () => updateCell({value})

  const runCell = async () => {
    if (value==="") return
    
    console.log("Run " + id);
    const response = await axiosInstance.post("api/queryQuestion/", {
      queryQuestion: value,
    });
    console.log(response.data);
    const results = [ {id: nanoid(), question: value, similarity: 1},...response.data.map((item) => item)]
    setResults(results);
    setShowOutput(true)
    updateCell({value, results})
  };
  return (
    <div ref={ref} className="cell-container">
      <div className="input-cell">
        <i onClick={runCell}>
          <FontAwesomeIcon icon={faPlay} />
        </i>

        <TextareaAutosize
          onFocus={handleFocus}
          onBlur={handleBlur}
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
      <div className ="output-cell">
        <h1>Hy There!</h1>
        <Preview/>
      </div>
      {/* {showOutput && <div className="output-cell">
        <label class="radio-container">One
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio-container">Two
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio-container">Three
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>} */}
    </div>
  );
};

export default React.forwardRef(Cell);
