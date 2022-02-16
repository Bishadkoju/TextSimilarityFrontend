import React, {useState} from "react";

import Navbar from './Navbar'
import Cell from './Cell'

const Test = () => {
  const [focus, setCurrentFocus] = useState(null)
  const [cells, setCells] = useState([1064, 68414, 6598])

  const onFocusChange = ({id, focus}) => {
    if (focus) {
      setCurrentFocus(id)
    }
  }

  const addCell = () => {
    console.log('new')
    const newCells = []
    cells.map((id) => {
      newCells.push(id)
      if (focus === id) {
        newCells.push(parseInt(Math.random()*999999))
      }
    })
    console.log(newCells)
    setCells(newCells)
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-section">
        <div>
        <button onClick={addCell}>New Cell</button>
        <button>Delete All</button>
        <button>Run All</button>
        <button>Maximize All</button>
        <button>Minimize All</button>
        </div>
        <div className="status">Connected <i className="fa fa-check"></i></div>
        {cells.map((item) => <Cell key = {item} id={item} onFocusChange={onFocusChange} />)}
      </div>
    </div>
  );
};

export default Test;
