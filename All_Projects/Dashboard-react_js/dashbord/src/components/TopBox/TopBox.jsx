import React from 'react'
import "./topbox.scss"
import { userData } from '../../Data/users'
const TopBox = () => {
  return (
    <div className='topbox'>
        <h1>Top Deals</h1>
        <div className="list">
          {userData.map((elm)=>(
            <div className="listItem" key={elm.id}>
              <div className="user">
                <img src={elm.image} alt="" />
                <div className="userTexts">
                  <span className="userName">{elm.name}</span>
                  <span className="email">{elm.email}</span>
                </div>
              </div>
                <span className="amount"> {elm.amount}</span>
             

            </div>
          ))}
        </div>
    </div>
  )
}

export default TopBox