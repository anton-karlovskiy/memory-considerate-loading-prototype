
import React, { Fragment } from 'react';

import ModelViewer from '../../components/ModelViewer';
import { useMemoryStatus } from '../../utils/hooks';
import './memory-based-media.css';

const MemoryBasedMedia = () => {
   const memoryStatus = useMemoryStatus();

  console.log('[MemoryBasedMedia] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return <Fragment>Loading...</Fragment>;

  const { usedMemoryPercent } = memoryStatus;
  let media = null;
  switch(true) {
    case usedMemoryPercent > 75:
      media = null;
      break;
    case usedMemoryPercent > 0:
      media = <ModelViewer />;
      break;
    default:
      media = (
        <Fragment>
          <span>{memoryStatus}</span>
          <ModelViewer />
        </Fragment>
      );
      break;
  }

  return (
    <div className='root-frame'>
      {media}
    </div>
  );
};

export default MemoryBasedMedia;
