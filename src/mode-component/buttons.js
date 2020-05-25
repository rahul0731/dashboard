import React from 'react';
import './css/style.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const buttons = () =>{
    return <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-2  mr-1  mb-1 " type="button" id="btnItems"><span>Mode</span> <br></br> <span>PVC-AC</span></div>
                <div class="col-sm-2 mr-1 mb-1" type="button" id="btnItems" >
                  <span>Insp.P</span>
                  <br/>
                  <span className="">1.00 </span>
                  <br/>
                  <span> ml</span>
                  </div>
              <div class="col-sm-2 mr-1 mb-1" type="button" id="btnItems">
                <span>PEEP </span>
                <br/>
                <span>5</span>
                <br/>
                <span>cmH2O</span> 
                </div>
              <div class="col-sm-2 mr-1 mb-1" type="button" id="btnItems" >
                <span>Breath Rate </span>
                <br/>
                <span>16</span> 
                <br/>
                <span>BPM</span>
                </div>
              <div class="col-sm-2 mb-1" type="button" id="btnItems" >
                <span>Insp. Time</span>
                <br/>
                 <span>6.8</span>
                 <br/>
                  <span>sec</span>
                  
                  </div>
               
                <div class="col-sm-2 col-md-1 mt-3 " >
                    <button type="button" class="btn btn-outline-light pr-3 "style={{color:"cyan"}} ><PlayArrowIcon />
                </button></div>
            </div>
          </div>
        
        
    
}
export default buttons;





