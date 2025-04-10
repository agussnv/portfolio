'use client'

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { VideoPlayerComp } from '@/components/VideoPlayerComp'
import { Loader2 } from 'lucide-react';

export function CenterCarrouselComp({width, height, ...props}) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const waitForMedia = async () => {
            const mediaPromises = props.proyecto.map((media) => {
                if (media.includes('.mp4')) {
                    return preloadVideo(media)
                } else {
                    return preloadImage(media)
                }
            })

            await Promise.all(mediaPromises)
            setIsLoaded(true)
        }

        waitForMedia()
    }, [props.proyecto])

    function preloadImage(src) {
        return new Promise((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = resolve
            img.onerror = resolve
        })
    }

    function preloadVideo(src) {
        return new Promise((resolve) => {
            const video = document.createElement('video')
            video.src = src
            video.onloadeddata = resolve
            video.onerror = resolve
        })
    }

    if (!isLoaded) return <Loader2 className="w-7 h-7 animate-spin" />


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                style={{ width: width, height: height }}
            >
                {props.proyecto.map((media, index) => {
                    return (
                        <SwiperSlide key={index} className="rounded-xl">
                            {media.includes('.mp4') ? (
                                <VideoPlayerComp url={media} className="rounded-xl"/>
                            ) : (
                                <img
                                    src={media}
                                    alt={`media-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.div>
    )
}