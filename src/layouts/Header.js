import React from 'react';
import Menu from '../components/Menu'
import Logo from '../images/logo.png'
import SVGIcon from "../components/SVGicon";

class Header extends React.Component {
    state = {

    }

    render() {

        return (<header className="header flex-container">
            <div className="logo"><img className="logo__image" src={Logo} alt="" /></div>
            <Menu />

            <div className="title">
                <h1 className="title__heading">Front-End Developer</h1>
                <p className="title__name">Daniel Sobisz</p>
            </div>

            <div className="contact-items">
                <div className="contact-item" > <SVGIcon name="github" width={75} /></div>
                <div className="contact-item"><SVGIcon name="linkedin" width={75} /></div>
                <div className="contact-item"><SVGIcon name="email" width={75} /></div>
            </div>

            <button className="header__btn" >Sprawdź co potrafię</button>

        </header>);
    }
}

export default Header;

