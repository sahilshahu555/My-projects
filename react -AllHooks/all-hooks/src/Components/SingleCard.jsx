
import {useParams,Link} from"react-router-dom";
import {useEffect,useState} from"react";
import axios from"axios";




export const SingleCard=()=>{

    const {id}=useParams();
    const [product,setProduct]= useState({})
    const [image,setImage]= useState([])



    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res)=>{setProduct(res.data) 
            setImage(res.data.images)})
        .catch((err)=>console.log(err))
    },[])
   
// console.log(product);
// console.log(image);

    return (
        
        <div>
                <h1>{product?.title}</h1>
                <p>{product?.price}</p>
                <img src={image[0]} style={{width:"400px",height:"400px"}}/>
                <Link to={"/"}><button>Go to Home</button></Link>
        </div>
    )
}