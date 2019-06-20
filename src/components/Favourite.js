import React from 'react';
import './Favourite.css';

const Favourite = (props) => {

  const {url, description} = props.photoData;

  return (
    <div className='favourite'>
      <img src={url}/>
      <p>Description :{description}</p>
    </div>
  )
}

export default Favourite;
