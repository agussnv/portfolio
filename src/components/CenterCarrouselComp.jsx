'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { VideoPlayerComp } from '@/components/VideoPlayerComp'

export function CenterCarrouselComp(props) {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper h-[285px] w-[500px]"
        >
            {props.proyecto.map((media, index) => {
                return (
                    <SwiperSlide key={index} className="rounded-xl">
                        {media.includes('.mp4') ? (
                            <VideoPlayerComp url={media} />
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
    )
}