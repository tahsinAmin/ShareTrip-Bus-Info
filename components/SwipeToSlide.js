import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -left-10 p-2 py-5 shadow-md before:none before:h-0  rounded-l-md`}
      style={{
        ...style,
        display: "block",
        background: "white",
        color: "black",
        width: "40px",
        height: "99%",
        border: "2px solid #EAEAEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ArrowBackIos className='text-gray-400' />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} p-2 py-5 shadow-md before:none before:h-0 rounded-r-md`}
      style={{
        ...style,
        background: "white",
        color: "black",
        width: "40px",
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

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 6,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      // afterChange: function (index) {
      //   console.log(
      //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      //   );
      // },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    return (
      <div className='w-11/12 mx-auto lg:w-full'>
        <Slider {...settings}>
          {data.map((b) => {
            return (
              <div
                className='border-2 border-l-0 border-g-l p-2 w-40'
                key={b.name}
              >
                <p className='font-regular text-black truncate text-sm'>
                  {b.name}
                </p>
                <p className='text-gray-600'>{b.quantity}</p>
              </div>
            );
          })}
        </Slider>
      </div>
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
