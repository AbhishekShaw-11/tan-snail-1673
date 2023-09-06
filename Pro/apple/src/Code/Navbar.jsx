import "../Css/Navbar.css";
import React from "react";

import { AiFillApple, AiOutlineSearch, AiOutlineRight } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { FaFirstOrder} from "react-icons/fa6";
import {  MdBookmarkBorder,MdAccountCircle} from "react-icons/md";
import { LuCog} from "react-icons/lu";
import Home from "./Home";


const Navbar = () => {

     return (
          <div>
               <div className='navbar'>
                    <nav id='nav' className='nav'>
                         <p data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="3000"><a href="https://www.apple.com/in/"><AiFillApple /></a></p>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1500"><a href="">Store</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Shop
                                        </p>
                                        <div>
                                             <h2>Shop the Latest</h2>
                                             <h2>Mac</h2>
                                             <h2>iPad</h2>
                                             <h2>iPhone</h2>
                                             <h2>Apple Watches</h2>
                                             <h2>Accessories</h2>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Quick Links</p>
                                        <div>
                                             <h6>Find a Store</h6>
                                             <h6>Order Status</h6>
                                             <h6>Way to buy</h6>
                                             <h6>University Student Offer</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop Special Stores</p>
                                        <div>
                                             <h6>Education</h6>
                                             <h6>Business</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1800"><a href="">Mac</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore Mac
                                        </p>
                                        <div>
                                             <h2>Explore All Mac</h2>
                                             <h2>MacBook Air</h2>
                                             <h2>MacBook Pro</h2>
                                             <h2>iMac</h2>
                                             <h2>Mac mini</h2>
                                             <h2>Mac Studio</h2>
                                             <h2>Mac Pro</h2>
                                             <h2>Display</h2>
                                             <h6>Compare Mac</h6>
                                             <h6>Mac Does that</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop Mac</p>
                                        <div>
                                             <h6>Shop Mac</h6>
                                             <h6>Mac Accessories</h6>
                                             <h6>Way to buy</h6>
                                             <h6>University Student Offer</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>More from Mac</p>
                                        <div>
                                             <h6>Mac Support</h6>
                                             <h6>maxOs Sonoma Preview</h6>
                                             <h6>AppleCare+ for Mac </h6>
                                             <h6>Final Cut Pro</h6>
                                             <h6>Logic Pro</h6>
                                             <h6>Continuity</h6>
                                             <h6>iCloud+</h6>
                                             <h6>Mac for Business</h6>
                                             <h6>Education</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="2100">
                                   <a href="">iPad</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore Mac
                                        </p>
                                        <div>
                                             <h2>Explore All Mac</h2>
                                             <h2>MacBook Air</h2>
                                             <h2>MacBook Pro</h2>
                                             <h2>iMac</h2>
                                             <h2>Mac mini</h2>
                                             <h2>Mac Studio</h2>
                                             <h2>Mac Pro</h2>
                                             <h2>Display</h2>
                                             <h6>Compare Mac</h6>
                                             <h6>Mac Does that</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop Mac</p>
                                        <div>
                                             <h6>Shop Mac</h6>
                                             <h6>Mac Accessories</h6>
                                             <h6>Way to buy</h6>
                                             <h6>University Student Offer</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>More from Mac</p>
                                        <div>
                                             <h6>Mac Support</h6>
                                             <h6>maxOs Sonoma Preview</h6>
                                             <h6>AppleCare+ for Mac </h6>
                                             <h6>Final Cut Pro</h6>
                                             <h6>Logic Pro</h6>
                                             <h6>Continuity</h6>
                                             <h6>iCloud+</h6>
                                             <h6>Mac for Business</h6>
                                             <h6>Education</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="2400"><a href="">iPhone</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore iPhone
                                        </p>
                                        <div>
                                             <h2>Explore All iPhone</h2>
                                             <h2>iPhone 14 Pro</h2>
                                             <h2>iPhone 14</h2>
                                             <h2>iPhone 13</h2>
                                             <h2>iPhone 12</h2>
                                             <h2>iPhone SE</h2>
                                             <h6>Compare iPhone</h6>
                                             <h6>Switch from Android</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop iPhone</p>
                                        <div>
                                             <h6>Shop iPhone</h6>
                                             <h6>iPhone Accessories</h6>
                                             <h6>Apple Trade In</h6>
                                             <h6>Way to buy</h6>
                                            
                                        </div>
                                   </div>
                                   <div>
                                        <p>More from iPhone</p>
                                        <div>
                                             <h6>iPhone Support</h6>
                                             <h6>iOS 17 Preview</h6>
                                             <h6>AppleCare+ for iPhone </h6>
                                             <h6>iPhone Privacy</h6>
                                             <h6>icloud+</h6>
                                             <h6>Wallet</h6>
                                             <h6>Siri</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="2700"><a href="">Watch</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore Watch
                                        </p>
                                        <div>
                                             <h2>Explore All Apple Watch</h2>
                                             <h2>Apple Watch Ultra</h2>
                                             <h2>Apple Watch Series 8</h2>
                                             <h2>Apple Watch SE</h2>
                                             <h2>Apple Watch Nike</h2>
                                             <h6>Compare Watch</h6>
                                             <h6>Why Apple Watch</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop Watch</p>
                                        <div>
                                             <h6>Shop Apple Watch</h6>
                                             <h6>Apple Watch Straps</h6>
                                             <h6>Apple Watch Accessories</h6>
                                             <h6>Way to buy</h6>
                                            
                                        </div>
                                   </div>
                                   <div>
                                        <p>More from Watch</p>
                                        <div>
                                             <h6>Apple Watch Support</h6>
                                             <h6>watchOS 10 Preview</h6>
                                             <h6>AppleCare+  </h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="3000"><a href="">AirPods</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore AirPods
                                        </p>
                                        <div>
                                             <h2>Explore All AirPods</h2>
                                             <h2>AirPods Pro 2nd generation </h2>
                                             <h2>AirPods 2nd generation </h2>
                                             <h2>AirPods 3rd generation</h2>
                                             <h2>AirPods Max</h2>
                                             <h6>Compare AirPods</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop AirPods</p>
                                        <div>
                                             <h6>Shop Airpods</h6>
                                             <h6>AirPods Accessories</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>More from AirPods</p>
                                        <div>
                                             <h6>AirPods Support</h6>
                                             <h6>AppleCare+ for HeadPhones</h6>
                                             <h6>Apple Music</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>

                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="3000"><a href="">Tv&Home</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore TV & Home
                                        </p>
                                        <div>
                                             <h2>Explore Tv&Home</h2>
                                             <h2>Apple TV 4K</h2>
                                             <h2>HomePod</h2>
                                             <h2>HomePod mini</h2>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Shop TV & Home</p>
                                        <div>
                                             <h6>Shop Apple TV 4K</h6>
                                             <h6>Shop HomePod </h6>
                                             <h6>Shop HomePod mini</h6>
                                             <h6>Shop Siri Remote</h6>
                                             <h6>Tv & Home Accessories</h6>
                                             
                                        </div>
                                   </div>
                                   <div>
                                        <p>More from TV & Home </p>
                                        <div>
                                             <h6>Apple TV Support</h6>
                                             <h6>HomePod Support</h6>
                                             <h6>AppleCare+  </h6>
                                             <h6>Apple TV app</h6>
                                             <h6>Apple TV+</h6>
                                             <h6>Home app</h6>
                                             <h6>Apple Music</h6>
                                             <h6>Siri</h6>
                                             <h6>AirPlay</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>

                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="2700"><a href="">Entertainment</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore Entertainment
                                        </p>
                                        <div>
                                             <h2>Explore Entertainment</h2>
                                             <h2>Apple One</h2>
                                             <h2>Apple TV+</h2>
                                             <h2>Apple Music</h2>
                                             <h2>Apple Arcade</h2>
                                             <h2>Apple Podcasts</h2>
                                             <h2>Apple Books</h2>
                                             <h2>Apple Store</h2>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Support</p>
                                        <div>
                                             <h6>Apple TV+ Support</h6>
                                             <h6>Apple Music Support</h6>
                                            
                                        </div>
                                   </div>
                                  
                              </ul>
                         </div>

                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="2400"><a href="">Accessories</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore Accessories
                                        </p>
                                        <div>
                                             <h2>Shop All Accessories</h2>
                                             <h2>Mac</h2>
                                             <h2>iPad</h2>
                                             <h2>iPhone</h2>
                                             <h2>Apple Watch</h2>
                                             <h2>AirPods</h2>
                                             <h2>TV & Home</h2>
                                             
                                        </div>
                                   </div>
                                   <div>
                                        <p>Explore Accessories</p>
                                        <div>
                                             <h6>Made by Apple</h6>
                                             <h6>AirTag</h6>
                                        </div>
                                   </div>
                                  
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="2100"><a href="">Support</a>
                              </p>
                              <ul>
                                   <div>
                                        <p>
                                             Explore Support
                                        </p>
                                        <div>
                                             <h2>iPhone</h2>
                                             <h2>Mac </h2>
                                             <h2>iPad </h2>
                                             <h2>Watch</h2>
                                             <h2>AirPod </h2>
                                             <h2>Music</h2>
                                             <h2>TV</h2>
                                             <h6>Explore Support</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Get Help</p>
                                        <div>
                                             <h6>Community</h6>
                                             <h6>Check Coverage</h6>
                                             <h6>Repair</h6>
                                             <h6>Contact us</h6>
                                        </div>
                                   </div>
                                   <div>
                                        <p>Helpful Topics</p>
                                        <div>
                                        <h6> Get AppleCare+ </h6>
                                             <h6>Apple ID & Password</h6>
                                        <h6>Billing & Subscriptions</h6>
                                        <h6>Find My</h6>
                                             <h6>Accessibility</h6>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                         <div>
                              <p data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1800"><a href=""><AiOutlineSearch /></a>
                              </p>
                         </div>

                         <div>
                              <p className="profile" data-aos="fade-down"
                                   data-aos-easing="linear"
                                   data-aos-duration="1500"><a href=""><BsBag /></a>
                              </p>
                              <ul>
                                   <div>
                                        <h2>Your Bag Is Empty</h2>
                                   </div>
                                   <div>
                                       <p> <a href="">Sign in</a> to see if you have any saved item</p>

                                   </div>
                                   <div>
                                        <p>My Profile</p>
                                        <div>
                                             <h5><FaFirstOrder/> Orders</h5>
                                             <h5><MdBookmarkBorder/> Your Saves</h5>

                                             <h5> <LuCog/> Account</h5>
                                             
                                             <h5><MdAccountCircle/> Sign In</h5>
                                        </div>
                                   </div>
                              </ul>
                         </div>
                    </nav>
               </div>
               <div className='heading'>
                    <p data-aos="fade-right"
                         data-aos-offset="400"
                         data-aos-easing="ease-in-out-quart"
                         data-aos-duration="3000">Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.* <a href="">Shop Now<AiOutlineRight /></a></p>
               </div>
               <Home />
          </div>
     )
}

export default Navbar