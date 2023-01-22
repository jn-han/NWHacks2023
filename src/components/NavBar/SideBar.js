import React from 'react'
import './SideBar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const SideBar = ( props ) => {
  
  return (


    <div className='sidebar--whole'>

    <div className="mySidebar" class="sidebar">


    </div>
        {props.liveStreamers.map( liveStreamers => (
        <div id="mySidenav" class="sidenav">
          <i class="fas fa-users"></i>
          <img className='circular--img' src={liveStreamers.photo}></img>
        </div>
        ))
        }
        
    </div>
  )
}

export default SideBar