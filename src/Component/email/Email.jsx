import React, { useRef } from 'react'
import "./Email.css";
import emailjs from "@emailjs/browser"
const Email = () => {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ktw84ly', 'template_veuf6ih', form.current, {
            publicKey: 'moloy59MjzrumLxPo',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <>
        <div className="join">
        <div className="left-j">
            <hr/>
            <div>
                <span className='strok-text'>REDY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span className='strok-text'>YOUR BODY</span>
                <span> WITH US</span>
            </div>
        </div>
            <div className="rignt-j">
                <form className='E-mailcont' ref={form} onSubmit={sendEmail}>
                    <input type="email" name="from_name" placeholder='Enter Your Email Address' id="" />
                  <button className='btn btn-j'>Join now</button>
                </form>
            </div>
            
        </div>
    </>
  )
}

export default Email