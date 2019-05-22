import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';
import LeftArrow from './components/LeftArrow.jsx';
import RightArrow from './components/RightArrow.jsx';
import Related from './components/RelatedImages.jsx'

const imgUrls = [];

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      relatedImages : []
    }
  this.nextSlide = this.nextSlide.bind(this)
  this.previousSlide = this.previousSlide.bind(this)
  }

  async componentDidMount() {
    try {
      //fetches images from database and pushes them into the imgUrls array
      let response = await fetch('/product-images');
      let pictures = await response.json();
      let images = pictures.images
      images.forEach(function(image){
        imgUrls.push(image.url)
      })
      //will place the first image of the collection on the slider
      //will pick the next 4 following images for the related images below the big one
     this.setState ({
      currentImageIndex: 0,
      relatedImages: imgUrls.slice(2,6)
     })
    } catch (err) {
      console.error('Encountered error fetching product images', err);
    }
  }

  //On LeftArrow Click the carousel will display the image that precedes the current one, and if it is displaying the first one will display the last one next
  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === 0;
    const index = resetIndex ? lastIndex : currentImageIndex - 1;

    this.setState ({
      currentImageIndex: index,
      relatedImages: imgUrls.slice(this.state.currentImageIndex+2, this.state.currentImageIndex+6)
    })

  }

  //on RightArrow click the carousel will display the next image. If already displaying the last image the next one will be the first one
  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;

    this.setState ({
      currentImageIndex: index,
      relatedImages: imgUrls.slice(this.state.currentImageIndex+2, this.state.currentImageIndex+6)
    })

  }



  render () {
    return (
    <div className="carousel">

      <LeftArrow
        clickFunction={this.previousSlide}
        image='&#60;'/>
      <Slider url={imgUrls[this.state.currentImageIndex]} />
      <RightArrow clickFunction={this.nextSlide}
        image='&#62;'/>
        <Related  url={this.state.relatedImages} />
    </div>
    )
  }
}

ReactDOM.render(<ImageCarousel />, document.getElementById('app'));