const About = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center p-5 gap-5 ">
      <img
        src="https://officefruit.ie/wp-content/uploads/2016/07/fruit-delivered-1080x675.jpg"
        alt="photo" className="rounded-3xl w-96 md:w-full h-[19rem] md:h-[22rem]"
        
      />
      
      <div className="px-2 md:px-10 bg-white  rounded-3xl p-2">
        <h1 className="text-black mt-5 text-2xl md:text-4xl text-center mb-3">VISION AND MISSION</h1>
        <p className="p-5 text-xs md:text-xl text-gray-500 rounded-3xl">
          As our name suggests, at Fresh Fruits Company, our vision is to supply
          every one of our customers with the freshest, highest quality fruit
          and vegetables. In a country of expatriates, we aim to source products
          from every country, so everyone has a taste of home and the exotic
          flavours they may have never tried all with our signature freshness.
          Add to this our desire to supply you and your customers delicious
          foods at a price that is as terrific as the taste. 
        </p>
      </div>
    </div>
  );
};

export default About;
