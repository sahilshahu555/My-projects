import {useState}from 'react'
import { useNavigate } from 'react-router-dom';

const AddFruit = () => {
  const navigate=useNavigate()
  const [flag,setFlag]=useState(false);
  const [user,setUser]=useState({
        Title:"",
        Poster:"",
        Year:"",
        id:""
    })
    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // const newMovie={
        //   Title:user.Title,
        //   Poster:user.Poster,
        //   Year:user.Year,
        //    id:user.id 
        // }
        
      

         setFlag(true)
    }

    console.log(user)
    console.log(flag)

    if(flag){navigate("/")}
  return (
       
     <div  
     style={{display:"flex",justifyContent:"center",
             alignItems:"center", width:"100%"
            }} 
            className='text-center  '
      >
      <form onSubmit={handleSubmit}
      className='text-center  w-80 flex justify-center items-center flex-col p-5 m-5 gap-3 bg-slate-300 rounded-2xl shadow-lg shadow-violet-400/100 ...'
      >

       <h1 className='text-white bg-gradient-to-r from-red-300 to-orange-300  py-2 px-14 m-2 rounded' > Movie Details </h1> 

       <input type="text" name="Title" value={user.Title} onChange={handleChange} placeholder='Enter Movie Title' className='text-center p-1'/>

       <input type="text" name="Poster" value={user.Poster} onChange={handleChange} placeholder='Enter Movie Image' className='text-center p-1'/>

       <input type="text" name="Year" value={user.Year} onChange={handleChange} placeholder='Enter Movie Year' className='text-center p-1'/>
       
       <input type="number" name="id" value={user.id} onChange={handleChange} placeholder='Enter Movie ID' className='text-center p-1'/>


       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500  py-1 px-5 m-2 rounded-xl hover:text-black cursor-pointer ...   shadow-lg shadow-white ... ' />
       
      </form>
    </div>
  )
}

export default AddFruit;

