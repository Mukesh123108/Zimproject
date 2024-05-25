import React, { useState } from 'react';
import "./Testimonial.css"
import {TestiData} from "./TestiData" ;
import { motion } from "framer-motion";

const Testimonial = () => {
  const tarsition={type:"spring", duration:3}
  const [selected,setSelected]=useState(0);
  const Datalenth=TestiData.length;


  return (
    <>
    <div className="testimonial">
      <div className="left-t">
        <span className="strok-text">What they</span>
        <span>Say About Us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        tarsition={tarsition}
        
        >  {TestiData[selected].Discrip}</motion.span>
       
        <span style={{color:"grey"}}> {TestiData[selected].Name}
        -{" "}
        {TestiData[selected].staus}
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity:0, x:-100}}
        tarsition={{...tarsition, duration:2}}
        whileInView={{opacity:1, x:0}}
        >

        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        tarsition={{...tarsition, duration:2}}
        whileInView={{opacity:1, x:0}}
        ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        tarsition={tarsition}
        
        src={TestiData[selected].imgSrcs}/>
      <div className='arrow'>
          <span><i className="fa fa-arrow-left" onClick={()=>{
            selected===0?setSelected(Datalenth-1):setSelected((prev)=>prev-1)
          }}></i></span>{" "} {" "} {" "}
          <span><i className="fa fa-arrow-right" onClick={()=>{
          selected===Datalenth-1?setSelected(0):setSelected((prev=>+1))
          }}></i></span>
      </div>
      </div>
      </div>
    </>
  )
}

export default Testimonial