import "../Css/Navbar.css";
import React from "react";

import { AiFillApple,AiOutlineSearch,AiOutlineRight} from "react-icons/ai";
import { BsBag} from "react-icons/bs";
import Home from "./Home";

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <nav id='nav' className='nav'>
          <p><a href="https://www.apple.com/in/"><AiFillApple/></a></p>
          <p><a href="">Store</a></p>
          <p><a href="">Mac</a></p>
          <p><a href="">iPad</a></p>
          <p><a href="">iPhone</a></p>
          <p><a href="">Watch</a></p>
          <p><a href="">AirPods</a></p>
          <p><a href="">Tv&Home</a></p>
          <p><a href="">Entertainment</a></p>
          <p><a href="">Accessories</a></p>
          <p><a href="">Support</a></p>
         <p><a href=""><AiOutlineSearch/></a></p>
        <p><a href=""><BsBag/></a></p>
         
        </nav>
      </div>
      <div className='heading'>
      <p>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* <a href="">Shop Now<AiOutlineRight/></a></p>
      </div>
    <Home/>
    </div>
  )
}

export default Navbar