import React, { useState } from 'react'
import './StreamNow.css'
import CreateStreamForm from '../components/LivePeer/CreateStreamForm'
import VideoPlayer from '../components/LivePeer/VideoPlayer'
import Uploader from '../components/LivePeer/Uploader'

const StreamNow = () => {
    const [playbackID, setPlaybackID] = useState('');
    const [VODplaybackID, setVODPlaybackID] = useState('');

    const playbackIDHandler = (playbackID) => { 
        setPlaybackID(playbackID);
        console.log(playbackID);
    } 

    const VODplaybackIDHandler = (e) => {
        setVODPlaybackID(e.target.value)
        console.log(e.target.value)
    }

  return (
    <div className='streamNow-main'>
        <div className='streamWindow'>
            <VideoPlayer id={playbackID}></VideoPlayer>
        </div>
        <h2>Start Streaming Below!</h2>
        <CreateStreamForm playbackIDHandler={playbackIDHandler}></CreateStreamForm>
        <h2>Upload Videos Below!</h2>

        <Uploader></Uploader>
        <div className='streamWindow'>
            <VideoPlayer id={VODplaybackID}></VideoPlayer>
        </div>

        <input type="text" className="text"  placeholder='Enter PlaybackID from livepeer.studio here!' onChange={VODplaybackIDHandler} />


    </div>
  )
}

export default StreamNow