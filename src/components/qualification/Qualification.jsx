import React, {useState} from 'react'
import "./qualifications.css"

const Qualification = () => {
    const [toggleState, setToggleState]= useState(1)

    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return <>
      <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button---flex" : 
            "qualification__button button---flex"}
             onClick={()=> toggleTab(1)}
            >
                <i className="uil uil-graduation-cap
                 qualification__icon"></i> 
                 Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button---flex" : 
            "qualification__button button---flex"}
            onClick={()=> toggleTab(2)}
            >
                <i className="uil uil-briefcase-alt
                 qualification__icon"></i> 
                 Experience
            </div>
            <div className={toggleState === 3 ? "qualification__button qualification__active button---flex" : 
            "qualification__button button---flex"}
            onClick={()=> toggleTab(3)}
            >
                <i className="uil uil-briefcase-alt
                 qualification__icon"></i> 
                 Certifications
            </div>
        </div>

        <div className="qualification__sections">
                 <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                    "qualification__content"
                 }>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                           <span className="qualification__rounder"></span>
                           <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title"> Bsc Ccmputer Science</h3>
                                <span className="qualification__subtitle">Bishop Heber College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2019
                                </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">HSC Education</h3>
                                <span className="qualification__subtitle">NS Hr Sec School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>
                        </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                    </div> 

                    <div className="qualification__data">
                        <div></div>

                        <div>
                           <span className="qualification__rounder"></span>
                           <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">SSLC</h3>
                                <span className="qualification__subtitle">Bagya Matric School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                     2013- 2014
                                </div>
                        </div>
                    </div>
                 </div>

                 <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                    "qualification__content"
                 }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Full Stack Developer</h3>
                                <span className="qualification__subtitle">Free Lancer
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - present
                                </div>
                        </div>
                         <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                       
                    </div> 

                    <div className="qualification__data">
                        <div></div>

                        <div>
                           <span className="qualification__rounder"></span>
                           <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title"> Admin</h3>
                                <span className="qualification__subtitle">Business Plus Associates - BNI</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2024
                                </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Receptionist</h3>
                                <span className="qualification__subtitle">Hotel Theni International</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                        </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                    </div> 

                 </div>

                 <div className={toggleState === 3 ? "qualification__content qualification__content-active" :
                    "qualification__content"
                 }>
                   <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> <b>Certification :</b> <br /> Full Stack Developer</h3>
                                    <span className="qualification__subtitle">Guvi GeeK Pvt Ltd</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - 2024
                                    </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div> 

                    <div className="qualification__data">
                        <div></div>

                        <div>
                           <span className="qualification__rounder"></span>
                           <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title"> <b>Certification :</b> <br />Python</h3>
                                <span className="qualification__subtitle">Neo Orange Technologies</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019
                                </div>
                        </div>
                    </div>



                 </div>
            </div>
      </div>
      </section>
  </>
}

export default Qualification

