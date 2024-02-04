import Image from "next/image"

const PricingPlane = () => {
    const data=[
        {
         icon :"https://media.istockphoto.com/id/915640558/photo/close-up-of-hairstylists-hands-cutting-strand-of-mans-hair.webp?b=1&s=170667a&w=0&k=20&c=5x-PvSuYnKc1lklcwPk2sLKS3suHsDriSMn7nmsKpvA=",
         name:"Hair Cutting Style",
         price:"50",
         
        },
        {
          icon :"https://media.istockphoto.com/id/899312480/photo/at-the-hairdresser-washing-hair.webp?b=1&s=170667a&w=0&k=20&c=94JMudFmtqCVZguPBjYrcagNx1Ys4I0KiOzaxemHiP8=",
          name:"Hair Washing",
          price:"50",
         
        },
        {
          icon :"https://media.istockphoto.com/id/929581612/photo/ginger-bearded-guy-at-the-barber-shop.webp?b=1&s=170667a&w=0&k=20&c=Wt5YerexBBxrCAV8cTxMm5rtYn_eiwIMtnB366Q4zdY=",
          name:"Stylist Shaving",
          price:"50",
         
        },
        {
          icon :"https://media.istockphoto.com/id/159041189/photo/man-at-hairdresser.jpg?s=612x612&w=0&k=20&c=htFAjK8VpFNWERXjbkPnJdFB_GjvZzMW8H_oWPnHSZg=",
          name:"Multi Hair Colors",
          price:"50",
         
        },
        {
          icon :"https://media.istockphoto.com/id/1182948519/photo/close-up-of-relaxed-man-during-head-massage-at-spa-center.jpg?s=612x612&w=0&k=20&c=kvtBg2tslHMDqYlOuzt1XQjY3hHucHtxqj0v9YN5U1I=",
         name:"Body Treatments",
         price:"50",
         
        },
        {
          icon :"https://media.istockphoto.com/id/640281394/photo/young-man-enjoying-hairwash-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=p1tv-0IjbCoeJ38nW1lyVlzzTwNsdLe-yzymC9M5xV8=",
          name:"Beauty & Spa",
          price:"50",
        
        },
        
      ]

  return (
    <div className="PricingPlane-Home  text-white flex flex-col  px-6 md:px-16   justify-around items-center     gap-5 md:gap-10  mb-14  ">
      <h1 className="text-2xl gradientText1 font-bold mt-10 tracking-wider">OUR PRICING </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 rounded-xl bg-slate-200 text-black p-8 md:p-20 w-full md:w-11/12">
        {data.map((elm)=>
        <div className="flex justify-around items-center  gap-2 ring-1 ring-red-300 bg-white rounded-xl p-2">
        <Image src={elm.icon} width={50} height={50} className="rounded-full"
        />
        <h1 className="gradientText1 text-xs w-32 md:w-56 text-center md:text-lg font-semibold">{elm.name}</h1>
        <p className="font-semibold text-gray-500">₹ {elm.price}</p>

    </div>
        )}
            
            
            

      </div>
      

    </div>
  )
}

export default PricingPlane
