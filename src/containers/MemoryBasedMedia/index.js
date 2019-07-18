
import React, { Fragment } from 'react';

import ModelViewer from '../../components/ModelViewer';
import { useMemoryStatus } from '../../utils/hooks';
import './memory-based-media.css';

const MemoryBasedMedia = () => {
   const memoryStatus = useMemoryStatus();

  console.log('[MemoryBasedMedia] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return <Fragment>Loading...</Fragment>;

  const { usedMemoryPercent } = memoryStatus
  let media = null;
  switch(true) {
    case usedMemoryPercent > 75:
      media = null;
      break;
    case usedMemoryPercent > 0:
      media = <ModelViewer />;
      break;
    default:
      media = <video className='responsive' src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068' controls />;
      break;
  }

  return (
    <div className='root-frame'>
      {media}
    </div>
  );
};

export default MemoryBasedMedia;
