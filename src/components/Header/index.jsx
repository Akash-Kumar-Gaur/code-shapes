import React from 'react';

import './index.scss';
import { copyToClipboard } from '../../utils/common.utils';

function Header() {
  return (
    <div className='headerWrapper'>
      <div className='left' onClick={() => copyToClipboard(`
      height: 250px;
      width: 250px;
      background: #4662f9;
      border-radius: 10px;
      transform: rotate(45deg);
      `)}>
        <img
          src={require('./../../assets/images/logo.png')}
          alt='logo'
          className='logo'
        />
        <span className='name'>
          Code Shapes
        </span>

        <div className='codeBlock'>
          <code>
            height: 250px;<br />
            width: 250px;<br />
            background: #4662f9;<br />
            border-radius: 10px;<br />
            transform: rotate(45deg);<br />
          </code>
        </div>
      </div>

      <div className='right'>
        <ul>
          <li className="active"><a className='headerLink' href='/'>Home</a></li>
          <li><a className='headerLink' href='/'>Submit your code</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;