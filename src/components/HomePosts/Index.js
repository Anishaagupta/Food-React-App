import React from 'react';
import Image from '../Image/Index';
import './style.scss';

function HomePosts(props) {
  return (
    <>
      <div className='matter'>
        <Image imgUrl={props.imgUrl} />
        <div className='text'>
          <h3 className='home-h3'>{props.heading}</h3>
          <p className='home-p'>{props.para}</p>
          <span className='home-span'>{props.date}</span>
        </div>
      </div>
    </>
  );
}

export default HomePosts;
