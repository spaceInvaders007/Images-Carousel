import React from 'react';

const OneRelatedImage = ({image}) => {

  const styles = {
   backgroundImage: `url(${image})`
  }

  return (
    <div>
      <img className="related-image" style={styles} src={image} alt="" />
    </div>
  );
}



export default OneRelatedImage;