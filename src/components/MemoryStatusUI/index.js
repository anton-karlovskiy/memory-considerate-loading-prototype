
import React, { Fragment } from 'react';

import './memory-status-ui.css';

const MemoryStatusUI = ({ totalJSHeapSize, usedJSHeapSize, jsHeapSizeLimit, overUsedMemorySize, usedMemoryPercent, unsupportMessage }) => (
  <div className='list'>
    { unsupportMessage ? (
      <div>{unsupportMessage}</div>
    ) : (
      <Fragment>
        <div className='list-item'>
          <div>totalJSHeapSize(Byte):</div>
          <div>{totalJSHeapSize}</div>
        </div>
        <div className='list-item'>
          <div>usedJSHeapSize(Byte):</div>
          <div>{usedJSHeapSize}</div>
        </div>
        <div className='list-item'>
          <div>jsHeapSizeLimit(Byte):</div>
          <div>{jsHeapSizeLimit}</div>
        </div>

        <div className='list-item'>
          <div>overUsedMemorySize(Byte):</div>
          <div>{overUsedMemorySize}</div>
        </div>
        <div className='list-item'>
          <div>usedMemoryPercent(%):</div>
          <div>{usedMemoryPercent.toFixed(2)}</div>
        </div>
      </Fragment>
    ) }
  </div>
);

export default MemoryStatusUI;
