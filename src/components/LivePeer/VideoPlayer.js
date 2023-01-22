import React from 'react'
import { Player } from '@livepeer/react'

const VideoPlayer = (props) => {
  return (
    <Player
        playbackId={props.id}
        theme={{
            colors: {
                accent: '#3BC68F',
            }
        }}
        controls={{
          autohide: 3000,
        }}
        showLoadingSpinner={true}
        showPipButton

        >
    </Player>
  )
}

export default VideoPlayer