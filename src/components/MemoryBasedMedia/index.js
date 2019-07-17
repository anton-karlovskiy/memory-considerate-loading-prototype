
import React, { Fragment } from 'react';

import { useMemoryStatus } from '../../utils/hooks';
import './memory-based-media.css';

const MemoryBasedMedia = () => {
   const memoryStatus = useMemoryStatus();

  console.log('[MemoryBasedMedia] memoryStatus => ', memoryStatus);
  if (!memoryStatus) return <Fragment>Loading...</Fragment>;

  let media = null;
  // switch(true) {
  //   case batteryLevel > .75:
  //     media = <video className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068" controls />;
  //     break;
  //   case batteryLevel > .5:
  //     media = <img className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982" alt="maximum size" />;
  //     break;
  //   case batteryLevel > .25:
  //     media = <img className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmedium-res.jpg?v=1562842587169" alt="medium size" />;
  //     break;
  //   case batteryLevel > 0:
  //     media = <img className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912" alt="minimum size" />;
  //     break;
  //   default:
  //     media = <video className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068" controls />;
  //     break;
  // }

  return (
    <div className="root-frame">
      {media}
    </div>
  );
};

export default MemoryBasedMedia;
