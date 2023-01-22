import React from 'react'
import './NavBar.css'



const NavBar = (props) => {
  return (
      <header className= "header">
          <nav>
            <ul>
             <li><a className= "Following" to="/" title>Following</a></li>
             <li><a className= "Friends" to="/friends" title>Friends</a></li>
            </ul>
         </nav>
         <input type='text'></input>
        <div className="circular">
          <img src={props.personalSrcImg} />
        </div>

    {/* user profile  */}
      </header>
  )
}

export default NavBar