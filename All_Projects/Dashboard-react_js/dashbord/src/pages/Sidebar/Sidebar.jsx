import React from 'react'
import {Link } from 'react-router-dom';
import "./sidebar.scss"
import {data} from "../../Data/data"
const Sidebar = () => {
  
  return (
    <div className="menu">
      {data.map((item)=>(
      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.ListItems.map((elm)=>(
          <Link to={elm.url} className="listItems" key={elm.id}>
           <img src={elm.icon} alt=""/>
           <span className="listItemTitle">{elm.title} </span>
         </Link>
        ))}
      </div>
      ))}
    </div>
  )
}

export default Sidebar