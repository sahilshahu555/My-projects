


const Card = ({elm}) => {
  return (
    <div className="flex flex-col justify-around items-center gap-1 m-1
      rounded-tr-3xl rounded-bl-3xl
    lg:transition lg:ease-in-out lg:delay-150 bg-yellow-300 lg:hover:-translate-y-0.5 lg:hover:scale-105 hover:bg-white lg:duration-300 ... hover:shadow-md hover:shadow-yellow-500
    ">
      <img src={elm.image} alt={elm.id} className="w-60 h-40 md:h-48 lg:h-54 rounded-tr-2xl object-fill"  />
      <h1 className="text-gray-500 font-bold text-xl m-1">{elm.name}</h1>
    
      <div className="flex  justify-around items-center gap-1 lg:gap-10  m-2">
        <p className="text-gray-500 font-medium text-lg"> ₹. 100</p>
        
        <button 
        className="text-white font-medium bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:py-1 lg:px-6  px-3 m-1 hover:text-black
                   rounded-xl border-2 hover:bg-yellow-400 curser-pointer
                   shadow-lg shadow-gray-100 ...
                   "
        
        >Buy</button>
      </div>
      
    </div>
  )
}

export default Card