

const Card = ({elm}) => {
  return (
    <div className="flex flex-col justify-around items-center gap-2
      shadow-lg shadow-gray-400/100 ... rounded-tr-3xl rounded-bl-3xl
    transition ease-in-out delay-150 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 ...
    ">
      <img src={elm.image} alt={elm.id} className="w-60 h-60 rounded-tr-2xl"  />
      <h1 className="text-gray-500 font-bold text-xl m-1">{elm.name}</h1>
      <div className="flex justify-around items-center gap-10 m-2">
        <p className="text-gray-500 font-medium text-lg"> ₹. {elm.price}</p>
        <button 
        className="text-gray-500 font-medium bg-red-300 py-1 px-6 m-1
                   rounded-xl border-2 hover:bg-yellow-400 curser-pointer
                   shadow-lg shadow-gray-100
                   "
        
        >Buy</button>
      </div>
      
    </div>
  )
}

export default Card