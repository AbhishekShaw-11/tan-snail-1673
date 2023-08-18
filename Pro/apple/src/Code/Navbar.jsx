import "../Css/Navbar.css";
import React from "react";

import { AiFillApple,AiOutlineSearch,AiOutlineRight} from "react-icons/ai";
import { BsBag} from "react-icons/bs";
import Home from "./Home";
import gsap from 'gsap';

const Navbar = () => {
     let timeline = gsap.timeline();
  return (
    <div>
      <div className='navbar'>
        <nav id='nav' className='nav'>
          <p  data-aos="zoom-in"  data-aos-delay="1200" data-aos-duration="3000"><a href="https://www.apple.com/in/"><AiFillApple/></a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"><a href="">Store</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1800"><a href="">Mac</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2100">
      <a href="">iPad</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2400"><a href="">iPhone</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2700"><a href="">Watch</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000"><a href="">AirPods</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000"><a href="">Tv&Home</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2700"><a href="">Entertainment</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2400"><a href="">Accessories</a></p>
          <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2100"><a href="">Support</a></p>
         <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1800"><a href=""><AiOutlineSearch/></a></p>
        <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"><a href=""><BsBag/></a></p>
         
        </nav>
      </div>
      <div className='heading'>
      <p  data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-out-quart"
     data-aos-duration="3000">Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* <a href="">Shop Now<AiOutlineRight/></a></p>
      </div>
    <Home timeline= {timeline}/>
    </div>
  )
}

export default Navbar