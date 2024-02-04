import Image from "next/image"

const ServiceHome = () => {
  const data=[
    {
     icon :"https://media.istockphoto.com/id/915640558/photo/close-up-of-hairstylists-hands-cutting-strand-of-mans-hair.webp?b=1&s=170667a&w=0&k=20&c=5x-PvSuYnKc1lklcwPk2sLKS3suHsDriSMn7nmsKpvA=",
     name:"Hair Cutting Style",
     price:"50",
     desc:"The process of cutting & texturizing  using any hair cutting tools in order to create a shape to satisfy the customer."
    },
    {
      icon :"https://media.istockphoto.com/id/899312480/photo/at-the-hairdresser-washing-hair.webp?b=1&s=170667a&w=0&k=20&c=94JMudFmtqCVZguPBjYrcagNx1Ys4I0KiOzaxemHiP8=",
      name:"Hair Washing",
      price:"50",
     desc:"Hair washing is the cosmetic act of keeping hair clean by washing it with with shampoo to remove dust from hair."
    },
    {
      icon :"https://media.istockphoto.com/id/929581612/photo/ginger-bearded-guy-at-the-barber-shop.webp?b=1&s=170667a&w=0&k=20&c=Wt5YerexBBxrCAV8cTxMm5rtYn_eiwIMtnB366Q4zdY=",
      name:"Stylist Shaving",
      price:"50",
     desc:"It include washing, coloring and cleaning of hair, also provides variety of hair styling trends."
    },
    {
      icon :"https://media.istockphoto.com/id/159041189/photo/man-at-hairdresser.jpg?s=612x612&w=0&k=20&c=htFAjK8VpFNWERXjbkPnJdFB_GjvZzMW8H_oWPnHSZg=",
      name:"Multi Hair Colors",
      price:"50",
     desc:"Hair coloring, or hair dyeing, is the practice of changing the color of the hair on human's heads."
    },
    {
      icon :"https://media.istockphoto.com/id/1182948519/photo/close-up-of-relaxed-man-during-head-massage-at-spa-center.jpg?s=612x612&w=0&k=20&c=kvtBg2tslHMDqYlOuzt1XQjY3hHucHtxqj0v9YN5U1I=",
     name:"Body Treatments",
     price:"50",
     desc:"A body treatments is an oasis of calm where people actively do something for the relaxation of body, mind, and spirit. "
    },
    {
      icon :"https://media.istockphoto.com/id/640281394/photo/young-man-enjoying-hairwash-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=p1tv-0IjbCoeJ38nW1lyVlzzTwNsdLe-yzymC9M5xV8=",
      name:"Beauty & Spa",
      price:"50",
     desc:"We provide well-rounded cosmetic services to enhance customer appearance and boost their confidence  "
    },
    
  ]
    return (
      <div className="Service-Home flex flex-col justify-around items-center bg-slate-200 py-10 md:py-14">
        <h1 className="text-2xl font-bold mb-2 text-slate-500 ">SERVICE WE PROVIDE</h1>
        <p className="text-gray-400 ">We are providing best services at best market cost</p>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3  md:gap-14">
          {data?.map((elm,i)=>
              <div key={i} className="flex flex-col justify-between items-center  gap-2 md:gap-4 border-2  md:w-60 m-4  md:m-5 bg-white shadow-md shadow-gray-500  rounded-xl">
                <Image src={elm.icon} alt="icon" className="w-full h-36 rounded-t-xl " width={100} height={100} />
                <h1 className=" font-bold gradientText1 font-sans">{elm.name}</h1>
                <p className=" text-xs text-center leading-4 p-3 mb-1 md:p-3 font-sans text-gray-500">{elm.desc}</p>
              
              </div>
          )}
        </div>
    </div>
    )
  }
  
  export default ServiceHome
  