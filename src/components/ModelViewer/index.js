
import React, { Fragment, Suspense, lazy } from 'react';

import Loading from '../Loading';

const LazyModel3DViewer = lazy(() => import('./Model3DViewer'));
const LazyModelImageViewer = lazy(() => import('./ModelImageViewer'));

const ModelViewer = ({ src, fallbackSrc, memoryStatus }) => {
  const { overLoad } = memoryStatus;

  const viewer = overLoad ? (
    <Suspense fallback={<Loading />}>
      <LazyModelImageViewer src={fallbackSrc} />
    </Suspense>
  ) : (
    <Suspense fallback={<Loading />}>
      <LazyModel3DViewer src={src} />
    </Suspense>
  );

  return (
    <Fragment>
      {viewer}
    </Fragment>
  );
};

export default ModelViewer;
