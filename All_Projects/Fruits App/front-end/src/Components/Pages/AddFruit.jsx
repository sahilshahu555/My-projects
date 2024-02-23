import {useState}from 'react'
import { useNavigate } from 'react-router-dom';

const AddFruit = () => {
  const navigate=useNavigate()
  const [flag,setFlag]=useState(false);
  const [fruit,setFruit]=useState({
        name:"",
        price:0,
        image:"",
        id:""
    })
    const handleChange=(e)=>{
      setFruit({...fruit,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        
      

         setFlag(true)
    }

    console.log(fruit)
    console.log(flag)

    if(flag){navigate("/")}
  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
            className='text-center bg-#3d3a3a '
      >
        
          <form onSubmit={handleSubmit}
          className=' text-center  w-80 flex justify-center items-center flex-col p-5 gap-3 bg-black rounded-2xl ' >

          <h1 className='text-white bg-gradient-to-r from-red-300 to-orange-300  py-2 px-14 m-2 rounded' > Fruit Details </h1> 

          <input type="text" name="name" value={fruit.name} onChange={handleChange} placeholder='Enter Fruit Name' className='text-center p-1'/>

          <input type="text" name="image" value={fruit.image} onChange={handleChange} placeholder='Enter Fruit Image' className='text-center p-1'/>

          <input type="number" name="price" value={fruit.price} onChange={handleChange} placeholder='Enter Fruit Price' className='text-center p-1'/>
          
          <input type="number" name="id" value={fruit.id} onChange={handleChange} placeholder='Enter Fruit ID' className='text-center p-1'/>


          <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500  py-1 px-5 m-2 rounded-xl hover:text-black cursor-pointer ...   shadow-lg shadow-white ... ' />
          
          </form>
       

    </div>
  )
}

export default AddFruit;

