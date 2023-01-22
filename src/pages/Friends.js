import React from 'react'
import './Friends.css'
import Genres from '../components/Genres'
import VideoPlayer from '../components/LivePeer/VideoPlayer'
import Profile from '../components/Profile'

const Friends = () => {
  return (
    <div className='friends--view'>
      <div className='friends-header'>
        <h1>Friends</h1>
        <h4 className='display--friends'>49 Friends</h4>
      </div>
      <Genres></Genres>
      <h2 className='live-friends-title'>Live Friends</h2>
      <div className='live-friends-panel'>
        <VideoPlayer id={"ed645w942inanmsp"}/>
        <Profile></Profile>
      </div>
      
    </div>
  )
}

export default Friends