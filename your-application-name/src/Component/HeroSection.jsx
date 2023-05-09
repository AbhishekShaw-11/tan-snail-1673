import { useState } from "react"
import styled from "styled-components"

import { NavLink } from "react-router-dom"
const HeroSection = () => {
    const [select, Setselect] = useState("")

    const Button = styled.button``;
    const styles = {
        fontSize: '1rem',


        textDecoration: "none",
        backgroundColor: "#1E5CDF",

        borderRadius: "2px",
        height:"2rem",
       
        
    };
    const navLink = {
        textDecoration: "none",
        fontSize: "1rem",
        color: "white",

    }

    return (
        <
            section style={{ padding: "9rem 0", display: "flex" ,justifyContent:"center"}}
        >
            <div className="container grid grid-two-column" style={{display:"flex",gap:"2rem"}}>
                <div className="section-hero-data" style={{}}>
                    <h1>
                        Fight Virus <br /> With Vaccines
                    </h1>
                    <p>Let's Stop this pandemic by killing the virus <br />with a vaccine , don't let yourself and your <br />family get infected.</p>
                   <div style={{display:"flex",gap:"2rem" }}> <label htmlFor="">
                        <input
                            type="radio"
                            name=""
                            value="book"
                            checked={select === 'option1'}
                            onChange={(e) => Setselect(e.target.value)}
                        />Schedule your vaccination
                    </label>
                    <Button className="btn sumbit-btn" style={styles}>
                    <NavLink to="/vaccination" style={navLink}>Submit</NavLink>
                </Button></div>
                </div>

               
                <div className="section-hero-image">
                    <picture>
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/61DF/production/_116155052_vaccination.jpg" alt="error"  style={{width:"35rem",height:"26rem"}}/>
                    </picture>
                </div>
            </div>

           
        </section>

       
    )
}

export default HeroSection