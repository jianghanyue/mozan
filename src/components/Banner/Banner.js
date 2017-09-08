import React, { Component } from 'react';
import './Banner.css';
import e from './images/1.jpg'
import f from './images/2.jpg'
import g from './images/3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

class Banner extends Component {
  render() {
    var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows:true,
     autoplay:true,
     autoplaySpeed:1000,
     dots:false
   };
    return (
        <div className="banner_on">
          <div className="banner">
            <Slider {...settings}>
              <div><h3><img src={e} alt=""/></h3></div>
              <div><h3><img src={f} alt=""/></h3></div>
              <div><h3><img src={g} alt=""/></h3></div>
            </Slider>
          </div>
        </div>
    );
  }
}

export default Banner;
