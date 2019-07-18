
import React from 'react';

import './memory-status-ui.css';

const MemoryStatusUI = ({ totalJSHeapSize, usedJSHeapSize, jsHeapSizeLimit, overUsedMemorySize, usedMemoryPercent }) => (
  <div className='list'>
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
      <div>{usedMemoryPercent}</div>
    </div>
  </div>
);

export default MemoryStatusUI;
