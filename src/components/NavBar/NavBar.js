import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'



const NavBar = (props) => {
  return (
      <header className= "header">
        {/* <input type='text'></input> */}
          <nav>
            <ul>

            <li> <input className= "textBox" type='text'></input></li>
             <li><Link className= "Following" to="/following" title>Following</Link></li>
             <li><Link className= "Friends" to="/friends" title>Friends</Link></li>
            </ul>
         </nav>
        <div className="circular">
          <img src={props.personalSrcImg} />
        </div>

    {/* user profile  */}
      </header>
  )
}

export default NavBar