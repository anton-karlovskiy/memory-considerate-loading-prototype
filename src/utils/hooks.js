
import { useState } from 'react';

const unsupportMessage = 'The Memory Status API is not supported on this platform.';

// Tune these for your application
const MAX_MEMORY_LIMIT = 50 * 1048576; // 20MB
const MAX_PERCENT_THRESHOLD = 90;

const useMemoryStatus = () => {
  const windowPerformance = window.performance;
  const isMemorySupported = () => {
    return windowPerformance && windowPerformance.memory;
  };
  
  const getTotalJSHeapSize = () => windowPerformance.memory.totalJSHeapSize;
  const getUsedJSHeapSize = () => windowPerformance.memory.usedJSHeapSize;
  const getJSHeapSizeLimit = () => windowPerformance.memory.jsHeapSizeLimit;

  const getOverUsedMemorySize = () => {
    const usedJSHeapSize = getUsedJSHeapSize();
    const overUsedMemorySize = usedJSHeapSize - MAX_MEMORY_LIMIT;
    return overUsedMemorySize;
  };

  const getUsedMemoryPercent = () => {
    const usedJSHeapSize = getUsedJSHeapSize();
    const jsHeapSizeLimit = getJSHeapSizeLimit();
    const usedMemoryPercent = usedJSHeapSize / jsHeapSizeLimit * 100;
    return usedMemoryPercent;
  };

  let initialMemoryStatus;
  if (isMemorySupported()) {
    const overUsedMemorySize = getOverUsedMemorySize();
    const usedMemoryPercent = getUsedMemoryPercent();
    let overLoad = false;
    // Check if we've exceeded absolute memory limit
    if (overUsedMemorySize > 0) {
      overLoad = true;
    }
    // Check if we've exceeded relative memory limit for client
    if (usedMemoryPercent > MAX_PERCENT_THRESHOLD) {
      overLoad = true;
    }
    initialMemoryStatus = {
      totalJSHeapSize: getTotalJSHeapSize(),
      usedJSHeapSize: getUsedJSHeapSize(),
      jsHeapSizeLimit: getJSHeapSizeLimit(),
      overLoad
    };
  } else {
    initialMemoryStatus = {unsupportMessage};
  }
  
  const [memoryStatus, setMemoryStatus] = useState(initialMemoryStatus);

  return { memoryStatus, setMemoryStatus };
};

export { useMemoryStatus };
