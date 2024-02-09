"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from "./HeroCard.jsx"
const Hero = () => {
  const data=[
    
    {
      image:"https://media.istockphoto.com/id/812537854/photo/pile-of-colorful-dirty-rags-laying-nearby-chopper.jpg?s=612x612&w=0&k=20&c=hwIGGvcHMrRCkNWk-e9Zlq1WVCkdT_ZbYryAjuTAro8=",
      title:"Washing & Detailing",
      main:"High Quality of Washing",
      desc:" est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
    {
      image:"https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/carousel-1.jpg?updatedAt=1707473078913",
      title:"Washing & Detailing",
      main:"Quality service for you",
      desc:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"

    },
    {
      image:"https://media.istockphoto.com/id/1964796340/photo/blurry-image-of-a-car-wash-station-worker-holding-a-water-gun-next-to-a-car.jpg?s=612x612&w=0&k=20&c=GwB3JDS82E2TCaLNeRa9zteCjXvRiLC9MhXU0PzAxbM=",
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
      image:"https://media.istockphoto.com/id/1365089156/photo/microfiber-dirty-towels-in-the-car-interior-cleaning.jpg?s=612x612&w=0&k=20&c=MTS8TxcQ9wTzpVJY2goF4LxJPaTp0_0dlZ5OiFfwatk=",
      title:"Washing & Detailing",
      main:"Exterior & Interior Washing",
      desc:" Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
    {
      image:"https://media.istockphoto.com/id/1147822349/photo/apprentice-keeping-light-for-head-mechanic-to-work-under-car.jpg?s=612x612&w=0&k=20&c=SQHoyMRubMbyv4H4oZk4RF75iLeS9UVs1IN1JyHR1Q4=",
      title:"Washing & Detailing",
      main:"Keep your Car Newer",
      desc:" Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales"

    },
    {
      image:"https://media.istockphoto.com/id/1351685174/photo/car-engine-repair-in-car-service-car-service-concept.jpg?s=612x612&w=0&k=20&c=gPKuq7OzQ0IdG6Hh5GC3gVT0NSoTqVBuKfwiV2_AbkQ=",
      title:"Washing & Detailing",
      main:"Exterior & Interior Washing",
      desc:" Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
    {
      image:"https://media.istockphoto.com/id/1437081703/photo/washing-car-engine-with-with-water-in-detailing-auto-service-detailing-cleaning-motor-from.jpg?s=612x612&w=0&k=20&c=dxjsZ7EBOZVnTQSVJvm4u_DYHmPqw7UHRqwciJIpLnE=",
      title:"Washing & Detailing",
      main:"High Quality of Washing",
      desc:" est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"

    },
  ]

  const settings = {
    dots:true,
    infinite:true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1,
          infinite:true,
          dots:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite:true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1,
          infinite:true,
        }
      }
    ]
  };

  return (
   <div className="">
      <Slider {...settings}>
        {data.map((elm,i)=>(
          <HeroCard key={i} elm={elm}/>
        
        ))}
      </Slider>
  </div>
  )
}

export default Hero

{/* <div key={i} className=' '>
<img src={elm.image}  className='h-[20rem] md:h-[26rem] w-full  ' alt={i} />

</div> */}