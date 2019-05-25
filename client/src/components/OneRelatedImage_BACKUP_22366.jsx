// import React from 'react';

// class OneRelatedImage extends React.Component {
//   constructor({image, imgUrls, handleRelatedImageClick}) {
//     super({image, imgUrls, handleRelatedImageClick});
//     this.state = {  id : ''  }
//     this.handleIdChange= this.handleIdChange.bind(this);
//     this.handleRelatedImageClick= this.handleRelatedImageClick.bind(this);

//     //  let array = imgUrls.slice(index+2, index+6)
//     let index = imgUrls.indexOf(image)
//     const styles = {
//       backgroundImage: `url(${image})`
//      }

//   }

//   handleIdChange(e) {
//      this.setState({ id: index });
//    }

//   handleRelatedImageClick(e) {
//     e.preventDefault();
//     this.props.handleRelatedImageClick(this.state.id);
//   }



//   render () {


//       <div      >
//         <img className="related-image" style={styles} src={image}
//         onClick={(e)=>{this.handleIdChange(e)}}
//         onClick={(e)=>{this.handleRelatedImageClick(e)}}
//         />
//       </div>


// }
// }

// export default OneRelatedImage;



import React from 'react';


function OneRelatedImage ({image, imgUrls, handleRelatedImageClick}) {

  //this.changeCurrent = this.changeCurrent.bind(this)
  const styles = {
    backgroundImage: `url(${image})`
   }
   let array = imgUrls.slice(index+2, index+6)
  let index = imgUrls.indexOf(image)
  var changeCurrent = (e) => {
    e.preventDefault()
   handleRelatedImageClick(index)

  }
  return (
    <div >
      <img className="related-image" style={styles} src={image}
      // onClick={()=>{this.handleRelatedImageClick.bind(this)}}

           //onClick={(e)=>{this.changeCurrent.bind(this, e)}}
            onClick={changeCurrent}
      />


    </div>
  );

}


export default OneRelatedImage;









// import React from 'react';

// const OneRelatedImage = ({image, imgUrls, handleRelatedImageClick}) => {
//   // this.changeCurrent =this.changeCurrent.bind(this);
//   const styles = {
//    backgroundImage: `url(${image})`
//   }
//   let array = imgUrls.slice(index+2, index+6)
//   let index = imgUrls.indexOf(image)

//   var changeCurrent = (e) => {
//     // this.handleRelatedImageClick(index)
//     console.log('hi')
//   }


//   return (
//     <div >
//       <img className="related-image" style={styles} src={image}
//       // onClick={()=>{this.handleRelatedImageClick.bind(this)}}

//          //   onClick={(e)=>{this.changeCurrent(e)}}
//              onClick={()=>{this.changeCurrent.bind(this)}}
//       />
//     </div>
//   );
// }

// export default OneRelatedImage;



// onClick={this.changeCurrent}








// import React from 'react';


// const OneRelatedImage = ({image, imgUrls, handleRelatedImageClick}) => {

//   const styles = {
//    backgroundImage: `url(${image})`
//   }

//   let array = imgUrls.slice(index+2, index+6)
//     let index = imgUrls.indexOf(image)

//     changeCurrent (e) {
//       this.handleRelatedImageClick(index)
//     }





//   return (
//     <div>
//       <img className="related-image" style={styles} src={image} alt=""
//       onClick={()=>{this.handleRelatedImageClick.bind(this)}}
//       onClick={()=>{this.changeCurrent.bind(this)}}
//       />
//     </div>
//   );
// }

// export default OneRelatedImage;

