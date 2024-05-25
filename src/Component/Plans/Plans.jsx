import React from 'react'
import "./plans.css";
import { PlansData } from './PlansData';
import tick from "../img/tick.png";
const Plans = () => {
  return (
<>
    <div className="palns-container">
        <div className="blur plan-b-1"></div>
        <div className="blur plan-b-2"></div>
        <div className="progress" style={{gap: "2rem"}}>
            <span class="strok-text">READY TO START</span>
            <span>YOUR JOURNY</span>
            <span class="strok-text">NOW WITH US</span>
        </div>
        <div className="plans">
            {
                PlansData.map((planview)=>{
                    return(
                        <>
                        
                        <div className="plan">
                         <img src={planview.imgSrcs} alt="" />   
                                <span>{planview.palnName}</span>
                                <span>$ {planview.Pricename}</span>
                                <div className="fiture">
                                    {
                                        planview.fetures.map((fiture)=>{
                                            return(
                                                <>
                                                <div className="fetures">
                                            <img src={tick} alt="" />
                                            <span>{fiture}</span>
                                            </div>
                                            </>
                                        )
                                        })
                                    }
                                </div>
                                <div className="fiturew">
                                    <span>See more benifit -></span>
                                    
                                </div>
                                <button className="btn">Join Us</button>
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

export default Plans