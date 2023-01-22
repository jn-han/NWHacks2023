import React from 'react'
import './SideBar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const SideBar = ( props ) => {
  
  return (


    <div className='sidebar--whole'>

    <div className="mySidebar" class="sidebar">

    </div>
      <FontAwesomeIcon icon= {faUsers} className= "icon"></FontAwesomeIcon>
        {props.liveStreamers.map( liveStreamers => (
        <div id="mySidenav" className="sidenav">
          <img className='circular--img' src={liveStreamers.photo}></img>
        </div>
        ))
        }
        
    </div>
  )
}

export default SideBar