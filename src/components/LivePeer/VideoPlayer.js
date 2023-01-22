import React from 'react'
import { Player } from '@livepeer/react'

const VideoPlayer = (props) => {
  return (
    <Player
        playbackId={props.id}
        theme={{
            colors: {
                accent: '00a55f'
            }
        }}
        showTitle={true}
        >
    </Player>
  )
}

export default VideoPlayer