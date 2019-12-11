import React from 'react';
import './index.scss';
import { copyToClipboard } from '../../utils/common.utils';

function Banner() {
  return (
    <div className='bannerWrapper'>
      <div className='animated heading1 bounceInUp'>
        No more assets, Just {`<code/>`}
      </div>
      <div className='animated heading2 fadeIn delay-1s'>
        Frontend development is all about fast UI, which can be achieved by various methods. One of them is lesser assests and more code.
      </div>

      <div className='animated heading2 heading3 fadeIn delay-1s'>
        Don't forget to hover on various shapes on this webpage and find the code behind that shape. Click the shape to copy the code.
      </div>

      <div className='exampleShape animated fadeIn delay-1s' onClick={() => copyToClipboard(`
        cursor: pointer;
      background: #4662f9;
      height: 45px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;`
      )}>
        Check this out
        <div className='codeBlock'>
          <code>
            cursor: pointer;<br />
            background: #4662f9;<br />
            height: 45px;<br />
            width: 200px;<br />
            display: flex;<br />
            justify-content: center;<br />
            align-items: center;<br />
            color: #fff;<br />
          </code>
        </div>
      </div>
    </div >
  )
}

export default Banner;