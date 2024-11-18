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
        
        <div className="projects__container" >

            {Data.map(({id, image, title, description, deploy, github}) =>{
                return(
                    <div className='projects__card' key={id}>
                        <img src={image} alt="" className='projects__img'/>
                         <a href={deploy} className="project__button button--flex" target='blank'>Deploy <i className="uil uil-angle-right project__button-icon"></i> </a>
                         <a href={github} className="project__button button--flex" target='blank'>Github <i className='bx bxl-github project__button-icon'></i> </a>
                        <h3 className="projects__name">{title}</h3>
                        <p className="projects__description">{description}</p>
                    </div>
                )
            })}
        </div>
    </section>
  </>
}

export default Projects