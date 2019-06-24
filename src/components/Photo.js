import React from 'react';
import './Photo.css';

const Photo = (props) => {
 
  const {url, description,category} = props.photoData;

  return (
    <div className='photo'>
      <img src={url}/>
      <p>Description: {description}</p>
      <p>Keywords:{category}</p>
    </div>
  )
}

export default Photo;
