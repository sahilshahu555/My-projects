import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='logo'>
      <img src="logo.svg" alt="" />
      <span>My Dashboard</span>
    </div>
    <div className='icons'>
      <img src="search.svg" alt=""  className='icon'/>
      <img src="app.svg" alt="" className='icon' />
      <img src="expand.svg" alt="" className='icon'/>
        <div className='notification'>
        <img src="notifications.svg" alt="" />
      <span>1</span>
        </div>
        <div className='user'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg" alt="" />
        <span>Sahil</span>
        </div>
      <img src="settings.svg" alt=""  className='icon'/>

    </div>

    </div>

  )
}

export default Navbar