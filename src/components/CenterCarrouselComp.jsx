'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import ReactPlayer from 'react-player';
import { VideoPlayerComp } from '@/components/VideoPlayerComp'


const media = [
    '/media/HolaBarri-MVP.mp4',
    '/media/captura.png',
    '/media/captura1.png',
    '/media/captura2.png',
    '/media/captura3.png',
]

export function CenterCarrouselComp() {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper h-[285px] w-[500px]"
        >
            {media.map((map, index) => {
                return (
                    <SwiperSlide key={index} className="rounded-xl">
                        {map.includes('.mp4') ? (
                            <VideoPlayerComp url={map} />
                        ) : (
                            <img
                                src={map}
                                alt={`media-${index}`}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}