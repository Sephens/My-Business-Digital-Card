import React from 'react'
import mycss from '../Styles/my.css'
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialGithubCircular } from 'react-icons/ti';

function Footer() {
  return (
    <div className='footer'>
      <TiSocialTwitter className='social-icons' id='twitter'/>
      <TiSocialFacebook className='social-icons' id='facebook'/>
      <TiSocialInstagram className='social-icons' id='instagram'/>
      <TiSocialGithubCircular className='social-icons' id='github'/>
    </div>
  )
}

export default Footer
