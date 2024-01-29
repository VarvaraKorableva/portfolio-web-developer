import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram, FaGoogle } from 'react-icons/fa'
import './Footer.css'

function Footer() {

return (
    <footer className='footer'>
        <ul className='footer__contact-container-wrapper'>
            <li className='footer__contact-item footer__contact-item-wrapper'>
                <a className='footer__contact-item-link' href='mailto:varkor90@gmail.com' target='_blank'>
                varkor90@gmail.com
                </a>
            </li>
            <li className='footer__contact-item'>+972533646394</li>
        </ul>
        <ul className='footer__contact-container'>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='mailto:varkor90@gmail.com' target='_blank'>
                    <FaGoogle />
                </a>
            </li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://github.com/VarvaraKorableva' target='_blank'>
                    <FaGithub />
                </a>
            </li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://www.linkedin.com/in/varvara-korableva/' target='_blank'>
                    <FaLinkedin />
                </a>
            </li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://www.instagram.com/varvarakorableva/' target='_blank'>
                    <FaInstagram />
                </a>
            </li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://wa.me/+79163270427' target='_blank'>
                    <FaWhatsapp />
                </a>
            </li>
            <li className='footer__contact-item'>
                <a className='footer__contact-item-link' href='https://t.me/VarvaraKorableva' target='_blank'>
                    <FaTelegram />
                </a>
            </li>
        </ul>
    </footer>
)
}

export default Footer;