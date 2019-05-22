import React from 'react';
import OneRelatedImage from './OneRelatedImage.jsx';

const Related = ({url}) => {

  return (
    <div className="related-images-container">
      {url.map((image) =>
        <OneRelatedImage image={image}/>
      )}
    </div>
  );
}

export default Related;