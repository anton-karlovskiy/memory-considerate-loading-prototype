
import React from 'react';
import '@google/model-viewer';

import './model-3d-viewer.css';
import astronaut from '../../assets/models/astronaut/astronaut.glb';

const Model3DViewer = () => {
  return (
    <model-viewer
      width='600px'
      src={astronaut}
      alt='A 3D model of an astronaut'
      background-color='#70BCD1'
      shadow-intensity='1'
      camera-controls
      interaction-prompt='auto'
      auto-rotate
      ar
      magic-leap>
    </model-viewer>
  );
};

export default Model3DViewer;
