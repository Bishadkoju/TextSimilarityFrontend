import React from "react";
import "./style.css";
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const Preview =() => {
    return(
        <div className = "preview-button">
            <Popup className="popup" trigger={<button> Preview</button>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
        </div>
    )
};

export default Preview;