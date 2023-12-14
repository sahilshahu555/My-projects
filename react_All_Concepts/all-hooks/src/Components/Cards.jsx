import {Link} from "react-router-dom"

 export const Cards=({elm})=>{
  

    return (
        <Link to={`/profile/${elm.id}`}>
        <div
        style={{display:"flex",justifyContent:"spaceBetween", alignItems:"center",flexDirection:"column",border:"2px solid skyblue", margin:"20px",padding:"20px"}}
       
        >
           <img src={elm.images[0]} alt="photo" style={{width:"200px",height:"200px"}}/>
           <h4>{elm.title}</h4>
           <p>{elm.price}</p>
           
        </div>
        </Link>
    )
}
