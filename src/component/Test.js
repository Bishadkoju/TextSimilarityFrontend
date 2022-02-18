import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Flipper, Flipped } from "react-flip-toolkit";

import { cellActions } from "../actions/cellActions";
import Navbar from "./Navbar";
import Cell from "./Cell";

// You can now get a ref directly to the DOM button:

const Test = () => {
  const [focus, setCurrentFocus] = useState(null);
  // const [cells, setCells] = useState([1064, 68414, 6598])
  const cells = useSelector((state) => state.cells);
  const cellsRef = useRef();
  cellsRef.current = [];

  const dispatch = useDispatch();

  const onFocusChange = ({ id, focus }) => {
    if (focus) {
      setCurrentFocus(id);
    }
  };

  const addCell = () => {
    dispatch(cellActions.addCell(focus));
  };

  const deleteAll = () => {
    const res = window.confirm("Are you sure you want to delete all ?")
    if (res) {
      dispatch(cellActions.deleteAll());
    }
  };

  const runAll = () => {
    for (var i = 1; i <= cellsRef.current.length; i += 2) {
      cellsRef.current[i].runCell();
    }
  };

  const maximizeAll = () => {
    for (var i = 1; i <= cellsRef.current.length; i += 2) {
      cellsRef.current[i].maximizeCell();
    }
  };

  const minimizeAll = () => {
    for (var i = 1; i <= cellsRef.current.length; i += 2) {
      cellsRef.current[i].minimizeCell();
    }
  };

  const addToRef = (el) => {
    if (el && !cellsRef.current.includes(el)) {
      cellsRef.current.push(el);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <nav>
        <button onClick={addCell}>New Cell</button>
        <button onClick={deleteAll}>Delete All</button>
        <button onClick={runAll}>Run All</button>
        <button onClick={maximizeAll}>Maximize All</button>
        <button onClick={minimizeAll}>Minimize All</button>
      </nav>
      <div className="main-section">
        <Flipper flipKey={cells}>
          {cells.map((item) => (
            <Flipped key={item.id} flipId={item.id}>
              <div>
                <Cell
                  key={item.id}
                  id={item.id}
                  item={item}
                  ref={addToRef}
                  onFocusChange={onFocusChange}
                />
              </div>
            </Flipped>
          ))}
        </Flipper>

        {/* <Cell ref={cellsRef} id="asd" /> */}
      </div>
      <div className="status">
        Ready{" "}
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>
      </div>
    </div>
  );
};

export default Test;
