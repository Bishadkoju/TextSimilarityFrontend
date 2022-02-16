import React, { useEffect, useState, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { cellActions } from '../../actions/cellActions'
import TextareaAutosize from "react-textarea-autosize";
import Hotkeys from 'react-hot-keys'
import "./style.css";

const Cell = ({ id, onFocusChange }, ref) => {
  const [showOutput, setShowOutput] = useState(false);
  const dispatch = useDispatch()
  const toggleDownButton = () => {
    setShowOutput(!showOutput);
  };

  useImperativeHandle(ref, () => ({
    runCell,
    maximizeCell: ()=> setShowOutput(true),
    minimizeCell: ()=> setShowOutput(false)
  }));

  const handleFocus = () => {
    onFocusChange({
      id,
      focus: true,
    });
  };

  const deleteCell = () => {
    dispatch(cellActions.deleteCell(id))
  }

  const moveCellUp = () => {
    dispatch(cellActions.moveCellUp(id))
  }

  const moveCellDown = () => {
    dispatch(cellActions.moveCellDown(id))
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey){
      e.preventDefault()
      runCell()
    }
  }

  const runCell = () => {
    console.log("Run " + id);
  };
  return (
    <div ref={ref} className="cell-container">
      <div className="input-cell">
        <i className="fa fa-play" onClick={runCell}></i>
        <Hotkeys
          keyName="shift+a,alt+s"
          onKeyDown={() => console.log('down')}
        >
          <div style={{ padding: "50px" }}>asdfwef</div>
        </Hotkeys>
        <TextareaAutosize
          onFocus={handleFocus}
          className="text-box"
          minRows={4}
          maxRows={8}
          placeholder="Write somthing............."
          onKeyDown={handleKeyDown}
          
        />

        <ul className="options">
          <li>
            <i className="fa fa-arrow-up" onClick={moveCellUp}></i>
          </li>
          <li>
            <i className="fa fa-arrow-down" onClick={moveCellDown}></i>{" "}
          </li>
          <li>
            <i className="fa fa-trash" onClick={deleteCell}></i>{" "}
          </li>
          <li>
            <i
              onClick={toggleDownButton}
              className={`fa fa-eye${!showOutput ? "" : "-slash"} `}
            ></i>
          </li>
        </ul>
      </div>
      {showOutput && <div className="output-cell">asdfsfe</div>}
    </div>
  );
};

export default React.forwardRef(Cell);
