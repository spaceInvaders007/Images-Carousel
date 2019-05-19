import React from 'react';

const Slider = ({url}) => {
  console.log(url)
  const styles = {
   backgroundImage: `url(${url})`
  }
	// 	backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '100%',
	//   width: '100%',
	//   transition: 'background-image .3s ease-in-out'
  // }


return (
   <div>
 <img className="media-object" style={styles} src={url} alt="" />
   {/* <img src={lib/images/tiger.jpg}  /> */}
  </div>
);

}

export default Slider;

// <div className= "slider" style={styles}>