import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twittwer_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_icons">
          <img src={twittwer_icon} alt="" />
          <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={youtube_icon} alt="" />


        </div>

        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Jobs</li>
          <li>Terms of Use </li>
          <li>Legal Notice </li>
          <li>Netflix Clone </li>
          <li>Joshua Johny</li>
          <li>Contact Us</li>
          <li>Panackal Lmt. </li>
          <li>All Good</li>


        </ul>
        <p className='copy'>@5452151531313</p>
    </div>
  )
}

export default Footer