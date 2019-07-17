
import { useState, useEffect } from 'react';

const unsupportMessage = 'The Memory Status API is not supported on this platform.';
const windowPerformance = window.performance;

const MAX_MEMORY_LIMIT = 20 * 1048576; // 20MB
// const MAX_PERCENT_THRESHOLD = 90;

const isMemorySupported = () => {
  return windowPerformance && windowPerformance.memory;
};

const useMemoryStatus = () => {
  const [memoryStatus, setMemoryStatus] = useState(null);

  const getOverUsedMemorySize = () => {
    const usedJSHeapSize = windowPerformance.memory.usedJSHeapSize;
    const overUsedMemorySize = usedJSHeapSize - MAX_MEMORY_LIMIT;
    return overUsedMemorySize;
  };

  const getUsedMemoryPercent = () => {
    const usedJSHeapSize = windowPerformance.memory.usedJSHeapSize;
    const jsHeapSizeLimit = windowPerformance.memory.jsHeapSizeLimit;
    const usedMemoryPercent = usedJSHeapSize / jsHeapSizeLimit * 100;
    return usedMemoryPercent;
  };

  useEffect(() => {
    if (isMemorySupported()) {
      setMemoryStatus({
        overUsedMemorySize: getOverUsedMemorySize(),
        usedMemoryPercent: getUsedMemoryPercent()
      });
    } else {
      setMemoryStatus(unsupportMessage);
    }
  }, []);

  return memoryStatus;
};

export { useMemoryStatus };
