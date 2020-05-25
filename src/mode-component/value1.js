import React from 'react';
import './css/style.css';
import'../App.css';
import Mode from './mode';
const monitoring = () =>{
    return <div class=" text-light mt-sm-5">
        <div class="container">
            <div class="row justify-content-center">
                  <div class="col-sm-2 col-md-3">
                  <Mode mode="Peek Press" value="20" unit="cm H2O"/>
                  </div>
                  <div class="col-sm-2 col-md-3">
                  <Mode mode="Breath Rate" value="0" unit="BPM"/>
                </div>
                <div class="col-sm-2 col-md-3">
                <Mode mode="Spont BR" value="0" unit="BPM"/>
                  </div>
               <div class="col-sm-2 col-md-3">
               <Mode mode="Tidal Vol" value="0" unit="ml"/>
              </div>
              
          </div>  
        </div>     
  
            <div class="container mt-sm-25 ">
              <div class="row">
                    <div class="col-sm-2 col-md-3">
                    <Mode mode="Insp.Time" value="29" unit="sec"/>
                    </div>
                    <div class="col-sm-2 col-md-3">
                    <Mode mode="I:E Ratio" value="1.0" />
                  </div>
                  <div class="col-sm-2 col-md-3">
                  <Mode mode="SPO2" value="0" unit="%"/>
                    </div>
                 <div class="col-sm-2 col-md-3">
                 <Mode mode="Minute Vol" value="0" unit="Ipm"/>
                </div>
              </div>        
  
        </div>
    </div>
}

export default monitoring;