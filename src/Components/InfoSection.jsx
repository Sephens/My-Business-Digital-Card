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
    <a href='#' className='link'>github.com/Sephens</a>

    <div className='btn-div'>
    <button className='btn' id='email'> <MdEmail/> Email</button>
    <button className='btn' id='linkedin'><FaLinkedin/> LinkedIn</button>
    </div>

    </div>
  )
}

export default InfoSection
