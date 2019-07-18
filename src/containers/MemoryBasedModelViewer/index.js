
import React, { Fragment, lazy, Suspense } from 'react';

import MemoryStatusUI from '../../components/MemoryStatusUI';
import { useMemoryStatus } from '../../utils/hooks';
import './memory-based-media.css';

const Model3DViewer = lazy(() => import('../../components/Model3DViewer'));
const ModelImageViewer = lazy(() => import('../../components/ModelImageViewer'));

const Loading = <Fragment>Loading...</Fragment>;

const MemoryBasedModelViewer = () => {
  const memoryStatus = useMemoryStatus();

  console.log('[MemoryBasedModelViewer] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return Loading;

  const { usedMemoryPercent } = memoryStatus;
  let media = null;
  switch(true) {
    case usedMemoryPercent > 75:
      media = (
        <Suspense fallback={Loading}>
          <ModelImageViewer />
        </Suspense>
      );
      break;
    case usedMemoryPercent > 0:
      media = (
        <Suspense fallback={Loading}>
          <Model3DViewer />
        </Suspense>
      );
      break;
    default:
      media = (
        <Suspense fallback={Loading}>
          <Model3DViewer />
        </Suspense>
      );
      break;
  }

  return (
    <div className='root-frame'>
      <MemoryStatusUI {...memoryStatus} />
      {media}
    </div>
  );
};

export default MemoryBasedModelViewer;
