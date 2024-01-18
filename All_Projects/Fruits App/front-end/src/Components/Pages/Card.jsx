

const Card = ({elm}) => {
  return (
    <div className="flex flex-col justify-around items-center border-2 rounded-2xl 
      bg-red-300
    ">
      <img src={elm.image} alt={elm.id} className="w-60 h-60 rounded-xl"  />
      <h1 className="text-gray-500 font-semibold">{elm.name}</h1>
      <p className="text-gray-500 font-medium"> ₹. {elm.price}</p>
    </div>
  )
}

export default Card