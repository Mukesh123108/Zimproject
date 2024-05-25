import React from 'react';
import "./program.css";
import {programData} from "./ProgramData";

const Program = () => {
  return (
   <>
   <div className="programs" id="program">
    <div className="progress">
    <span className='strok-text'>Fitness  </span>
    <span>Classes For</span>
    <span>Every Goal</span>
   </div>
   <div className="progarm-ctegary">
    {
        programData.map((progarm1)=>{
            return(
                <>
                <div className='cotegary'>
                 <img src={progarm1.imgSrcs} />
                    <span>{progarm1.titles}</span><span>{progarm1.cTitles}</span>
                </div>
                
                </>
            )
        })
    }
   </div>
   </div>
   </>
  )
}

export default Program