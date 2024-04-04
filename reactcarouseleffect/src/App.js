import React, { Component } from 'react';
import Slider from "react-slick";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {verikaynagi} from './datas/data.js'

function  App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
    return (
      <div className="App">

        <Slider {...settings}>
       {verikaynagi.map(item=>(
        <div className='card'>
          <div className='card-top'>
            <img src={item.Image}></img>
            <h1>{item.title}</h1>
          </div>
          <div className='card-bottom'> 
          <h3>{item.Description}</h3></div>
        </div>
       )) }
       </Slider>
      </div>
    );
  }
 

export default App;
