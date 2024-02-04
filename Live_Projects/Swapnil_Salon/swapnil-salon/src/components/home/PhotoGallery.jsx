import Image from 'next/image'
import Link from 'next/link'

const PhotoGallery = () => {

    const data=[
        {image:"https://media.istockphoto.com/id/522305300/photo/everything-should-be-perfect.webp?b=1&s=170667a&w=0&k=20&c=41ewUhPgAcq898MHcDjzfaiRHBIc5vLcnIp7tlkx_IE="},
        {image:"https://media.istockphoto.com/id/1397799794/photo/barber-cutting-hair-to-his-young-customer-with-his-trimmer.webp?b=1&s=170667a&w=0&k=20&c=wrib9mE60uwOa4EE3CdKjOL_hUKTnnC5Hyoq9XbyGls="},
        {image:"https://media.istockphoto.com/id/872361244/photo/man-getting-his-beard-trimmed-with-electric-razor.webp?b=1&s=170667a&w=0&k=20&c=B4RRIb8ASN7lrUPHmBdCbRuJ-I1jA68iszeDFw2Z0n8="},
        {image:"https://media.istockphoto.com/id/1083857412/photo/careful-barber-standing-near-the-client-and-using-straight-razor.jpg?s=612x612&w=0&k=20&c=QrHlQ_bPgu_LHEnLkfH5ONxmeUeZWWEFHOCNSCYohFg="},
    ]
    
  return (
    <div className='PhotoGalllery-Home bg-slate-200  flex flex-col justify-between items-center gap-5 p-5'>
        <h1 className='text-2xl gradientText1 font-semibold m-4 mt-5'> PHOTO GALLERY</h1>
        <div  className="flex flex-wrap gap-8 md:gap-14  ">
         {data.map((elm,i)=>
           <Image key={i} className="w-36 m-auto md:w-52 h-64 rounded-xl" src={elm.image} width={100} height={100} alt={i}
         />)}
        </div>
        <Link href="/salon/hairStyle">
        <button className='bg-red-500 hover:bg-red-400 text-white p-2 rounded-xl'
        >Explore Our Gallery</button>
        </Link>
      
    </div>
  )
}

export default PhotoGallery
