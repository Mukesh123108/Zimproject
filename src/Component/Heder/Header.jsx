import React, { useState } from 'react'
import "./heder.css";
import logo from "../img/genzeal-logo.png"
import menu from "../img/controls.png";
import { Link } from 'react-scroll';

const Header = () => {
const mobile=window.innerWidth<=768 ? true:false;
const[menuOpen,setnMenuOpen] =useState(false)
  return (
    <>
    <div className="header">
        <img src={logo} alt='' className='logo'/>
        {menuOpen===false && mobile===true ?  (
            <div style={{backgroundColor:"grey",padding:"7px",borderRadius:"5px",}}
            onClick={()=>setnMenuOpen(true)}
            >
              <img src={menu} alt="" style={{width:"2rem",height:"2rem"}} />
              
            </div>
          ):(
            <ul className='list-menu'>
            <li >
              <Link
               onClick={()=>setnMenuOpen(false)}
               activeClass='active'
               to='Header'
               smooth={true}
               span={true}
              
              >Home</Link>
              </li>
            <li >
            <Link 
              onClick={()=>setnMenuOpen(false)}
              to='reasons'
              smooth={true}
              span={true}
              >Why Us</Link>
              </li>
            <li >
            <Link 
              onClick={()=>setnMenuOpen(false)}
              to='reasons'
              smooth={true}
              span={true}
              >Program</Link>
              </li>
            <li >
            <Link 
              onClick={()=>setnMenuOpen(false)}
              to='plans'
              smooth={true}
              span={true}
              >Plans</Link>
              </li>           
            <li >
              <Link 
              onClick={()=>setnMenuOpen(false)}
              to='testimonial'
              smooth={true}
              span={true}
              >Testimonial</Link>
              
              </li>
        </ul>
          )
        
        }
       
    </div>
    </>
  )
}

export default Header