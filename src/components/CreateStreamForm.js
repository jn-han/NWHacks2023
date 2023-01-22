import React, { useState } from 'react';
import { useCreateStream } from '@livepeer/react'
const streamName = 'New Stream ';


const CreateStreamForm = () => {
    const [streamName, setStreamName] = useState('');

    const {
        mutate: createStream,
        data: stream,
        status: createStatus,
    } = useCreateStream({ name: streamName })

  return (
    <div>
        <input
            type="text"
            placeholder="Stream name"
            onChange={(e) => setStreamName(e.target.value)}
        />
 
        <button
            onClick={() => {
            createStream?.();
            }}
            disabled={createStatus === 'loading' || !createStream}
        >
        Create Stream
        </button>
    </div>
  )
}

export default CreateStreamForm