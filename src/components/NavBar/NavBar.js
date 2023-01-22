import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'



const NavBar = (props) => {
  return (
      <header className= "header">
        {/* <input className= "textBox" type='text'></input> */}
        {/* <img className="logo" src="hi" /> */}
          <nav>
            <ul>
            <div className="grid-container">
            <img className="logo" src="hi"  />
             <li><input className= "textBox" type='text'></input></li>
             <li><Link className= "Friends" to="/friends" title>Friends</Link></li>
             <li><Link className= "Following" to="/following" title>Following</Link></li>
            </div>
            </ul>
         </nav>
        <div>
          <button className= "stream">Go Live</button>
        </div>
        <div className="circular">
          <Link to="">hello</Link>
        </div>

    {/* user profile  */}
      </header>
  )
}

export default NavBar