import React from 'react';
import "./Hero.css"
import Header from '../Heder/Header';
import Heart from '../img/heart.png'
import banner from '../img/banner-img-1.png'
import back from '../img/banner-circle-one.png';
import { motion } from "framer-motion";

const Hero = () => {
  const tarsition={type:"spring", duration:3}
  const mobile=window.innerWidth<=767 ? true:false
  return (
   <>
   <div className="hero">
    <div className="blur hero-b"></div>
        <div className="left-hero">
          <Header/>
          <div className="bestadd">
            <motion.div 
            
            initial={{left:mobile?"160px":"238px"}}
            whileInView={{left:"8px"}}

            transition={{...tarsition, type:"tween"}}>          
              
              </ motion.div>
            <span>The best fitness club in the town</span>
          </div>
          <div className="hero-text">
            <div>
            <span className='strok-text'>Shape</span> <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
        <span>
            Enterprises, Developers of  B2B/B2C,  Private Investors of all sizes can benefit by partnering with us to choose, engineer,  deploy and scale their Digital Transformation Initiatives.                               
            </span>               
            </div>
          </div>
          <div className='figer'>
              <div>
                <span>+140</span>
                <span>Successfully Trained
</span>
              </div>
              <div>
                <span>+100</span>
                <span>Classes Completed
</span>
              </div>
              <div>
                <span>+80</span>
                <span>Satisfaction Rate
</span>
              </div>
              
          </div>
          <div className="hero-button">
            <button className="btn">Get Start</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right-hero">
            <button className='btn'>Join Now</button>
            <motion.div 
            
            initial={{right:"-1rem"}}
            whileInView={{right:"4rem"}}

            transition={{...tarsition, type:"tween"}} className="heart-rate">
            <img src={Heart} alt=''/>
            <span>Heart Rate</span>
            <span>116 BPN</span>
            </ motion.div>
            <div className="hero-image">
            
              <img src={banner} alt=''  />
              <motion.img src={back} alt='' initial={{right:"-1rem"}}
            whileInView={{right:"2rem"}}

            transition={tarsition} className='heroback'/>
            </div>
        </div>
   </div>
   </>
  )
}

export default Hero