import React from 'react';
import './Photo.css';

const Photo = (props) => {
 
  const {url, description} = props.photoData;

  return (
    <div className='photo'>
      <img src={url}/>
      <p>Description: {description}</p>
    </div>
  )
}

export default Photo;
