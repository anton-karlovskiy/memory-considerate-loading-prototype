
// ray test touch <
import React, { Fragment } from 'react';

const WebGLCar = () => (
  <Fragment>
    <div className="welcome-screen overlay">
      <div className="ws-wrapper">
        <h1 className="noselect">Lamborghini Aventador</h1>		
        <h3 className="noselect">Configurator</h3>			
        {/* <button onClick="SkipIntro();">SKIP CINE INTRO</button> */}
      </div>
    </div>
    <div className="preloader overlay">
      <div className="wrapper">
        <div className="icon"></div>
        <p className="title">LOADING</p>
        <p className="desc"></p>
      </div>	
    </div>
    <div className="screen-fader overlay"></div>	
  </Fragment>
);

export default WebGLCar;
// ray test touch >