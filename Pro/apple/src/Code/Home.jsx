import "../Css/Home.css";
import React from 'react'
import { AiFillApple, AiOutlineRight, AiFillPlayCircle, AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Footer from "./Footer";
import Slider from "./Slider";



const Home = ({ timeline }) => {

    return (
        <div>
            <div className='mac'

            >
                <h1 data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="2700"
                >MacBook Air 15''</h1>
                <h2 data-aos="zoom-out-up" data-aos-delay="1400" data-aos-duration="3000"
                >Impressively big. Impossibly thin.</h2>
                <div className='macp' data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1500">
                    <p data-aos="fade-down-right" data-aos-delay="1400" data-aos-duration="2700"><a href="" >Learn more <AiOutlineRight /> </a></p>
                    <p data-aos="fade-up-left" data-aos-delay="1400" data-aos-duration="2700"><a href="" >Buy <AiOutlineRight /> </a></p>
                </div>

                <div className='image-content'
                    data-aos="flip-left"

                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <img src={require('./Image/apple laptop.jpg')} alt="err" />
                </div>

            </div>

            <div className='ip14pro'
                data-aos="fade-down-left"
                data-aos-duration="1500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <h1 data-aos="flip-up"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-out-sine"
                    data-aos-duration="2100"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                > iPhone 14 Pro</h1>

                <h2 data-aos="zoom-out-right"
                    data-aos-delay="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2400"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >Pro.Beyond</h2>

                <div className="i14p" >
                    <p data-aos="flip-down"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="400"
                        data-aos-duration="2700"
                        data-aos-mirror="true"
                        data-aos-once="false"><a href="">Learn more <AiOutlineRight /> </a></p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="400"
                        data-aos-duration="2700"
                        data-aos-mirror="true"
                        data-aos-once="false"><a href="">Buy <AiOutlineRight /> </a></p>
                </div>

                <div className='image-content' data-aos="zoom-out-up"
                    data-aos-easing="ease-in-out-back"
                    data-aos-delay="100"
                    data-aos-duration="3000"
                    data-aos-mirror="true"
                    data-aos-once="false">
                    <img src="https://photos5.appleinsider.com/gallery/50473-99283-iPhone-14-Pro-Max-colors-xl.jpg" alt="err" />
                </div>
            </div>


            <div className='ip14'>
                <h1 data-aos="zoom-out-up"
                    data-aos-delay="600"
                    data-aos-easing="ease-out-sine"
                    data-aos-duration="3000"
                    data-aos-mirror="true"
                    data-aos-once="false" data-aos-anchor-placement="top-center"> iPhone 14 </h1>
                <h2 data-aos="slide-right"
                    data-aos-delay="400"
                    data-aos-easing="ease-out-sine"
                    data-aos-duration="3000"
                    data-aos-mirror="true"
                    data-aos-once="false" data-aos-anchor-placement="top-center">Wonderful.</h2>
                <div className="ip14p">
                    <p data-aos="zoom-out-right"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="3000"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Learn more <AiOutlineRight /> </a></p>
                    <p data-aos="zoom-out-left"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="3000"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Buy <AiOutlineRight /> </a></p>
                </div>

                <div className='image-content' data-aos="zoom-in-right"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out-sine"
                    data-aos-duration="3000"
                    data-aos-mirror="true"
                    data-aos-once="false" data-aos-anchor-placement="top-center">
                    <img src="https://www.macobserver.com/wp-content/uploads/2022/09/Apple-iPhone-14-Lineup-1024x538.jpg" alt="err" />
                </div>
            </div>
            <div className='school' data-aos="zoom-out-left"
                data-aos-delay="1400"
                data-aos-easing="ease-out-sine"
                data-aos-duration="3000"
                data-aos-mirror="true"
                data-aos-once="false" data-aos-anchor-placement="top-center">

                <div data-aos="slide-left"
                    data-aos-delay="1000"
                    data-aos-easing="ease-out-sine"
                    data-aos-duration="1500"
                    data-aos-mirror="true"
                    data-aos-once="false" data-aos-anchor-placement="top-center">
                    <h1 className="schooltext" data-aos="fade-up-left"
                        data-aos-delay="800"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1800"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center" >
                        It's easy to switch from


                    </h1>
                    <h1 className="schooltext" data-aos="fade-up-left"
                        data-aos-delay="800"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1800"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center" >Android to iPhone.</h1>
                    <p className="schoolpara" data-aos="fade-down-left"
                        data-aos-delay="600"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2100"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">Isha easily transferred data to a new iPhone</p>
                    <div className="markline" >
                        <p data-aos="flip-left"
                            data-aos-delay="400"
                            data-aos-easing="ease-out-sine"
                            data-aos-duration="2400"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Watch her film <AiFillPlayCircle /> </a></p>
                        <p data-aos="flip-left"
                            data-aos-delay="400"
                            data-aos-easing="ease-out-sine"
                            data-aos-duration="2400"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Discover more stories <AiOutlineRight /> </a></p>
                    </div>
                    <div className="sticker" data-aos="zoom-out-left"
                        data-aos-delay="200"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2700"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">
                        <img src={require('./Image/sticker.png')} alt="err" />
                    </div>

                </div>
                <div className="save" data-aos="slide-right"
                    data-aos-delay="1000"
                    data-aos-easing="ease-out-sine"
                    data-aos-duration="1500"
                    data-aos-mirror="true"
                    data-aos-once="false" data-aos-anchor-placement="top-center">
                    <h1 className="schooltext"
                        data-aos="fade-up-right"
                        data-aos-delay="800"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1800"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center"          >
                        Save on Mac or iPad for

                    </h1>
                    <h1 className="schooltext" data-aos="fade-up-right"
                        data-aos-delay="800"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1800"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center" >

                        university.
                    </h1>


                    <p className="schoolpara" data-aos="fade-down-right"
                        data-aos-delay="600"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2100"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center" >Plug get AirPods with Mac and Apple Pencil with iPad.</p>
                    <div >

                        <p className="ip14p" data-aos="flip-right"
                            data-aos-delay="400"
                            data-aos-easing="ease-out-sine"
                            data-aos-duration="2400"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center" ><a href="">Shop now <AiOutlineRight /> </a></p>
                        <div className="sticker" data-aos="zoom-out-right"
                            data-aos-delay="200"
                            data-aos-easing="ease-out-sine"
                            data-aos-duration="2700"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center" >
                            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/preunidays-header-hero-202306_GEO_IN?wid=402&hei=364&fmt=png-alpha&.v=1685548520689" alt="err" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='school'>
                <div className='padwatch'>
                    <div className="pad1" data-aos="fade-down-left"
                        data-aos-delay="1000"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">
                        <h1 className="watch" data-aos="flip-down-left"
                            data-aos-delay="800"
                            data-aos-easing="linear"
                            data-aos-duration="1800"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">
                            <AiFillApple />WATCH
                        </h1>
                        <p className="series" data-aos="slide-left"
                            data-aos-delay="800"
                            data-aos-easing="ease-in"
                            data-aos-duration="2100"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">SERIES 8</p>
                        <h4 className="tagh4" data-aos="fade-left"
                            data-aos-delay="600"
                            data-aos-easing="ease-out"
                            data-aos-duration="2400"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">A healthy leap ahead.</h4>
                        <div className="markline">
                            <p data-aos="fade-up-left"
                                data-aos-delay="400"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="2700"
                                data-aos-mirror="true"
                                data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Learn more<AiOutlineRight /> </a></p>
                            <p data-aos="fade-down-left"
                                data-aos-delay="400"
                                data-aos-easing="ease-in-back"
                                data-aos-duration="2700"
                                data-aos-mirror="true"
                                data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Buy<AiOutlineRight /> </a></p>
                        </div>
                        <div className="sticker" data-aos="zoom-out-left"
                            data-aos-delay="800"
                            data-aos-easing="ease-out-back"
                            data-aos-duration="2400"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">
                            <img src={require('./Image/watch.png')} alt="err" />
                        </div>

                    </div>
                    <div className="pad2" data-aos="fade--down-right"
                        data-aos-delay="800"
                        data-aos-easing="ease-in-out-sine"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-bottom">
                        <h1 className="watch" data-aos="fade-up-right"
                            data-aos-delay="800"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1800"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">
                            iPad Pro
                        </h1>
                        <h4 className="tagh4" data-aos="fade-right"
                            data-aos-delay="700"
                            data-aos-easing="ease-in-quad"
                            data-aos-duration="2100"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">SuperCharged  by <AiFillApple />M2 </h4>
                        <div className="markline">
                            <p data-aos="flip-right"
                                data-aos-delay="600"
                                data-aos-easing="ease-out-quad"
                                data-aos-duration="2400"
                                data-aos-mirror="true"
                                data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Learn more<AiOutlineRight /> </a></p>
                            <p data-aos="flip-right"
                                data-aos-delay="500"
                                data-aos-easing="ease-in-out-quad"
                                data-aos-duration="2400"
                                data-aos-mirror="true"
                                data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Buy<AiOutlineRight /> </a></p>
                        </div>
                        <div className="sticker" data-aos="zoom-out-right"
                            data-aos-delay="200"
                            data-aos-easing="ease-out-sine"
                            data-aos-duration="2400"
                            data-aos-mirror="true"
                            data-aos-once="false" data-aos-anchor-placement="top-center">
                            <img src={require('./Image/ipad.png')} alt="err" />
                        </div>

                    </div>

                </div>
            </div>

            <div className="trademain" >
                <div className='trade'>
                    <div className='upgrade'   data-aos="zoom-out"
                        data-aos-delay="1000"
                        data-aos-easing="ease-in-cube"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-bottom">
                        <h1 data-aos="zoom-out-up"
                        data-aos-delay="800"
                        data-aos-easing="ease-out-quad"
                        data-aos-duration="1800"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-top">
                            <AiFillApple />Trade In
                        </h1>
                        <p   data-aos="fade-up-left"
                        data-aos-delay="600"
                        data-aos-easing="ease-out-cube"
                        data-aos-duration="2100"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="center-bottom">Upgrade and save. It's that easy.</p>

                        <div className="markline">

                            <p   data-aos="fade-up-left"
                        data-aos-delay="500"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2400"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">See what your device is worth<AiOutlineRight /> </a></p>
                            </div>
                            <div   data-aos="zoom-in-left" 
                        data-aos-delay="300"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="3000"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">
                                <img src={require('./Image/case.png')} alt="err" />
                            </div>
                        
                    </div>
                    <div className='airpod'   data-aos="fade-in-right"
                        data-aos-delay="1000"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">

                        <h1  data-aos="fade-up-right"
                        data-aos-delay="800"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="1800"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">
                            AirPods Pro
                        </h1>

                        <p   data-aos="flip-right"
                        data-aos-delay="600"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2100"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">Rebuilt from the sound up</p>
                        <div  className="markline">
                            <p  className="pad1" data-aos="flip-left"
                        data-aos-delay="400"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2400"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Learn more<AiOutlineRight /> </a></p>
                            <p   data-aos="flip-right"
                        data-aos-delay="400"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="2400"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center"><a href="">Buy<AiOutlineRight /> </a></p>
                            </div>
                            <div   data-aos="zoom-out-right"
                        data-aos-delay="300"
                        data-aos-easing="ease-out-sine"
                        data-aos-duration="3000"
                        data-aos-mirror="true"
                        data-aos-once="false" data-aos-anchor-placement="top-center">
                                <img src="https://www.apple.com/v/airpods-pro/g/images/overview/case_front__r6ng7f1x18a6_large.jpg" alt="err" />
                            </div>
                       
                    </div>
                </div>
            </div>
            {/* slider */}

<Slider/>

            <Footer />
        </div>
    )
}

export default Home
