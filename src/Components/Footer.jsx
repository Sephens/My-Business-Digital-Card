import React from 'react'
import '../Styles/my.css'
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialGithubCircular } from 'react-icons/ti';

function Footer() {
  return (
    <div className='footer'>
      <a href='https://twitter.com/_Sephens'><TiSocialTwitter className='social-icons' id='twitter'/></a>
      <a href='https://www.facebook.com/adenux.sephens'><TiSocialFacebook className='social-icons' id='facebook' /></a>
      <a href='https://www.instagram.com/_adenux/' ><TiSocialInstagram className='social-icons' id='instagram' href=''/></a>
      <a href='https://github.com/Sephens'><TiSocialGithubCircular className='social-icons' id='github' /></a>
    </div>
  )
}

export default Footer
