import React from 'react'
import './SideBar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = ( props ) => {
  
  return (

    <div className='sidebar--whole'>

       {props.liveStreamers.map( liveStreamers => (
        <div id="mySidenav" class="sidenav">
          <img className='circular--img' src={liveStreamers.photo}></img>
        </div>
        
        ))
        }
    </div>
    
  )
}

export default SideBar