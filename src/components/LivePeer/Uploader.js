import React, { useState } from 'react'
import { useCreateAsset } from '@livepeer/react';



const Uploader = () => {
    const [video, setVideo] = useState();
    const {
        mutate: createAsset,
        data: asset, 
        status,
        progress,
        error,
    } = useCreateAsset(
        video
        ? {
            sources: [{ name: video.name, file:video }],
        }
        : null
    );
  return (
    <div>
        <input type='file' onChange={(e) => setVideo(e.target.files[0])}></input>
        <button onClick={() => {
                createAsset?.();
        }}
            > Upload files</button>
        <p>Status: {status}</p>
        <p>Progress: {JSON.stringify(progress)}</p>
    </div>
  )
}

export default Uploader