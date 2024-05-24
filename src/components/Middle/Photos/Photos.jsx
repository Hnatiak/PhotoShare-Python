import React from 'react';
import { PhotoItem, PhotoList, Image } from './Photos.styled';

const Photos = ({ photos }) => {
  return (
    <PhotoList>
      {photos.map((photo, index) => (
        <PhotoItem key={index}>
          <img name="photo" src={photo.url} alt={photo.description} />
          <p name="description">{photo.description}</p>
          <p name="tags">{photo.tags}</p>
        </PhotoItem>
      ))}
    </PhotoList>
  );
};

export default Photos;