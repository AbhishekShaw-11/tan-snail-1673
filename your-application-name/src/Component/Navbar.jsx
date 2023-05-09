import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const styles = {
        fontSize: '16px',
        display: "flex",
        gap: "4.8rem",
        textDecoration:"none" ,
        listStyle:"none",
        
    };
    const navLink={
        textDecoration:"none",
        fontSize:"1rem",
        
        
    }
    return (

        <div className="menuIcon" style={{ display: "flex", justifyContent: "space-between", textDecoration: "none" }}>
            <ul className="navBar-list" style={styles}>
                <li>
                    <NavLink to="/" style={navLink}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/database" style={navLink}> Database</NavLink>
                </li>
                <li>
                    <NavLink to="/vaccination" style={navLink}> Vaccination</NavLink>

                </li>
                <li>
                    <NavLink to="/news" style={navLink}>News</NavLink>
                </li>
                
                <li>
                    <NavLink to="/signUp" style={navLink}>SignUp</NavLink>
                </li>
                <li>
                    <NavLink to="/signIn" style={navLink}> SignIn</NavLink>
                </li>
            </ul>

        </div>

    )
};


export default Navbar;