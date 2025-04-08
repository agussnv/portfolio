'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export function VideoPlayerComp(props) {

    // const [isReady, setIsReady] = useState(false)

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //       setIsReady(true)
    //     }, 500) // o menos, solo aseguramos que esté montado en cliente
    
    //     return () => clearTimeout(timeout)
    //   }, [])

    // if (!isReady) return <div>Cargando...</div>

    return (
        <ReactPlayer
            url={props.url}
            width="100%"
            height="100%"
            controls={false}
            muted={true}
            playing={true}
            loop={true}
        />
    )
}