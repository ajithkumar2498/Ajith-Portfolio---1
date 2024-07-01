import React from 'react'
import './footer.css'


const Footer = () => {
  return<>
     <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ajithkumar</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">about</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/ajith_ak_2498/" className="footer__social-icon" target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/ajith-kumar-b0360a18a/" className="footer__social-icon" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/ajithkumar2498" className="footer__social-icon" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Ajithkumar All rights Reserved</span>
        </div>

     </footer>
  </>
}

export default Footer