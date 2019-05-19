import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';
import LeftArrow from './components/LeftArrow.jsx';
import RightArrow from './components/RightArrow.jsx';
import $ from 'jquery';
// import cat from '../../lib/images/cat.jpg'


const imgUrls = [
	"https://natgeo.imgix.net/factsheets/thumbnails/stillife-asparagus-germany.ngsversion.1553893745762.adapt.1900.jpg?auto=compress,format&w=1024&h=560&fit=crop",
	"https://natgeo.imgix.net/meal-asparagus-germany.adapt.1900.1.jpg?auto=compress,format&w=728",
	"https://natgeo.imgix.net/detail-asparagus-germany.adapt.1900.1.jpg?auto=compress,format&w=728",
	"https://natgeo.imgix.net/plated-asparagus-germany.adapt.1900.1.jpg?auto=compress,format&w=728"
];

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    }
  this.nextSlide = this.nextSlide.bind(this)
  this.previousSlide = this.previousSlide.bind(this)
  }

  //On LeftArrow Click the carousel will display the image that precedes the current one, and if it is displaying the first one will display the last one next
  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === 0;

    const index = resetIndex ? lastIndex : currentImageIndex - 1;

    this.setState ({
      currentImageIndex: index
    })
  }

  //on RightArrow click the carousel will display the next image. If already displaying the last image the next one will be the first one
  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;

    this.setState ({
      currentImageIndex: index
    })
  }

  render () {
    return (
    <div className="carousel">
     {/* <img className="media-on-index" src={'https://natgeo.imgix.net/factsheets/thumbnails/stillife-asparagus-germany.ngsversion.1553893745762.adapt.1900.jpg?auto=compress,format&w=1024&h=560&fit=crop'}  alt="" /> */}
    this is react
      <LeftArrow
        clickFunction={this.previousSlide}
        image='&#9664;'/>
      <Slider url={imgUrls[this.state.currentImageIndex]} />
      <RightArrow clickFunction={this.nextSlide}
        image='&#9654;'/>
    </div>
    )
  }
}

ReactDOM.render(<ImageCarousel />, document.getElementById('app'));

