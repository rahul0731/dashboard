import React from 'react';
import './css/style.css';
import'../App.css';
import Mode from './mode';
const value2 = () =>{
    return <div class="container-md container-sm container-lg container-xs">
    <div class="row" className="section-2">
        <div class="col-lg-3 col-xs-3 col-sm-3 col-md-3" >
            <div className="item item-6">
            <p>Insp.Time</p>
            <p id="big">2839</p>
            <p>sec</p>
        </div>
        </div>
        <div class="col-lg-3 col-xs-3 col-sm-3 col-md-3"> 
            <div className="item item-7" >
            <p>I:E Ratio</p>
            <p id="big">1.00</p>
        </div>
        </div>
        <div class="col-lg-3 col-xs-3 col-sm-3 col-md-3"> 
            <div className="item item-8">
            <p>SPO2</p>
            <p id="big">0</p>
            <p>%</p>
        </div>
        </div>
        <div class="col-lg-3 col-xs-3 col-sm-3 col-md-3">
            <div className="item item-9">
            <p>Minute Vol</p>
            <p id="big">0</p>
            <p>ipm</p>
        </div>
        </div>
        
       
       
        </div>
    </div>
    
  
}

export default value2;