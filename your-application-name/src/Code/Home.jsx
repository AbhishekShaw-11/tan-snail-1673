import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
const Home = () => {
  return (
    <div>
      <div>
        <h1>MacBook Air 15''</h1>
        <h2>Impressively big. Impossibly thin.</h2>
        <div >
          <p><a href="">Learn more <AiOutlineRight /> </a></p>
          <p><a href="">Buy <AiOutlineRight /> </a></p>
        </div>

        <div>
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604347427000" alt="err" />
        </div>

      </div>

      <div>
        <h1> iPhone 14 Pro</h1>
        <h2>Pro.Beyond</h2>
        <div >
          <p><a href="">Learn more <AiOutlineRight /> </a></p>
          <p><a href="">Buy <AiOutlineRight /> </a></p>
        </div>

        <div>
          <img src="https://photos5.appleinsider.com/gallery/50473-99283-iPhone-14-Pro-Max-colors-xl.jpg" alt="err" />
        </div>
      </div>
      <div>
        <h1> iPhone 14 </h1>
        <h2>Wonderful</h2>
        <div >
          <p><a href="">Learn more <AiOutlineRight /> </a></p>
          <p><a href="">Buy <AiOutlineRight /> </a></p>
        </div>

        <div>
          <img src="https://www.macobserver.com/wp-content/uploads/2022/09/Apple-iPhone-14-Lineup-1024x538.jpg" alt="err" />
        </div>
      </div>
    </div>
  )
}

export default Home
