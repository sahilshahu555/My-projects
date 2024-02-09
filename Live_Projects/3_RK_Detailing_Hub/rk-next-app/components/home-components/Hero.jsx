"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const data=[
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-1.jpg?updatedAt=1707473078913",
      title:"Washing & Detailing",
      main:"Keep your Car Newer",
      desc:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-2.jpg?updatedAt=1707473090220",
      title:"Washing & Detailing",
      main:"Quality service for you",
      desc:" Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-3.jpg?updatedAt=1707473086338",
      title:"Washing & Detailing",
      main:"Exterior & Interior Washing",
      desc:" Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-4.jpg?updatedAt=1707473075486",
      title:"Washing & Detailing",
      main:"High Quality of Washing",
      desc:" est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },


    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-1.jpg?updatedAt=1707473078913",
      title:"Washing & Detailing",
      main:"Keep your Car Newer",
      desc:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-2.jpg?updatedAt=1707473090220",
      title:"Washing & Detailing",
      main:"Quality service for you",
      desc:" Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-3.jpg?updatedAt=1707473086338",
      title:"Washing & Detailing",
      main:"Exterior & Interior Washing",
      desc:" Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-4.jpg?updatedAt=1707473075486",
      title:"Washing & Detailing",
      main:"High Quality of Washing",
      desc:" est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
  ]

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((elm,i)=>(
          <div key={i}>
            <img src={elm.image} alt={i} />
            
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Hero
