import React from 'react';
import './Photo.css';

const Photo = (props) => {
 // const handleLikeClick = (evt) => {
 //   props.likePhoto(props.photoData.id);
 // }

  const {url, category} = props.photoData;

  return (
    <div className='photo'>
      <img src={url}/>
      <p>Category: {category}</p>
    </div>
  )
}

export default Photo;
