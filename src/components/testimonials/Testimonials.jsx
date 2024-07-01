import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './testimonials.css'
import {Data} from "../testimonials/Data.jsx"


const Testimonials = () => {
  return <>
    <section className="testimonials container section">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Projects </span>
        
        <Swiper className="testimonials__container"
             loop={true}
             spaceBetween={24}
             grabCursor={true}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               576: {
                 slidesPerView: 2,
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: 48,
               },
             }}
             modules={[Pagination]}
             >

            {Data.map(({id, image, title, description}) =>{
                return(
                    <SwiperSlide className='testimonials__card' key={id}>
                        <img src={image} alt="" className='testimonials__img'/>

                        <h3 className="testimonials__name">{title}</h3>
                        <p className="testimonials__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  </>
}

export default Testimonials  