import React from 'react'
import './StreamNow.css'
import CreateStreamForm from '../components/LivePeer/CreateStreamForm'
import VideoPlayer from '../components/LivePeer/VideoPlayer'

const StreamNow = () => {
  return (
    <div className='streamNow-main'>
        <div className='streamWindow'>
            <VideoPlayer></VideoPlayer>
        </div>
        <CreateStreamForm></CreateStreamForm>
    </div>
  )
}

export default StreamNow