import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '../App.css';
const mode = (props) => {
    return(
        <div className="text-center m-sm-3 item">
                <h6>{props.mode}</h6>
                <h3 className="display-4 ">{props.value}</h3>
                <h6>{props.unit}</h6>
        </div>
    )
};
export default mode;