import "../Css/Home.css";
import React from "react";
import { AiFillApple, AiOutlineRight, AiFillPlayCircle, AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Footer from "./Footer";
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div>
            <div className='mac'
          
          >
                <h1  data-aos="zoom-in"  data-aos-delay="1400" data-aos-duration="1500"
                 >MacBook Air 15''</h1>
                <h2 data-aos="zoom-out-up" data-aos-delay="1400" data-aos-duration="1500"
                 >Impressively big. Impossibly thin.</h2>
                <div className='macp' data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1500">
                    <p data-aos="fade-down-right" data-aos-delay="1400" data-aos-duration="1500"><a href="" >Learn more <AiOutlineRight /> </a></p>
                    <p data-aos="fade-up-left" data-aos-delay="1400" data-aos-duration="1500"><a href="" >Buy <AiOutlineRight /> </a></p>
                </div>

                <div className='image-content'
                data-aos="flip-left"
            
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                    <img src={require('./Image/apple laptop.jpg')} alt="err" />
                </div>

            </div>

            <div className='ip14pro' >
                <h1 > iPhone 14 Pro</h1>
                <h2>Pro.Beyond</h2>
                <div className="i14p">
                    <p><a href="">Learn more <AiOutlineRight /> </a></p>
                    <p><a href="">Buy <AiOutlineRight /> </a></p>
                </div>

                <div className='image-content'>
                    <img src="https://photos5.appleinsider.com/gallery/50473-99283-iPhone-14-Pro-Max-colors-xl.jpg" alt="err" />
                </div>
            </div>
            <div className='ip14'>
                <h1> iPhone 14 </h1>
                <h2>Wonderful.</h2>
                <div className="ip14p">
                    <p><a href="">Learn more <AiOutlineRight /> </a></p>
                    <p><a href="">Buy <AiOutlineRight /> </a></p>
                </div>

                <div className='image-content'>
                    <img src="https://www.macobserver.com/wp-content/uploads/2022/09/Apple-iPhone-14-Lineup-1024x538.jpg" alt="err" />
                </div>
            </div>
            <div className='school'>
                <div>
                    <h1>
                        It's easy to switch from <br />
                        Android to iPhone.
                    </h1>
                    <p>Isha easily transferred data to a new iPhone</p>
                    <div >
                        <p><a href="">Watch her film <AiFillPlayCircle /> </a></p>
                        <p><a href="">Discover more stories <AiOutlineRight /> </a></p>
                        <div>
                            <img src={require('./Image/sticker.png')} alt="err" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        Save on Mac or iPad for<br />
                        university.
                    </h1>
                    <p>Plug get AirPods with Mac and Apple Pencil with iPad.</p>
                    <div >

                        <p><a href="">Shop now <AiOutlineRight /> </a></p>
                        <div>
                            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/preunidays-header-hero-202306_GEO_IN?wid=402&hei=364&fmt=png-alpha&.v=1685548520689" alt="err" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='padwatch'>
                <div className='watch'>
                    <h1>
                        <AiFillApple />WATCH
                    </h1>
                    <p>SERIES 8</p>
                    <h4>A healthy leap ahead.</h4>
                    <div >
                        <p><a href="">Learn more<AiOutlineRight /> </a></p>
                        <p><a href="">Buy<AiOutlineRight /> </a></p>
                        <div>
                            <img src={require('./Image/watch.png')} alt="err" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        iPad Pro
                    </h1>
                    <h4>SuperCharged  by <AiFillApple />M2 </h4>
                    <div >
                        <p><a href="">Learn more<AiOutlineRight /> </a></p>
                        <p><a href="">Buy<AiOutlineRight /> </a></p>
                        <div>
                            <img src={require('./Image/ipad.png')} alt="err" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='trade'>
                <div className='upgrade'>
                    <h1>
                        <AiFillApple />Trade In
                    </h1>
                    <p>Upgrade and save. It's that easy.</p>

                    <div >

                        <p><a href="">See what your device is worth<AiOutlineRight /> </a></p>
                        <div>
                            <img src={require('./Image/case.png')} alt="err" />
                        </div>
                    </div>
                </div>
                <div className='airpod'>
                    <h1>
                        AirPods Pro
                    </h1>
                    <p>Rebuilt from the sound up</p>
                    <div >
                        <p><a href="">Learn more<AiOutlineRight /> </a></p>
                        <p><a href="">Buy<AiOutlineRight /> </a></p>
                        <div>
                            <img src="https://www.apple.com/v/airpods-pro/g/images/overview/case_front__r6ng7f1x18a6_large.jpg" alt="err" />
                        </div>
                    </div>
                </div>
            </div>
            {/* slider */}



            <Footer/>
        </div>
    )
}

export default Home
