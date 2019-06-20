import React from 'react';
import './Photo.css';

const Photo = (props) => {
 // const handleLikeClick = (evt) => {
 //   props.likePhoto(props.photoData.id);
 // }

  const {url, description} = props.photoData;

  return (
    <div className='photo'>
      <img src={url}/>
      <p>Description: {description}</p>
    </div>
  )
}

export default Photo;
