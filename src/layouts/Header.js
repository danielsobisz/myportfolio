import React from 'react';
import SVGIcon from "../components/SVGicon";
import { Link } from "react-scroll";

const Header = () => {
    return (<header className="header flex-container">
        <div className="logo">
            <SVGIcon name="logo" width={100}></SVGIcon>
        </div>
        <div className="title">
            <h1 className="title__heading">Front-End Developer</h1>
            <p className="title__name">Daniel Sobisz</p>
        </div>
        <div className="contact-items">
            <div className="contact-item"><a href="https://github.com/danielsobisz"><SVGIcon name="github" width={75} /></a> </div>
            <div className="contact-item"><a href="https://www.linkedin.com/in/daniel-sobisz-552a26179/"><SVGIcon name="linkedin" width={75} /></a></div>
            <div className="contact-item"><a href="mailto: dsobisz97@gmail.com"><SVGIcon name="email" width={75} /></a></div>
        </div>
        <Link smooth={true} to="technologies">  <button className="header__btn" >Sprawdź co potrafię</button></Link>
    </header>);
}
export default Header;

