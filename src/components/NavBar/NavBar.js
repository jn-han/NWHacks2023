import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'



const NavBar = (props) => {
  return (
      <header className= "header">
        {/* <input className= "textBox" type='text'></input> */}
        {/* <img className="logo" src="hi" /> */}
        <div className= "logo">
        <li><Link className= "logo" to="/" title>絆</Link></li>
        </div>
          <nav>
            <ul>
            <div className="grid-container">
             <li><input className= "textBox" type='text'></input></li>
             <li><Link className= "Friends" to="/friends" title>Friends</Link></li>
             <li><Link className= "Following" to="/following" title>Following</Link></li>
            </div>
            </ul>
         </nav>
        <div>
          <Link to='/streamNow'><button className= "stream">Go Live</button></Link>
        </div>
        <div className="circular">
        <img src={props.personalSrcImg} />
        </div>

    {/* user profile  */}
      </header>
  )
}

export default NavBar