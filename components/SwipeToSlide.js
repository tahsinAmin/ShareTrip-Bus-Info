import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} p-2 py-5 shadow-md before:none before:h-0`}
      style={{
        ...style,
        background: "white",
        color: "black",
        width: "28px",
        height: "100%",
        border: "2px solid #EAEAEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ArrowForwardIos className='text-gray-400' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} p-2 py-5 shadow-md before:none before:h-0`}
      style={{
        ...style,
        display: "block",
        background: "white",
        color: "black",
        width: "28px",
        height: "99%",
        border: "2px solid #EAEAEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
      }}
      onClick={onClick}
    >
      <ArrowBackIos className='text-gray-400' />
    </div>
  );
}

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <Slider {...settings}>
        {data.map((b) => {
          return (
            <div className='border-2 border-l-0 border-g-l p-2' key={b.name}>
              <h3 className='font-semibold truncate'>{b.name}</h3>
              <p>{b.quantity}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}

const data = [
  {
    name: "Hanif Enterprise",
    quantity: 2,
  },
  {
    name: "Shohagh Paribahan",
    quantity: 12,
  },
  {
    name: "Ena Transport (Pvt) Ltd",
    quantity: 4,
  },
  {
    name: "Saintmartin Travels",
    quantity: 10,
  },
  {
    name: "Soudia Coach Service",
    quantity: 2,
  },
  {
    name: "Saintmartin Hyundai",
    quantity: 20,
  },
  {
    name: "Demo Enterprise",
    quantity: 6,
  },
];
