import React from 'react';
import './Photo.css';

const Photo = (props) => {
 
  const {url, description,category} = props.photoData;
  let category_string = ' ';
  for (const keyword of category) {
    category_string  = category_string + keyword + ','; 
  }


  return (
    <div className='photo'>
      <img src={url}/>
      <p>Description: {description}</p>
      <p>Keywords:{category_string}</p>
    </div>
  )
}

export default Photo;
