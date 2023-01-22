import React, { useState } from 'react';
import { useCreateStream } from '@livepeer/react'
import './CreateStreamForm.css'
const streamName = 'New Stream ';


const CreateStreamForm = () => {
    const [streamName, setStreamName] = useState('');

    const {
        mutate: createStream,
        data: stream,
        status,
    } = useCreateStream({ name: streamName })

  return (
    <div>
        <input 
            className="name--text"
            type="text"
            placeholder="Stream name"
            onChange={(e) => setStreamName(e.target.value)}
        />

        <button
            className='create--stream--btn'
            onClick={() => {
            createStream?.();
            }}
            disabled={status === 'loading' || !createStream}
            >
        Create Stream
        </button>

        <div className='streamKey'>Stream Key: </div>
        <div className='streamKey'>Status: {status}</div>
    </div>
  )
}

export default CreateStreamForm