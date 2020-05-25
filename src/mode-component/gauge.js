import React from 'react';
import './css/style.css';
import '../App.css';


const gauge = () =>{
    return <div className=" ">
    <canvas data-type="linear-gauge" 
    data-width="160"
    data-height="300"
    data-min-value="0"
    data-max-value="60"
    data-major-ticks="0,15,30,45,60"
    data-minor-ticks="2"
    data-stroke-ticks="true"
    data-highlights='[ {"from": 100, "to": 220, "color": "black"} ]'
    data-color-plate="#black"
    data-color-major-ticks="white"
    data-color-minor-ticks="white"
    data-color-numbers="white"
    data-border-shadow-width="0"
    data-borders="false"
    data-needle-type="arrow"
    data-needle-width="2"
    data-animation-duration="1500"
    data-animation-rule="linear"
    data-tick-side="left"
    data-number-side="left"
    data-needle-side="left"
    data-bar-color="white"
    data-bar-stroke-width="-9"
    data-bar-begin-circle="false"
    data-value="0"
    data-value-box="false"
     data-color-needle="yellow"
                    
                
                    
                   
         
></canvas>
    </div>
}



export default gauge;