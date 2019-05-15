import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';
import $ from 'jquery';


class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    }

  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === 0;
    const index = resetIndex ? lastIndex : currentImageIndex - 1;

    this.setState ({
      currentImageIndex: index
    })
  }

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
      <LeftArrow
        clickFunction={this.previousSlide}
        image='&#9664;'/>
      <Slider url={imageUrl[this.state.currentImageIndex]} />
      <RightArrow clickFunction={this.nextSlide}
        image='&#9654;'/>
    </div>
    )
  }
}

ReactDOM.render(<ImageCarousel />, document.getElementById('app'));