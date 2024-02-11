"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Testimonial = () => {
  const data=[
    {
      name:"Sameer Engole",
      profession:"Hawala / Money Laundering",
      image:"https://scontent.fbom3-1.fna.fbcdn.net/v/t39.30808-6/405391317_2632298286933586_9184549173272040647_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=YpWYF0IDfzAAX_dswCT&_nc_ht=scontent.fbom3-1.fna&oh=00_AfC-W923VR0mvjh3boZ0o7pHl_aXeug2VC6yksefketQtg&oe=65CC64F1",
      desc:"Bahot achha laga bhai meri car ko wash kr ke. Rakesh bhai tum bahot achhe ho. kal mera 50,000/- ka payment aane wala hai. chalo chai pi kar aate hai Mate Sqaure se"
    },
    {
      name:"Gaurav Katre",
      profession:"Gym Trainner",
      image:"https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-9/61797325_1366380346846676_9202965934266908672_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=0ITi6WZvCY4AX_GQpUw&_nc_ht=scontent.fbom3-1.fna&oh=00_AfAnxRZOWoTaaU9PRQz0ixtkz4svgDqXLU6UCjyXvRzvzw&oe=65EF29A2",
      desc:"Mere pass Car to nahi hai par dunkan dekh kar achha laga. Arre ye Rakesh to mera bhai hai yrr."
    },
    {
      name:"Shubham Baisware",
      profession:"Softwear Engineer",
      image:"https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/202154167_3840237492768704_7364086951735089812_n.jpg?stp=dst-jpg_s160x160&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=jm5W-nb423EAX_oxjAV&_nc_ht=scontent.fbom3-1.fna&oh=00_AfDq5u9_AB2VVwgDuCNixycjCLxXMcc-iOXRedyF1pXvbg&oe=65EF3965",
      desc:"Accha kam kiya Rakesh bhai. tum Mahan ho. Jiyo Raja"
    },
    {
      name:"Shubham Patle",
      profession:"Hotel Chef",
      image:"https://scontent.fbom3-2.fna.fbcdn.net/v/t39.30808-6/326340965_881166803035502_8451017387390332362_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=783fdb&_nc_ohc=JzpFiT4PCmgAX9BUhcF&_nc_ht=scontent.fbom3-2.fna&oh=00_AfBPM_4z3XpuNh8dOdD-alhODcvG4Vikznrwp2tGGi5llg&oe=65CDB3BB",
      desc:"Kya Car wash kiya hai bhai, Maza AA gaya. mere hotel me aana Rakesh bhai nudels achha bana ta hu mai"
    },
    {
      name:"Saurabh Wadaskar",
      profession:"Event Manager",
      image:"https://scontent.fbom3-1.fna.fbcdn.net/v/t39.30808-6/361631045_6434996293258335_7115808799625263356_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=78TJaB8_eCgAX8s88ti&_nc_ht=scontent.fbom3-1.fna&oh=00_AfA4f_FNgLIKSGU8Kbav8h1po1OsmPmhpxEiZ8y8jiw-AQ&oe=65CC9574",
      desc:"Rakesh bhai tum achha kam krte ho, esa meko lagta hai "
    },
    {
      name:"Sahil Shahu",
      profession:"Web Developer",
      image:"https://scontent.fslv1-4.fna.fbcdn.net/v/t39.30808-6/288462350_4979899588799512_3170731793035400205_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=WHpSGuFxMwoAX_rk5FF&_nc_ht=scontent.fslv1-4.fna&oh=00_AfCv341E32m3GX3f6dlf_TY7gReXPnVj39ldeWEWf2h4Hg&oe=65CBDAA4",
      desc:"Rakesh Bhai ka jalwa baki sab halwa. Rakesh bhai tum aage bado "
    },
  ]

  const settings = {
    dots:true,
    infinite:true,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 3,
          infinite:true,
          dots:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite:true,
          dots:true,
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
    <div className='mt-10 md:mt-10 text-center'>
     <p className='text-cyan-400 text-xl font-bold  '>TESTIMONIAL</p>
      <h1 className='text-[2.1rem] md:text-[3.5rem] font-[800] leading-normal  md:m-5 text-gray-500 '>What Our Clients Say</h1>
      <div className="bg-cyan-400 m-5 rounded-2xl p-10">
      <Slider {...settings}>
        {data.map((elm,i)=>(
          
          <div key={i} className='flex justify-center ml-6  items-center p-2 '>
            
           
            <div className='flex flex-col items-center rounded-2xl gap-2 w-5/6 bg-white p-5 h-[24rem] md:h-[20rem] shadow-md shadow-black'>
              <Image src={elm.image} width={1000} height={1000} className='w-32 h-32 rounded-full shadow-md shadow-cyan-400' alt=''/>
              <h1 className='text-2xl text-cyan-400'>{elm.name}</h1>
              <p className='text-sm text-black'>{elm.profession}</p>
              {/* <p className='text-xs text-gray-600 p-2' >{elm.desc}</p> */}
            </div>

          </div>
     
        
        ))}
      </Slider>
  </div>
    </div>
  )
}

export default Testimonial
