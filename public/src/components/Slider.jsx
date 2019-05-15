import React from 'react';

const Slider = ({url}) => {
  const styles = {
    image: `url(${url})`,
    size: 'cover',
    position: 'center'
  }


return (
  <div className= "slider" style={styles}>rendering</div>
);

}

export default Slider;