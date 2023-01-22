import React from 'react'
import './Friends.css'
import Genres from '../components/Genres'

const Friends = () => {
  return (
    <div className='friends--view'>
      <div className='friends-header'>
        <h1>Friends</h1>
        <h4 className='display--friends'>49 Friends</h4>
      </div>
      <Genres></Genres>
      <h2>Live Friends</h2>
    </div>
  )
}

export default Friends