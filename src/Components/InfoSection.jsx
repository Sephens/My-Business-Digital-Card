import React from 'react'
import Banner from '../assets/banner.jpg'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import mycss from '../Styles/my.css'

function InfoSection() {
  return (
    <div className='info-sec'>
    <img src={Banner} alt="myimage" className="info-img"/>
    <h1 className='info-sec-header'>Steven Odhiambo</h1>
    <h3 className='info-sec-desc'>Fullstack Engineer</h3>
    <a href='https://portfolio-lake-five-68.vercel.app/' className='link'>steve@dev.com</a>

    <div className='btn-div'>
    <a className='btn' id='email'> <MdEmail id='icon'/> Email</a>
    <a className='btn' id='linkedin' href='https://www.linkedin.com/in/steven-adenux/'><FaLinkedin  id='icn'/> LinkedIn</a>
    </div>

    </div>
  )
}

export default InfoSection
