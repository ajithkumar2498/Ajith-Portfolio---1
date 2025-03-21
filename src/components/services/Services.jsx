import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState]= useState(0)

    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return <>
     <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">My Skills</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title"> Full Stack <br/> Developer </h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(1)}>View More  
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
                        <div className="services__modal-content">
                           <i onClick={()=>toggleTab(0)} className="uil uil-times 
                           services__modal-close"></i>


                           <h3 className="services__modal-title">Full Stack Web Developer</h3>
                           <p className="services__modal-description">Services with more than 9 months of experience.
                            providing quality work to clients and companies.
                           </p>
                           <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop a User Interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web Page Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I create a Element Interactions.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I Position your Company Brand.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Design and Mockups of Products for Companies.
                                </p>
                            </li>
                           </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content"> 
                    <div>
                        <i className="fa-solid fa-object-group services__icon"></i>
                        <h3 className="services__title">Canva <br />Designer</h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(2)}>View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
                        <div className="services__modal-content">
                           <i onClick={()=> toggleTab(0)}className="uil uil-times 
                           services__modal-close"></i>


                           <h3 className="services__modal-title">canva Designer</h3>
                           <p className="services__modal-description">Services with more than 1.5 years of experience.
                            providing quality work to clients and companies.
                           </p>
                           <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop a Ad poster design.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                  I Create a customized poster design for all customers
                                </p>
                            </li>
                           </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="far fa-file-powerpoint services__icon"></i>
                        <h3 className="services__title">PPT <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={()=> toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
                        <div className="services__modal-content">
                           <i onClick={()=>toggleTab(0)} className="uil uil-times 
                           services__modal-close"></i>

                           <h3 className="services__modal-title">PPT Designer</h3>
                           <p className="services__modal-description">Services with more than 2 years of experience.
                            providing quality work to clients and companies.
                           </p>
                           <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create a effective ppt for business presentation.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create a Unique ppt design for Infographic content
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I create a customized ppt design for presenting their business in unique style.
                                </p>
                            </li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>

     </section>
  </>
}

export default Services