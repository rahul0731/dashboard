import React from 'react';
import {VectorMap }from 'react-jvectormap';
const content = () => {
    return(<div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card card-stats">
            <div class="card-header card-header-danger card-header-icon border">
              <div class="card-icon">
                <i class="material-icons">info</i>
              </div>
              <h4 className="card-title text-left text-dark "> Manage ION Vents</h4>
              <div style={{width: 200, height: 300}}>
            <VectorMap map={'world_mill'}
                       backgroundColor="#0077be"
                       useref="map"
                       containerStyle={{
                           width: '20%',
                           height: '200px',
                           position: 'absolute',
                           left:'500px'
                       }}
                       containerClassName="map"
            />
        </div>
        </div>
        </div>
                     
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-danger card-header-icon">
              <div class="card-icon">
                <i class="material-icons">report_problem</i>
              </div>
              <p class="card-category text-danger">High Priority Alarming vents</p>
              <h3 class="card-title">0</h3>
      
            </div>
            <div class="card-footer">
              <div class="stats">
              <i class="material-icons text-danger">report_problem</i>
                <a class="" href="/">
                
                     Tracked from device </a>
                 
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
              <div class="card-icon">
                <i class="material-icons">report_problem</i>
              </div>
              <p class="card-category">Medium Priority Alarming vents</p>
              <h3 class="card-title">0</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
              <i class="material-icons text-warning">report_problem</i>
                <a class="" href="/">
                
                     Tracked from device </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
              <i class="material-icons">notification_important</i>
              </div>
              <p class="card-category">Low Priority Alarming vents</p>
              <h3 class="card-title">0</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
              <i class="material-icons text-info">notification_important</i> 
              <a class="" href="/">
                
                Notification Important</a>
              </div>
            </div>
          </div>
         
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-success card-header-icon">
              <div class="card-icon">
              <i class="material-icons">notifications</i>
              </div>
              <p class="card-category">No Alarming vents</p>
              <h3 class="card-title">0</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
              <i class="material-icons text-success">notifications</i> 
              <a class="" href="/">
                
                Notification</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     </div>
</div>

    );
}

export default content;