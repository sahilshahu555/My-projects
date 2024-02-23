
import Card from "./Card"
import {fruits} from "./data"



const Home = () => {
  console.log(fruits)
  return (
    <div >
     
      <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5 gap-5 md:gap-10 mx-5 my:5 lg:mx-5 mb-10">
      {fruits?.map((elm,i)=><Card elm={elm} key={i}/>)}
      </div>
    </div>
  )
}

export default Home