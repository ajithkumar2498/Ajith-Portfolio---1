import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // <-- Added Navigation CSS

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./projects.css";
import { Data } from "./Data.jsx";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="projects__container">
        {/* Swiper Component */}
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
          }}
          pagination={{ clickable: true }}
          loop={true}
          simulateTouch={false}
          allowTouchMove={false}
          spaceBetween={24}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects__swiper"
        >
          {Data.map(({ id, image, title, description, deploy, github }) => (
            <SwiperSlide className="projects__card" key={id}>
              <div className="projects__img-wrapper">
                <img src={image} alt={title} className="projects__img" />
              </div>
              <h3 className="projects__name">{title}</h3>
              <p className="projects__description">{description}</p>
              <div className="projects_button_group">
                <a href={deploy} className="project__button deploy" target="_blank" rel="noreferrer">
                  Demo <i className="uil uil-external-link-alt"></i>
                </a>
                <a href={github} className="project__button github" target="_blank" rel="noreferrer">
                  Github <i className='bx bxl-github'></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows moved OUTSIDE Swiper but INSIDE Container */}
        <div className="nav-arrow prev-arrow"><i className="uil uil-angle-left-b"></i></div>
        <div className="nav-arrow next-arrow"><i className="uil uil-angle-right-b"></i></div>
      </div>
    </section>
  );
};

export default Projects;
