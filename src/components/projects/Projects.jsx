import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './projects.css'
import {Data} from "./Data.jsx"


const Projects = () => {
  return <>
    <section className="projects container section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Projects </span>
        
        <Swiper className="projects__container"
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

            {Data.map(({id, image, title, description, deploy, github}) =>{
                return(
                    <SwiperSlide className='projects__card' key={id}>
                        <img src={image} alt="" className='projects__img'/>
                         <a href={deploy} className="project__button button--flex">Deploy <i className="uil uil-angle-right project__button-icon"></i> </a>
                         <a href={github} className="project__button button--flex">Github <i className='bx bxl-github project__button-icon'></i> </a>
                        <h3 className="projects__name">{title}</h3>
                        <p className="projects__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  </>
}

export default Projects