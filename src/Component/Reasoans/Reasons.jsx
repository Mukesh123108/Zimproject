import React from 'react'
import "./reasons.css";
import img1 from "../img/f1.jpg";
import img2 from "../img/f2.jpg";
import img3 from "../img/f3.jpg";
import img4 from "../img/f4.jpg";
import tick from "../img/tick.png";
import add from "../img/add.png"
const Reasons = () => {
  return (
   <>
    <div className="reasons" id="reasons">
            <div className="l-reason">
                <img src={img1} alt=''/>
                <img src={img2} alt=''/>
                <img src={img3} alt=''/>
                <img src={img4} alt=''/>
            </div>
            <div className="r-reason">
                <span>Some Reasone</span>
                <div>
                    <span class="strok-text">Why </span>
                    <span>Choose Us ?</span>
                    
                </div>
                <div className='r-detail'>
                <div><img src={tick} alt=""/><span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</span></div>
                <div><img src={tick} alt="" /><span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</span></div>
                <div><img src={tick} alt="" /><span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</span></div>
                <div><img src={tick} alt="" /><span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator</span></div>
                
            </div>
            <span style={{color:'grey',fontWeight:'normal'}}>Our Partner</span>
            <div className="partener" >
                <img src={add} alt="" />
                <img src={add} alt="" />
                <img src={add} alt="" />
            </div>
            </div>
            
    </div>
   </>
  )
}

export default Reasons