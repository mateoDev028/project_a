import React from 'react'
import ButtonNavbar from '../button-navbar/ButtonNavbar'
import '../navbar/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
          <h3 className="navbar-left-text">Proyecto</h3>
      </div>
      <div className="navbar-right">
        <div className="navbar-button-options">
            <ButtonNavbar />
        </div>
      </div>    
    </div>
  )
}

export default Navbar