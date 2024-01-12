import './Content.css'
import React, { ReactNode } from 'react';
import SelectBox from '../SelectBox/SelectBox'


function Content() {
  return (
    <div className='content-container'>
      <div className='content'>
        <SelectBox/>
      </div>
    </div>
  );
}

export default Content;
