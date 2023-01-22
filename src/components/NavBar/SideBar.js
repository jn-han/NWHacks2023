import React from 'react'
import './SideBar.css'

const SideBar = ( props ) => {
  return (
    <div className='sidebar--whole'>
       {props.liveStreamers.map( liveStreamers => (
        <div>
          <p>{liveStreamers.name}</p>
          <img className='circular--img' src={liveStreamers.photo}></img>
        </div>
        ))
        }
    </div>
    
  )
}

export default SideBar