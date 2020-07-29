import React from 'react';
import './style.scss';

function Image(props) {
  return <img src={props.imgUrl} alt='food_images' className='food_image' />;
}
export default Image;
