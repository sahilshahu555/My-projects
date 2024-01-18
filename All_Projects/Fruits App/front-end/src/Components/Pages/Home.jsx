
import Card from "./Card"
import {fruits} from "./data"



const Home = () => {
  console.log(fruits)
  return (
    <div >
      <div>
        <h1
        className="text-center text-gray-500 font-bold text-xl bg-white w-36 m-auto py-1 px-2 rounded-tr-xl rounded-bl-xl"
        >Fresh Fruits</h1>
      </div>
      <div className="grid  md:grid-cols-3  lg:grid-cols-5 gap-10 m-5 ">
      {fruits?.map((elm,i)=><Card elm={elm} key={i}/>)}
      </div>
    </div>
  )
}

export default Home