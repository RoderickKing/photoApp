import React from 'react';
import Photo from './Photo';
import './PhotosList.css';
import ButtonsContainer from '../containers/ButtonsContainer';

// if props.category is null then map everything
// if category !null then filter for cat and map results




const PhotosList = (props) => {

  const checkPhotos = () => {
    if (props.category === 'Clear') {
      return props.photos
    } else {
      return props.photos.filter(photo => {
        for (loop = 0; loop < photo.category.length; loop++) {
          if (props.category === photo.category[loop]){
             return true;
          }
        }
      })
    }
  };

  const photos = checkPhotos()

  const photoCards = photos.map((photoData, index) => {
    return <Photo
      photoData={ photoData }
      key={photoData.id}
    />
  });
  return (
    <div id='photos-list'>
      { photoCards }
    </div>
  );
}

export default PhotosList;
