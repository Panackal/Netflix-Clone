import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
          <img src={hero_banner} className='banner-img'/>
          <div className='hero-cap'>
            <img src={hero_title} alt="" className='caption-img'/>
            <p>
            The Protector is a Turkish drama fantasy series starring Çağatay Ulusoy.
            </p>
            <div className="hero-bt">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn2'><img src={info_icon} alt="" />More Info</button>

            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"TOP RATED"} category={"top_rated"}/>
        <TitleCards  title={"POPULAR"} category={'popular'}/>
        <TitleCards title={"UPCOMING"} category={'upcoming'}/>
        <TitleCards title={"HOT ON NETFLIX"} category={'now_playing'}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home