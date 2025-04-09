'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export function VideoPlayerComp(props) {

    return (
        <ReactPlayer
            url={props.url}
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            loading="lazy"
        />
    )
}