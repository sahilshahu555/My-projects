"use client"


import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/app/context/store'

const Login = () => {
    const Router=useRouter()
    // const{authState,LoginUser}=useContext(MyContext)
    const {user,setUser,flag,setFlag} =useGlobalContext();

   

    const handleChange=(e)=>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(user.email=== "" || user.password=== ""){
        alert("Invalid Credentials")
        return;
      }
      if(user.email=== "swapnil@gmail.com" || user.password=== "swaunati"){
        alert("LOGIN Successful")
        setFlag(true)
      }
    }

    // console.log(flag)

     if(flag){Router.push("/")}
    // if(authState.isAuth){ return <Navigate to="/"/>}


  return (
       
     <div className='flex justify-center items-center flex-col w-full text-center mt-10'>
        
      <form onSubmit={handleSubmit}
      className='text-center border my-20 w-80 flex justify-center items-center flex-col p-10 m-5 gap-3 bg-slate-300 rounded-2xl shadow-lg shadow-violet-400/100 ... ' 
      >

       <h1 className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-14 m-2 rounded' >Login Form </h1>

       <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter Your Email' className='text-center p-1' />

       <input type="text" name="password" value={user.password} onChange={handleChange} placeholder='Enter Your Password' className='text-center p-1'/>
       
      

       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded-xl cursor-pointer ... hover:text-black' />
      </form>
    </div>
  )
}

export default Login;
