import Image from "next/image"
import Link from "next/link"
const HairStyle = () => {
  const data = [
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/general-min-1.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Short-Haircuts-for-Men-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Crew-Cut-for-Men-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Fade-Haircut-for-Men-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Buzz-Cut-for-Men-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Side-Cut-for-Men-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/06/Caesar-Cut-min-853x1024.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Flat-Top-for-Men-2-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/04/Bowl-Cut-for-Men-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/06/Faux-Hawk-min-853x1024.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/06/Slicked-Back-Undercut-min-853x1024.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/05/Short-quiff-haircut-min-853x1024.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/05/Textured-crop-top-fade-min-853x1024.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/05/Thick-swept-back-undercut-min-853x1024.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/05/High-and-tight-fade-min.jpg",
    },
    {
      image:"https://www.beyoung.in/blog/wp-content/uploads/2020/05/Short-spiky-hair-min.jpg",
    },
    
  ];
  return (
    <div id="style" className="HairStyle bg-slate-200  flex flex-col justify-between     items-center gap-5 p-5 mt-20">
      <h1 className="text-2xl gradientText1 font-bold my-10 mt-5">
        {" "}
       LATEST HAIR STYLES
      </h1>
      <div className="flex flex-wrap gap-8 md:gap-14 mb-5 ">
        {data.map((elm, i) => (
          <Image
            key={i}
            className="w-36 m-auto md:w-56 md:h-64 rounded-xl ring-2 ring-red-300"
            src={elm.image}
            width={100}
            height={100}
            alt={i}
          />
        ))}
      </div>
      <Link href="#style">
        <button className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-xl">
          GO TO TOP
        </button>
      </Link>
    </div>
  );
};

export default HairStyle;
